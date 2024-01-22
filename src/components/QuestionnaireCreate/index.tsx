import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useEffect, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton2'
import CalenderIcon from '@/components/common/Icons/Calendar'
import ClockIcon from '@/components/common/Icons/Clock'
import SandClockIcon from '@/components/common/Icons/SandClock'
import PPlainInput from "@/components/common/PPlainInput"
import QuestionnaireCreateItem, { dataItemProps } from '@/components/QuestionnaireCreateItem'
import PTextarea from '@/components/common/PTextarea'
import dayjs from 'dayjs'
import DatePicker from "react-datepicker";
import { useParams, useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks'
import { getQuestionnaireApi, IQuestionnaireData, createQuestionnaireApi, updateQuestionnaireApi } from '@/apis/questionnaire'
import "react-datepicker/dist/react-datepicker.css";
import { useForm, FormProvider, useFieldArray, Controller } from "react-hook-form"
import PMultiPlainInput from "@/components/common/PMultiPlainInput"
import { toast } from '@/components/common/PToast/index'
// import Datepicker1 from "react-tailwindcss-datepicker"; 

const defaultOptionNum = 3
const defaultSelectNum = 1
const defaultOptions = [
  {
    id: `${+new Date()}1`,
    question: 'question1',
    type: 'text',
    optionNum: defaultOptionNum,
    selectNum: defaultSelectNum,
    required: false,
    options: []
  },
  {
    id: `${+new Date()}2`,
    question: 'question2',
    type: 'choice',
    optionNum: 1,
    selectNum: defaultSelectNum,
    required: false,
    options: []

  },
  {
    id: `${+new Date()}3`,
    question: 'question3',
    type: 'choice',
    optionNum: defaultOptionNum,
    selectNum: 2,
    required: false,
    options: []
  },
]
interface ICreateForm {
  name: string
  description: string
  dueDate: string
  dueTime: string[]
  timeLimit: string
  questionItems: dataItemProps[]
}


const defaultCreateForm = {
  name: 'Untitled Questionnaire',
  description: '',
  dueDate: `${dayjs().add(1, 'day').format('YYYY MMM DD')}`,
  dueTime: ['12', '00'],
  timeLimit: '10',
  questionItems: defaultOptions
}

const rules = {
  name: {
    required: 'Please enter the questionnaire name'
  },
  description: {
    required: 'Please enter the questionnaire description'
  },
  dueTime: {
    required: true,
    validate: (value: string[]) => {
      const timeStr = value.join(':')
      const timeRef = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/
      return timeRef.test(timeStr) || 'Please enter a valid due time'
    },
  },
  timeLimit: {
    required: 'Please enter time limit',
    validate: (value: string) => {
      return +value >= 10 || 'The time limit must not be less than 10 minutes'
    }
  }
}

const QuestionnaireCreate: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [questionnaireForm, setQuestionnaireForm] = useState<ICreateForm>({
    name: '',
    description: '',
    dueDate: `${dayjs().add(1, 'day').format('YYYY MMM DD')}`,
    dueTime: ['12', '00'],
    timeLimit: '00',
    questionItems: []
  })

  useEffect(() => {
    if (!id) {
      setQuestionnaireForm(defaultCreateForm)
    }
  }, [])
  
  useRequest(() => getQuestionnaireApi(id!), {
    onSuccess: (res: IQuestionnaireData) => {
      const { name, description, timeInfo, eassayQuestions = [], choiceQuestions = [] } = res
      let newItems: dataItemProps[] = []
      eassayQuestions.forEach(item => {
        newItems.push({
          type: 'text',
          question: item.question,
          number: item.number,
          required: !!item.required,
        })
      })
      choiceQuestions.forEach(item => {
        newItems.push({
          type: 'choice',
          question: item.question,
          number: item.number,
          required: !!item.required,
          selectNum: item.choice,
          options: item.options,
          optionNum: item.options!.length
        })
      })
      newItems = newItems.map((it, index) => ({ ...it, id: `${+new Date() + index}` }))
        .sort((a, b) => a.number! - b.number!)
      
      setQuestionnaireForm({
        name,
        description,
        dueDate: `${dayjs(timeInfo?.dueDate).format('YYYY MMM DD')}`,
        dueTime: timeInfo?.dueTime.split(':').slice(0, 2) || ['00', '00'],
        timeLimit: timeInfo?.timeLimit + '',
        questionItems: newItems
      })
    },
    ready: !!id
  })

  const { run: createRun, loading: createLoading } = useRequest(createQuestionnaireApi, {
    manual: true,
    onSuccess() {
      toast.current?.info('Save successfully!')
      navigate(-1)
    }
  })
  const { run: updateRun, loading: updateLoading } = useRequest(updateQuestionnaireApi, {
    manual: true,
    onSuccess() {
      toast.current?.info('Update successfully!')
      navigate(-1)
    }
  })

  const methods = useForm<ICreateForm>({
    mode: 'onChange',
    values: questionnaireForm
  })
  const { handleSubmit, setValue, control, formState: { errors } } = methods
  const { fields: itemsFields, append, remove } = useFieldArray({
    control,
    name: 'questionItems',
  })
  
  
  const handleAddQuestion = () => {
    const id = `${+new Date()}`
    append({
      id,
      question: '',
      type: 'text',
      optionNum: defaultOptionNum,
      selectNum: defaultSelectNum,
    })
  }
  
  const handleDelete = (index: number) => {
    remove(index)
  }

  const onSubmit = async (data: ICreateForm) => {
    const { name = '', description = '', dueDate, dueTime = [], timeLimit, questionItems = [] } = data

    const newItems = questionItems.map((item, index) => ({ ...item, number: index + 1 }))
    const params: IQuestionnaireData = {
      name,
      description,
      timeInfo: {
        dueDate: dayjs(dueDate).format('YYYY-MM-DD'),
        dueTime: dueTime.join(':') + ':00',
        timeLimit: Number(timeLimit || 0),
      },
      eassayQuestions: newItems.filter(it => it.type === 'text')
        .map(it => ({ number: it.number, question: it.question, required: it.required })),
      choiceQuestions: newItems.filter(it => it.type === 'choice')
        .map(it => {
          const { number, question, options, selectNum, required } = it
          return {
            number, 
            question,
            options,
            choice: selectNum,
            required
          }
        })
    }
    
    if (!id) { 
      createRun(params)
    } else {
      updateRun({ id, ...params })
    }
  }
  
  return (
    <div className="flex justify-center">
      <PCard className="w-[1060px] h-[900px] px-[80px] pr-[20px] py-[24px] pb-[30px] bg-[#F1E8E3]" bodyClass="p-0">
        <FormProvider  {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              defaultValue={questionnaireForm.name}
              rules={rules.name}
              render={({ field }) => (
                <PPlainInput 
                  classNames={{
                    base: '!h-[86px] w-[880px]',
                    innerWrapper: 'h-[86px] leading-[86px]',
                    input: 'text-[65px] leading-[86px] text-left'
                  }}
                  aria-labelledby="questionnaire-name"
                  errorMessage={errors.name && errors.name.message}
                  placeholder="Title starts here... "
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              defaultValue={questionnaireForm.description}
              rules={rules.description}
              render={({ field }) => (
                <PTextarea 
                  classNames={{
                    base: 'w-[880px] mt-[20px]',
                    inputWrapper: '!bg-transparent shadow-none',
                    input: 'text-[23px] leading-[31px] font-playfair font-bold !text-[#565352]',
                  }}
                  aria-labelledby="questionnaire-description"
                  placeholder="Description starts here..."
                  errorMessage={errors.description && errors.description.message}
                  {...field}
                />
              )}
            />

            <PScrollContainer className="mt-[5px] h-[570px] pr-[15px]">
              <div className="flex">
                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Date</PTitle>
                  <Controller
                    control={control}
                    name="dueDate"
                    defaultValue={questionnaireForm.dueDate}
                    render={({ field }) => (
                      <DatePicker 
                        customInput={
                          <div className="w-[200px] font-playfair !bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] cursor-pointer flex items-center">
                            <CalenderIcon />
                            <span className="ml-[10px] text-[20px] font-normal">{ field.value }th</span>
                          </div>
                        }
                        selected={new Date(field.value!)}
                        dateFormat="YYYY MMM DD"
                        value={field.value}
                        onChange={(date: Date) => {
                          setValue('dueDate', dayjs(date).format('YYYY MMM DD'))
                        }}
                      />
                    )}
                  />
                </div>

                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Time</PTitle>
                  <Controller
                      control={control}
                      name="dueTime"
                      defaultValue={questionnaireForm.dueTime}
                      rules={rules.dueTime}
                      render={({ field }) => (
                        <div>
                          <div ref={field.ref} className="relative !bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] flex items-center">
                          <ClockIcon />
                          <div className="ml-[10px] flex">
                            <PMultiPlainInput 
                              {...field}
                              boxClassName="w-[60px] !pt-0 pb-[5px]"
                              join=":"
                              joinClassName="mx-[5px] pb-[5px]"
                              type='number'
                              config={[{
                                maxLength: 2,
                              }, {
                                maxLength: 2,
                              }]}
                            />
                        </div>
                      </div>
                      <span className="absolute text-tiny text-danger p-[4px]">{errors.dueTime?.message}</span>
                    </div>
                    )}
                  />
                </div>
                <div>
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Time Limit</PTitle>
                  <Controller
                    control={control}
                    name="timeLimit"
                    defaultValue={questionnaireForm.timeLimit}
                    rules={rules.timeLimit}
                    render={({ field }) => (
                      <div>
                        <div className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] flex items-center">
                          <SandClockIcon />
                          <div className="ml-[10px] flex items-center">
                            <PPlainInput 
                              className="w-[40px]"
                              classNames={{
                                input: 'text-center'
                              }}
                              ref={field.ref}
                              value={field.value}
                              onChange={field.onChange}
                              maxLength={4}
                            />
                            <span className="ml-[5px] text-[21px] leading-[28px] font-playfair">min</span>
                          </div>
                        </div>
                        <span className="absolute text-tiny text-danger p-[4px]">{errors.timeLimit?.message}</span>
                      </div>
                    )}
                  />
                </div>
              </div>

              <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px] mt-[10px]">Questions</PTitle>
              {
                itemsFields.map((it, index, arr) => {
                  return <QuestionnaireCreateItem
                    key={it.id}
                    {...it}
                    index={index}
                    showAdd={index === arr.length - 1}
                    onDelete={() => handleDelete(index)}
                    onAddItem={handleAddQuestion}
                  />
                })
              }
            </PScrollContainer>

            <div className="mt-[20px] pr-[70px] flex justify-end">
              <PButton 
                className="text-[20px] h-[40px]" 
                size="sm" 
                radius="full" 
                type="submit"
                isLoading={createLoading || updateLoading}
              >Save</PButton>
            </div>
          </form>
        </FormProvider>
      </PCard>
    </div>
  )
}

export default QuestionnaireCreate
