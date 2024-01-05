import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useEffect, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton'
import CalenderIcon from '@/components/common/Icons/Calendar'
import ClockIcon from '@/components/common/Icons/Clock'
import SandClockIcon from '@/components/common/Icons/SandClock'
import PPlainInput from "@/components/common/PPlainInput"
import QuestionnaireCreateItem, { dataItemProps } from '@/components/QuestionnaireCreateItem'
import PTextarea from '@/components/common/PTextarea'
import dayjs from 'dayjs'
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks'
import { getQuestionnaireApi, IQuestionnaireData, createQuestionnaireApi, updateQuestionnaireApi } from '@/apis/questionnaire'
import "react-datepicker/dist/react-datepicker.css";
// import Datepicker1 from "react-tailwindcss-datepicker"; 

const defaultOptionNum = 3
const defaultSelectNum = 1
const defaultOptions = [
  {
    id: `${+new Date()}1`,
    question: '',
    type: 'text',
    optionNum: defaultOptionNum,
    selectNum: defaultSelectNum,
  },
  {
    id: `${+new Date()}2`,
    question: '',
    type: 'choice',
    optionNum: 2,
    selectNum: defaultSelectNum,
    optionList: ['option1', 'option2'],
  },
  {
    id: `${+new Date()}3`,
    question: '',
    type: 'choice',
    optionNum: defaultOptionNum,
    selectNum: 2,
    optionList: ['option1', 'option2', 'option3'],
  },
]
interface ICreateForm {
  name?: string
  description?: string
  dueDate?: string
  dueTimeHour?: string
  dueTimeMinute?: string
  timeLimit?: string
}


const defaultCreateForm = {
  name: 'Untitled Questionnairen',
  description: '',
  dueDate: `${dayjs().add(1, 'day').format('YYYY MMM DD')}`,
  dueTimeHour: '00',
  dueTimeMinute: '00',
  timeLimit: '10',
}

const QuestionnaireCreate: FC = () => {
  const { id } = useParams();
  const [items, setItems] = useState<dataItemProps[]>([])
  const [createForm, setCreateForm] = useState<ICreateForm>({
    dueDate: `${dayjs().add(1, 'day').format('YYYY MMM DD')}`,
  })

  useEffect(() => {
    if (!id) {      
      setCreateForm(defaultCreateForm)
      setItems(defaultOptions)
    }
  }, [id])

   useRequest(() => getQuestionnaireApi(id!), {
    onSuccess: (res: IQuestionnaireData, params) => {
      console.log('res', res, params);
      const { name, timeInfo, eassayQuestions = [], choiceQuestions = [] } = res
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
          optionList: item.options,
          optionNum: item.options!.length
        })
      })
      newItems = newItems.map((it, index) => ({ ...it, id: `${+new Date() + index}` }))
        .sort((a, b) => a.number! - b.number!)

      setItems(newItems)
      setCreateForm({
        name, 
        timeLimit: timeInfo?.timeLimit + '',
        dueTimeHour: timeInfo?.dueTime.split(':')[0],
        dueTimeMinute: timeInfo?.dueTime.split(':')[1],
        dueDate: `${dayjs(timeInfo?.dueDate).format('YYYY MMM DD')}`,
      })
    },
    ready: !!id
  })
  
  
  const handleAddQuestion = () => {
    const id = `${+new Date()}`
    setItems([
      ...items,
      {
        id,
        question: '',
        type: 'text',
        optionNum: defaultOptionNum,
        selectNum: defaultSelectNum,
      }
    ])
  }
  

  const handleQuestionItemChange = (params: dataItemProps) => {
    const { id, type, optionNum, optionList } = params
    const index = items.findIndex(it => it.id === id)

    if (index < 0) return
    const newItems = items.map((item, originIndex) => {
      if (index !== originIndex) return item
      
      let newOptionList: string[] = [...(item.optionList || [])]

      if (type && type === 'choice') {
        newOptionList = [...Array(item.optionNum)].map((_, index) => `option${index + 1}`)
        
      } else if (typeof optionNum !== 'undefined' && optionNum >= 0) {
        if (optionNum > item.optionNum!) {
          newOptionList.push(`option${optionNum}`)
        } else if (newOptionList.length) {
          newOptionList.pop()
        }

      } else if (optionList) {
        newOptionList = [...optionList]
      }

      return { ...item, ...params, optionList: newOptionList }
    })

    setItems(newItems)
  }

  const handleDelete = (id: string) => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
  }

  const judgeInputNumber = (value: string) => {
    const regex = /^\d+$/
    let newValue = value

    if (!regex.test(value) || value.length > 2) {
      newValue = value.slice(0, -1)
    }
    return newValue
  }

  const changeCreateFrom = (values: ICreateForm) => {
    setCreateForm({
      ...createForm,
      ...values,
    })
  }

  const handleDateChange = (value: Date) => {
    changeCreateFrom({
      dueDate: dayjs(value).format('YYYY MMM DD')
    })
  }

  const handleTimeHourChange = (value: string) => {
    changeCreateFrom({
      dueTimeHour: judgeInputNumber(value)
    })
  }

  const handleTimeMinuteChange = (value: string) => {
    changeCreateFrom({
      dueTimeMinute: judgeInputNumber(value)
    })
  }

  const handleTimeLimitChange = (value: string) => {
    changeCreateFrom({
      timeLimit: judgeInputNumber(value)
    })
  }
  

  const handleSave = async () => {
    const { name = '', dueDate, dueTimeHour, dueTimeMinute, timeLimit } = createForm

    const newItems = items.map((item, index) => ({ ...item, number: index + 1 }))
    const params: IQuestionnaireData = {
      name,
      timeInfo: {
        dueDate: dayjs(dueDate).format('YYYY-MM-DD'),
        dueTime: `${dueTimeHour}:${dueTimeMinute}:00`,
        timeLimit: Number(timeLimit || 0),
      },
      eassayQuestions: newItems.filter(it => it.type === 'text')
        .map(it => ({ number: it.number, question: it.question, required: it.required })),
      choiceQuestions: newItems.filter(it => it.type === 'choice')
        .map(it => {
          const { number, question, optionList, selectNum, required } = it
          return {
            number, 
            question,
            options: optionList,
            choice: selectNum,
            required
          }
        })
    }

    console.log('params', params);
    // http://test.pooling.tools/api/V1/questionnaire

    try {
      if (!id) { 
        await createQuestionnaireApi(params)
      } else {
        await updateQuestionnaireApi({ id, ...params })
      }
    } catch(e) {
      console.log('e', e);
    }
  }
  
  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[20px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
          <PPlainInput 
            classNames={{
              base: '!h-[86px] w-[880px]',
              innerWrapper: 'h-[86px] leading-[86px]',
              input: 'text-[65px] leading-[86px] text-left'
            }}
            placeholder="Title starts here... "
            onValueChange={(value: string) => changeCreateFrom({ name: value })}
            value={createForm.name}
          />
          {/* <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]"></PTitle> */}
            
          <PTextarea
            classNames={{
              base: 'w-[880px]',
              inputWrapper: '!bg-transparent shadow-none',
              input: 'text-[23px] leading-[31px] font-playfair font-bold !text-[#565352]',
            }}
            placeholder="Description starts here..."
            value={createForm.description}
            onValueChange={(value: string) => changeCreateFrom({ description: value })}
          />
          {/* <div className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
            Description starts here...
          </div> */}

          <PScrollContainer className="mt-[5px] h-[600px] pr-[15px]">
            <form>
              <div className="flex">
                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Date</PTitle>
                  <DatePicker 
                    customInput={
                      <div className="w-[200px] font-playfair !bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] cursor-pointer flex items-center">
                        <CalenderIcon />
                        <span className="ml-[10px] text-[20px] font-normal">{ createForm.dueDate }th</span>
                      </div>
                    }
                    selected={new Date(createForm.dueDate!)}
                    dateFormat="YYYY MMM DD"
                    value={createForm.dueDate}
                    onChange={(date: Date) => handleDateChange(date)}
                  />
                </div>

                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Time</PTitle>
                  <div className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] flex items-center">
                    <ClockIcon />
                    <div className="ml-[10px] flex">
                      <PPlainInput 
                        value={createForm.dueTimeHour} 
                        onValueChange={(value) => handleTimeHourChange(value)}
                      />
                      <span className="mx-[2px] text-[21px] font-playfair">:</span>
                      <PPlainInput 
                         value={createForm.dueTimeMinute} 
                         onValueChange={(value) => handleTimeMinuteChange(value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Time Limit</PTitle>
                  <div className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px] flex items-center">
                    <SandClockIcon />
                    <div className="ml-[10px] flex items-center">
                      <PPlainInput 
                        value={createForm.timeLimit} 
                        onValueChange={(value) => handleTimeLimitChange(value)}
                      />
                      <span className="ml-[5px] text-[21px] leading-[28px] font-playfair">min</span>
                    </div>
                  </div>
                </div>
              </div>

              <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px] mt-[10px]">Questions</PTitle>
              {
                items.map((it, index) => {
                  return <QuestionnaireCreateItem
                    key={it.id}
                    {...it}
                    showAdd={index === items.length - 1}
                    onChange={handleQuestionItemChange}
                    onDelete={handleDelete}
                    onAddItem={handleAddQuestion}
                  />
                })
              }
            </form>
            {/* <PButton 
              className="text-[20px] h-[40px] mt-[15px]" 
              size="sm" round
              onClick={() => handleAddQuestion()}
            >Add New Question</PButton> */}
          </PScrollContainer>

          <div className="flex justify-end">
            <PButton className="text-[20px] h-[40px]" size="sm" round onClick={() => handleSave()}>Save</PButton>
          </div>
      </PCard>
    </div>
  )
}

export default QuestionnaireCreate
