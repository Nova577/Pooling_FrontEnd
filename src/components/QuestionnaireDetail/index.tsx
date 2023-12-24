import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PProgress from '@/components/common/PProgress'

interface dataItem {
  name?: string; 
  value?: number; 
  percentText?: string
  text?: string
}

interface ResultItem {
  type: string;
  data: dataItem[];
  title: string;
}

const result = [
  {
    type: 'text',
    title: '1. Question 1 Text type',
    data: [
      {
        text: 'Question 1 Text type answer one akmslk knkjnk nkjnlkn knlmaspo oknlk oljmklmlk mllm lmllm mllm mll smallkmlsxm Jaknskj knjnkjnas knjnkj',
      },
      {
        text: 'Question 1 Text type answer one Jakmslk knkjnk nkjnlkn knlmaspo oknlk oljmklmlk mllm lmllm mllm mll smallkmlsxm Jaknskj knjnkjnas knjnkj',
      },
    ],
  },
  {
    type: 'voice',
    title: '1. Question 1 Text type',
    data: [
      {
        name: 'option1',
        value: 100,
        percentText: '50 / 50%'
      },
      {
        name: 'option1',
        value: 50,
        percentText: '50 / 50%'
      },
      {
        name: 'option1',
        value: 20,
        percentText: '20 / 20%'
      },
      {
        name: 'option1',
        value: 10,
        percentText: '10 / 10%'
      },
    ],
  },
  {
    type: 'voice',
    title: '1. Question 1 Text type',
    data: [
      {
        name: 'option1',
        value: 100,
        percentText: '50 / 50%'
      },
      {
        name: 'option1',
        value: 50,
        percentText: '50 / 50%'
      },
      {
        name: 'option1',
        value: 20,
        percentText: '20 / 20%'
      },
      {
        name: 'option1',
        value: 10,
        percentText: '10 / 10%'
      },
    ],
  },
  
]

const QuestionnaireDetail: FC = () => {
  const [data, setData] = useState(result)
  


  return (
    <div>
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px] !bg-[#E9DDD5]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Daily sugar consumption</PTitle>

          <PScrollContainer className="mt-[33px] h-[700px] pr-[15px]">
            {
              result.map((it: ResultItem, index) => {
                return <div key={index}>
                  <PTitle className="mb-[20px] text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">
                    {it.title}
                  </PTitle>

                  {
                    it.type === 'text' ? <PCard 
                      className="bg-white/60 w-full mb-[30px]"
                      bodyClass="pl-[30px] pr-[50px] pt-[6px] pb-[25px] relative"
                    >
                      <i 
                        className="fi fi-ss-angle-down text-[20px] text-[#B2AFAE] absolute right-[20px] rop-[20px] cursor-pointer"
                      >
                      </i>
                      {
                        it.data.map((item: dataItem, itemIndex) => {
                          return (
                            <p key={itemIndex} className="text-[21px] leading-[26px] text-[#141414] font-playfair">
                              · {item.text}
                            </p>
                          )
                        })
                      }
                    </PCard> 
                    : it.type === 'voice' ? it.data.map((item: dataItem, itemIndex) => {
                      return (
                        <div key={itemIndex} className="flex items-center mb-[20px]">
                          <PTitle className="w-[110px] text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">
                            {item.name}
                          </PTitle>

                          <div className="w-[200px] mr-[143px]">
                            <PProgress value={item.value} />
                          </div>

                          <span className="text-[21px] leading-[28px] text-[#141414] font-playfair">
                            {item.percentText}
                          </span>
                        </div>
                      )
                    }) : ''
                  }
                </div>
              })
            }
          </PScrollContainer>
      </PCard>
    </div>
  )
}

export default QuestionnaireDetail
