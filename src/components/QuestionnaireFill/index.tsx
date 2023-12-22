import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'
import PButton from '@/components/common/PButton'
import PRadioRegularGroup from "@/components/common/PRadioRegularGroup"
import PCheckboxGroup, { CheckboxChangeProps } from "@/components/common/PCheckboxGroup"
import PInput from "@/components/common/PInput2"

const radioOptions = [
  {
    key: '1',value: '11', label: 'option 1'
  },
  {
    key: '2',value: '2', label: 'option 2'
  },
  {
    key: '3',value: '3', label: 'option 3'
  },
]



const QuestionnaireFill: FC = () => {
  const [checkboxValue, setCheckboxValue] = useState<string[]>([])

  const handleCheckboxChange = (values: CheckboxChangeProps) => {
    if (Array.isArray(values)) {
      setCheckboxValue(values)
    }
  }

  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px] pb-[30px] bg-[#E9DDD5]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Daily sugar consumption</PTitle>
          <p className="w-[693px] text-[20px] leading-[27px] font-playfair text-[#141414] font-bold opacity-[0.7]">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nuncporta in libero convallis fringilla.Aenean pretium nunc in dolor porttitor consectetur,
          </p>

          <PScrollContainer className="mt-[32px] h-[600px] pr-[15px]">
          <form>
            <div>
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">1. Question 1 Text type</PTitle>
              <PInput className='!h-[50px]' />
            </div>
            
            <div className="mt-[18px]">
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">2. Question 1 Text type</PTitle>
              <PInput className='!h-[50px]' />
            </div>

            <div className="mt-[18px]">
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">3. Question 3 only one select</PTitle>
              <PRadioRegularGroup options={radioOptions} />
            </div>

            <div className="mt-[18px]">
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">4. Question 4 multiple select</PTitle>
              <PCheckboxGroup 
                options={radioOptions} 
                value={checkboxValue}
                onChange={(values: CheckboxChangeProps) => handleCheckboxChange(values)} />
            </div>

            <div className="mt-[18px]">
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">5. Question 3 only one select</PTitle>
              <PInput className='!h-[50px]' />
            </div>
            <div className="mt-[18px]">
              <PTitle className="!text-[21px] leading-[27px] color-[#141414] font-normal opacity-[1] mb-[10px]">6. Question 3 only one select</PTitle>
              <PInput className='!h-[50px]' />
            </div>
          </form>
          </PScrollContainer>

          <div className="flex justify-end">
            <PButton className="text-[20px] h-[40px]" size="sm" round>Submit</PButton>
          </div>
      </PCard>
    </div>
  )
}

export default QuestionnaireFill
