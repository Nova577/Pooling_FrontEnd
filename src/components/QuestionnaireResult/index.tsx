import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PProgress from '@/components/common/PProgress'
import { useRequest, useBoolean } from "ahooks"
import { getQuestionnaireResultApi } from '@/apis/questionnaire'
import { useParams } from "react-router-dom"
import clsx from "clsx"

interface IChoiceQuestionItem {
  option: string; ratio: number; count: number
}

interface  IResultItem {
  type?: string
  number: number
  question: string
  answers: string [] & IChoiceQuestionItem[]
}

interface IResultData {
  name: string
  questions: IResultItem[]
}


const EassayResultCard = (props: { answers: string[] }) => {
  const { answers } = props
  const [isOpen, { toggle }] = useBoolean(false)
 
  
  return (
    <PCard 
      className="bg-white/60 w-full mb-[30px]"
      bodyClass="pl-[30px] pr-[50px] pt-[6px] pb-[11px] relative min-h-[48px]"
    >
      <div className="absolute w-full h-[48px] left-0 top-0 pr-[20px] flex justify-end items-center">
        <i 
          className={clsx(
            "fi fi-ss-angle-down text-[20px] text-[#B2AFAE] cursor-pointer h-[20px]",
            isOpen ? "rotate-180" : ['rotate-0']
          )}
          onClick={toggle}
        >
        </i>
      </div>
      {
        answers.length ? (isOpen ? answers : [answers[0]]).map((item: string, itemIndex) => {
          return (
            <p key={itemIndex} className="text-[21px] leading-[26px] text-[#141414] font-playfair">
              · {item}
            </p>
          )
        }) : <></>
      }
    </PCard> 
  )
}

const QuestionnaireResult: FC = () => {
  const { id } = useParams()
  const [resultData, setResultData] = useState<IResultData>({
    name: '',
    questions: []
  })
  // const [state, { toggle, setTrue, setFalse }] = useBoolean(false);

  useRequest(() => getQuestionnaireResultApi(id), {
    onSuccess(data) {
      const { name, eassayQuestions = [], choiceQuestions = [] } = data
      const newEassayQuestions = eassayQuestions.map(it => ({ ...it, type: 'text' }))
      const newChoiceQuestions = choiceQuestions.map(it => ({ ...it, type: 'choice' }))
      const newItems = [...newEassayQuestions, ...newChoiceQuestions].sort((a, b) => a.number - b.number)
      setResultData({
        name,
        questions: newItems as IResultItem[]
      })
    },
    ready: !!id
  })

  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px]  h-[900px] px-[80px] mx-auto pr-[40px] py-[24px] !bg-[#F1E8E3]" bodyClass="p-0 flex flex-col">
          <PScrollContainer className="h-[90px] pr-[15px]">
            <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">
              {resultData.name}
            </PTitle>
          </PScrollContainer>
         

          <PScrollContainer className="mt-[33px] h-[700px] pr-[15px]">
            {
              resultData.questions.map((it: IResultItem, index) => {
                return <div key={index} className="pb-[10px]">
                  <PTitle className="mb-[20px] text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">
                    {index + 1}. {it.question}
                  </PTitle>

                  {
                    it.type === 'text' ?<EassayResultCard answers={it.answers} />
                    : it.type === 'choice' ? it.answers.map((item: IChoiceQuestionItem, itemIndex: number) => {
                      return (
                        <div key={itemIndex} className="flex items-center mb-[20px]">
                          <PTitle className="w-[110px] text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">
                            {item.option}
                          </PTitle>

                          <div className="w-[200px] mr-[143px]">
                            <PProgress value={item.ratio} />
                          </div>

                          <span className="text-[21px] leading-[28px] text-[#141414] font-playfair">
                            {item.count} / {item.ratio}%
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

export default QuestionnaireResult
