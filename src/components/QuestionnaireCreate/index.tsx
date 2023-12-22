import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton'

import QuestionnaireCreateItem from '@/components/QuestionnaireCreateItem'

interface dataItemProps {
  title: string
  type: string
  id: string
}

const defaultOptions = [
  {
    id: `${+new Date()}1`,
    title: '',
    type: 'text',
  },
  {
    id: `${+new Date()}2`,
    title: '',
    type: 'choice',
  },
  {
    id: `${+new Date()}3`,
    title: '',
    type: 'text',
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
      }
    ])
  }

  const handleOnTypeChange = (params: { id: string, type: string }) => {
    const { id, type } = params
    const index = items.findIndex(it => it.id ===id)
    if (index < 0) return
    const newItems = items.map(it => {
      return {
        ...it,
        type: it.id === id ? type : it.type
      }
    })
    setItems(newItems)
  }

  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Untitled Questionnairen</PTitle>
          <p className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
            Description starts here...
          </p>

          <PScrollContainer className="mt-[32px] h-[600px] pr-[15px]">
            <form>
              {
                items.map(it => {
                  return <QuestionnaireCreateItem
                    key={it.id}
                    {...it}
                    onTypeChange={handleOnTypeChange}
                  />
                })
              }
            </form>
            <PButton 
              className="text-[20px] h-[40px] mt-[15px]" 
              size="sm" round
              onClick={() => handleAddQuestion()}
            >Add New Question</PButton>
          </PScrollContainer>

          <div className="flex justify-end">
            <PButton className="text-[20px] h-[40px]" size="sm" round>Save</PButton>
          </div>
      </PCard>
    </div>
  )
}

export default QuestionnaireCreate
