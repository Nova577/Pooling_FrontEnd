import { FC, useState } from "react"
import PCard from "../common/PCard"
import PButton from "../common/PButton"
import PMonthPicker from "../common/PMonthPicker"
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
const ParticipatorBalanceCard: FC = () => {
  const [filterMonthPickValue, setMonthPickValue] = useState(dayjs()) 


  const handleFilterMonthPickerChange = (newValue: dayjs.Dayjs) => {
    setMonthPickValue(newValue)
  }

  return (
    <PCard className="bg-[#EFE8E4] w-[800px]" bodyClass="px-[50px]">
      <div className="px-[25px] flex justify-between items-center">
        <p className="text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">$118.40</p>
        <PButton className="text-[25px]" size="md" round>withdraw</PButton>
      </div>

      <div className="px-[25px] flex justify-between">
        <div className="self-end">
          <PMonthPicker value={filterMonthPickValue} onChange={handleFilterMonthPickerChange} />
        </div>

        <p className="text-end text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85.77</p>
      </div>

      <div className="mt-[12px] px-[25px] max-h-[520px] flex flex-col gap-[20px] overflow-y-auto">
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
    </PCard>
  )
}

export default ParticipatorBalanceCard
