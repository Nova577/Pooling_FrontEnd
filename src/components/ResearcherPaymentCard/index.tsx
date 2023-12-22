import { FC, useState } from "react"
import PCard from "../common/PCard"
import PButton from "../common/PButton"
import PMonthPicker from "../common/PMonthPicker"
import PScrollContainer from '@/components/common/PScrollContainer'
import PTitle from "@/components/common/PTitle"
import PInput from "@/components/common/PInput2"
import dayjs from 'dayjs'

const balanceItems = [
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 8.00' },
  { label: 'Withdraw - PayPal', payload: '+$ 5.40' },
  { label: 'Color Preference', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
  { label: 'Withdraw - PayPal', payload: '+$ 47.35' },
]
const ResearcherPaymentCard: FC = () => {
  const [filterMonthPickValue, setMonthPickValue] = useState(dayjs()) 


  const handleFilterMonthPickerChange = (newValue: dayjs.Dayjs) => {
    setMonthPickValue(newValue)
  }

  return (
    <PCard className="bg-[#EFE8E4] w-[800px] h-[800]" bodyClass="pl-[75px] pr-[50px]">
      <div className="pr-[25px] flex justify-between items-center">
        <PTitle className="text-30px !text-[#141414] leading-[40px] !opacity-100">Payment Methods</PTitle>
        <PButton className="text-[25px]" size="md" round>Add New</PButton>
      </div>

      <div className="pr-[25px] flex justify-between items-center">
        <PInput className="w-[500px]">Payment Methods</PInput>
        <PButton className="text-[25px]" size="md" round>Delete</PButton>
      </div>

      <div className="pr-[25px] flex justify-between items-center mt-[10px]">
        <PInput className="w-[500px]">Payment Methods</PInput>
        <PButton className="text-[25px]" size="md" round>Delete</PButton>
      </div>

      <div className="pr-[25px] flex justify-between">
        <div className="self-end">
          <PMonthPicker value={filterMonthPickValue} onChange={handleFilterMonthPickerChange} />
        </div>

        <p className="text-end text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">$&nbsp;&nbsp;755.00</p>
      </div>

      <PScrollContainer className="h-[380px]">
        <div className="flex flex-col gap-[20px]">
          {
            balanceItems.map((it, index) => {
              return (
                <div key={index} className="h-[70px] py-[15px] px-[20px] rounded-3xl flex justify-between items-center bg-[#F9F6F4]">
                  <div className="text-neutral-900 text-[25px] font-bold font-playfair leading-[40px]">
                    { it.label }
                  </div>

                  <div className="w-40 opacity-80 text-black text-[27px] font-normal leading-[30px]">
                    { it.payload }
                  </div>
                </div>
              )
            })
          }
        </div>
      </PScrollContainer>
      
    </PCard>
  )
}

export default ResearcherPaymentCard
