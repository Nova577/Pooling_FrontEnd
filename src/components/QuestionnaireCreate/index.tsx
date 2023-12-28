import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton'
import Calender from '@/components/common/Icons/Calendar'

import QuestionnaireCreateItem, { dataItemProps } from '@/components/QuestionnaireCreateItem'


const defaultOptionNum = 3
const defaultSelectNum = 1

const defaultOptions = [
  {
    id: `${+new Date()}1`,
    title: '',
    type: 'text',
    optionNum: defaultOptionNum,
    selectNum: defaultSelectNum,
  },
  {
    id: `${+new Date()}2`,
    title: '',
    type: 'choice',
    optionNum: 2,
    selectNum: defaultSelectNum,
    optionList: ['option1', 'option2'],
  },
  {
    id: `${+new Date()}3`,
    title: '',
    type: 'choice',
    optionNum: defaultOptionNum,
    selectNum: 2,
    optionList: ['option1', 'option2', 'option3'],
  },
]



const QuestionnaireCreate: FC = () => {
  const [items, setItems] = useState<dataItemProps[]>(defaultOptions)
  
  const handleAddQuestion = () => {
    const id = `${+new Date()}`
    setItems([
      ...items,
      {
        id,
        title: '',
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

  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[20px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Untitled Questionnairen</PTitle>
          <div className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
            Description starts here...
          </div>

          <PScrollContainer className="mt-[5px] h-[600px] pr-[15px]">
            <form>
              <div className="flex">
                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Date</PTitle>
                  <PButton className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px]">
                    <Calender />
                    <span className="text-[20px] font-normal">Dec 25th</span>
                  </PButton>
                </div>
                <div className="mr-[20px]">
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Due Time</PTitle>
                  <PButton className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px]">
                    <Calender />
                    <span className="text-[20px] font-normal">23 : 59</span>
                  </PButton>
                </div>
                <div>
                  <PTitle className="text-[20px] leading-[28px] text-[#141414] opacity-[1] pb-[7px]">Time Limit</PTitle>
                  <PButton className="!bg-[#F9F5F3] rounded-full !h-[50px] px-[20px]">
                    <Calender />
                    <span className="text-[20px] font-normal">15 min</span>
                  </PButton>
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
            <PButton className="text-[20px] h-[40px]" size="sm" round>Save</PButton>
          </div>
      </PCard>
    </div>
  )
}

export default QuestionnaireCreate
