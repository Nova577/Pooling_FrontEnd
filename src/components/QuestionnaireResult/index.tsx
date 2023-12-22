import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC } from "react"
import PButton from "@/components/common/PButton"
import PScrollContainer from '@/components/common/PScrollContainer'

const data1 = [
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
  {
    title: '1. Question 1 Text type',
  },
]

const QuestionnaireResult: FC = () => {
  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[734px] px-[80px] pr-[20px] py-[24px] bg-[#DBC6B9]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Daily sugar consumption</PTitle>
          <p className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nuncporta in libero convallis fringilla.Aenean pretium nunc in dolor porttitor consectetur,
          </p>
          
          <PScrollContainer className="mt-[18px] h-[468px] pr-[15px]">
            {
              data1.map((it: { title: string }) => {
                return <div 
                  className="h-[78px] flex justify-between items-center"
                >
                  <PTitle className="text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">{ it.title }</PTitle>
                  <PButton className="w-[80px] h-[30px] text-[15px] bg-white" squareRound size="sm">Result</PButton>
                </div>
              })
            }
          </PScrollContainer>
      </PCard>
    </div>
  )
}

export default QuestionnaireResult
