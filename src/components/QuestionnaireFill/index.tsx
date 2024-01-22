import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton2'
import PRadioRegularGroup from "@/components/common/PRadioRegularGroup"
import PCheckboxGroup from "@/components/common/PCheckboxGroup"
import PInput from "@/components/common/PInput2"
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionnaireApi, IQuestionnaireData, IAnswerItem, answerQuestionnaireApi } from '@/apis/questionnaire'
import { useRequest, useCountDown } from 'ahooks'
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { toast } from '@/components/common/PToast/index'
import ClockIcon from '@/components/common/Icons/Clock'
import { prompt } from '@/components/common/PPromptModal'

interface IChoiceItemProps {
  key: string | number
  value: string
  label: string 
}


interface IQuestionItemProps {
  answer: string | string[]
  options?: IChoiceItemProps[]
  multiChoiceValue?: string[]
  singleChoiceValue?: string
  number?: number
  question?: string
  choice?: number
  required?: boolean
  type?: string
  optionNum?: number
}

interface IQuestionnaireInfo {
  name: string,
  description?: string
  timeInfo: {
    dueDate: string
    dueTime: string
    timeLimit: number
  }
  questions: IQuestionItemProps[]
}


const QuestionnaireFill: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [targetDate, setTargetDate] = useState(Date.now())
  const [questionnaireInfo, setQuestionnaireInfo] = useState<IQuestionnaireInfo>({
    name: '',
    description: '',
    timeInfo: {
      dueDate: '',
      dueTime: '',
      timeLimit: 0
    },
    questions: []
  })

  const [, formattedRes] = useCountDown({
    targetDate: targetDate,
    async onEnd() {
      prompt?.current?.show({
        content: 'The timer ends, please try again',
        contentClassName: 'flex justify-center items-center',
        footer: <div className="flex justify-end">
          <PButton 
            className="!bg-[#F0E8E3] !w-[100px] h-[33px] text-[20px] font-playfair" 
            radius="full" size="sm" 
            onClick={() => {
              prompt?.current?.close()
              navigate('/')
            }}
          >
            OK
          </PButton>
        </div>
      })
      
    }
  })
  const { minutes, seconds } = formattedRes
  

  const { handleSubmit, control, setValue, trigger, formState: { errors } } = useForm<{ questions: IQuestionItemProps[] }>({
    mode: 'onChange',
    values: {
      questions: questionnaireInfo.questions
    }
  })
  const { fields: questionFields } = useFieldArray({
    control,
    name: 'questions',
  })

  useRequest(() => getQuestionnaireApi(id!), {
    onSuccess: (res: IQuestionnaireData) => {
      const { name, description, timeInfo, eassayQuestions = [], choiceQuestions = [] } = res
      let newItems: IQuestionItemProps[] = []
      eassayQuestions.forEach(item => {
        newItems.push({
          answer: '',
          type: 'text',
          question: item.question,
          number: item.number,
          required: !!item.required,
        })
      })
      choiceQuestions.forEach(item => {
        newItems.push({
          answer: '',
          type: 'choice',
          question: item.question,
          number: item.number,
          required: !!item.required,
          choice: item.choice,
          options: item.options ? item.options.map((item, index) => {
            return { key: index, value: item, label: item }
          }) : [],
          optionNum: item.options!.length
        })
      })
      newItems = newItems.map((it, index) => ({ ...it, id: `${+new Date() + index}` }))
        .sort((a, b) => a.number! - b.number!)

      setQuestionnaireInfo({
        name,
        description,
        timeInfo: timeInfo || {},
        questions: newItems,
      })
      setTargetDate(Date.now() + timeInfo.timeLimit * 60 * 1000)
    },
    ready: !!id
  })

  const { run: submitRun, loading: submitLoading } = useRequest(answerQuestionnaireApi, {
    manual: true,
    onSuccess() {
      toast.current?.info('Submit successfully!')
      navigate('/')
    }
  })

  const onSubmit = (data: { questions: IQuestionItemProps[] }) => {
    const eassayQuestions: IAnswerItem[] = []
    const choiceQuestions: IAnswerItem[] = []
    data.questions.forEach(item => {
      const { number, answer, type } = item
      const newItem: IAnswerItem = { number, answer }
      if (type === 'text') {
        eassayQuestions.push(newItem)
      } else {
        choiceQuestions.push(newItem)
      }
    })
    submitRun({
      id: id!,
      data: {
        eassayQuestions,
        choiceQuestions
      }
    })
  }

  return (
    <div className="flex justify-center">
      <div className="relative">
        <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
            <form onSubmit={handleSubmit(onSubmit)}>

              <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">
                {questionnaireInfo.name}
              </PTitle>
              <p className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
                {questionnaireInfo.description}
              </p>

              <PScrollContainer className="mt-[32px] h-[600px] pr-[15px]">
                {
                  questionFields.map((it, index) => {
                    return (
                      <div key={index} className={index ? 'mt-[18px]' : ''}>
                        <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">
                          {it.question}
                        </PTitle>
                        {
                          it.type === 'text' ? (
                            <Controller
                              control={control}
                              name={`questions.${index}.answer`}
                              defaultValue={it.answer as string}
                              rules={{ required: 'Please enter the answer' }}
                              render={({ field }) => (
                                <PInput 
                                  className='!h-[50px]' 
                                  {...field}
                                  value={field.value as string}
                                  required
                                  errorMessage={errors.questions?.[index]?.answer?.message && errors.questions[index].answer.message}
                                />
                              )}
                            />
                          )  : it.choice! > 1 ?  (
                            <Controller
                              control={control}
                              name={`questions.${index}.answer`}
                              defaultValue={[]}
                              rules={{ required: 'Please select the answer' }}
                              render={({ field }) => (
                                <PCheckboxGroup 
                                  value={field.value as string[]}
                                  onChange={field.onChange}
                                  options={it.options} 
                                  isRequired
                                  errorMessage={errors.questions?.[index]?.answer?.message && errors.questions[index].answer.message}
                                />
                              )}
                            />
                          ) : (
                            <Controller
                              control={control}
                              name={`questions.${index}.answer`}
                              defaultValue={''}
                              rules={{ required: 'Please select the answer' }}
                              render={({ field }) => (
                                <PRadioRegularGroup 
                                  isRequired
                                  options={it.options}  
                                  value={field.value as string}
                                  onValueChange={(value) => {
                                    setValue(`questions.${index}.answer`, value)
                                    trigger(`questions.${index}.answer`)
                                  }}
                                  errorMessage={errors.questions?.[index]?.answer?.message && errors.questions[index].answer.message}
                                />
                              )}
                            />
                          )
                        }
                      </div>
                    )
                  })
                }
            </PScrollContainer>

            <div className="mt-[25px] flex justify-end">
              <PButton className="text-[20px] h-[40px]" size="sm" radius="full" type="submit" isLoading={submitLoading}>Submit</PButton>
            </div>
          </form>
        </PCard>

        <div className="absolute w-[142px] h-[50px] bg-[#F1E8E3] right-[-177px] top-0 rounded-3xl flex justify-center items-center">
          <ClockIcon />
          <span className="ml-[10px] font-playfair text-[21px] text-[#141414]">
            {minutes >= 10 ? minutes : `0${minutes}`}:{seconds >= 10 ? seconds : `0${seconds}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default QuestionnaireFill
