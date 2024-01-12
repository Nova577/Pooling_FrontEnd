import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton'
import PRadioRegularGroup from "@/components/common/PRadioRegularGroup"
import PCheckboxGroup, { CheckboxChangeProps } from "@/components/common/PCheckboxGroup"
import PInput from "@/components/common/PInput2"
import { useParams } from 'react-router-dom';
import { getQuestionnaireApi, IQuestionnaireData } from '@/apis/questionnaire'
import { dataItemProps } from '@/components/QuestionnaireCreateItem/index'
import { useRequest } from 'ahooks'

interface IChoiceItemProps {
  key: string | number
  value: string
  label: string 
}

interface IQuestionItemProps extends dataItemProps {
  type?: string
  answer?: string
  options?: IChoiceItemProps[]
  multiChoiceValue?: string[]
  singleChoiceValue?: string
}
interface IQuestionnaireInfo {
  name: string,
  desc?: string
  questions: IQuestionItemProps[]
}


const QuestionnaireFill: FC = () => {
  const { id } = useParams();
  const [questionnaireInfo, setQuestionnaireInfo] = useState<IQuestionnaireInfo>({
    name: '',
    desc: '',
    questions: []
  })
  

  useRequest(() => getQuestionnaireApi(id!), {
    onSuccess: (res: IQuestionnaireData) => {
      const { name, desc, eassayQuestions = [], choiceQuestions = [] } = res
      let newItems: IQuestionItemProps[] = []
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
        desc,
        questions: newItems,
      })
    },
    ready: !!id
  })

  const setAnswerInfo = (value: IQuestionItemProps, index: number) => {
    const newQuestions = questionnaireInfo.questions
    newQuestions[index] = {
      ...newQuestions[index],
      ...value,
    }

    setQuestionnaireInfo({
      ...questionnaireInfo,
      questions: newQuestions
    })
  }

  const handleAnswerChange = (answer: string, index: number) => {
    setAnswerInfo({ answer }, index)
  }

  const handleCheckboxChange = (values: CheckboxChangeProps, index: number) => {
    if (Array.isArray(values)) {
      setAnswerInfo({ multiChoiceValue: values }, index)
    }
  }

  const handleSingleSelectChange = (value: string, index: number) => {
    setAnswerInfo({ singleChoiceValue: value }, index)
  }

  const handleSubmit = () => {
    // TODO submit 
  }

  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">
            {questionnaireInfo.name}
          </PTitle>
          <p className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
            {questionnaireInfo.desc}
          </p>

          <PScrollContainer className="mt-[32px] h-[600px] pr-[15px]">
          <form>
            {
              questionnaireInfo.questions?.map((it, index) => {
                return (
                  <div key={it.number} className={index ? 'mt-[18px]' : ''}>
                    <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">
                      {it.question}
                    </PTitle>
                    {
                      it.type === 'text' ? <PInput className='!h-[50px]' onValueChange={(value) => handleAnswerChange(value, index)} />
                      : it.selectNum! > 1 ?  <PCheckboxGroup 
                        options={it.options} 
                        value={it.multiChoiceValue}
                        onChange={(values: CheckboxChangeProps) => handleCheckboxChange(values, index)}
                      />
                      : <PRadioRegularGroup 
                          options={it.options}  
                          value={it.singleChoiceValue}
                          onValueChange={(value) => handleSingleSelectChange(value, index)}
                        />
                    }
                  </div>
                )
              })
            }
          </form>
          </PScrollContainer>

          <div className="flex justify-end">
            <PButton className="text-[20px] h-[40px]" size="sm" round onClick={() => handleSubmit()}>Submit</PButton>
          </div>
      </PCard>
    </div>
  )
}

export default QuestionnaireFill
