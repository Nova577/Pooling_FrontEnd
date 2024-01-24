import { FC, useState, useEffect, useRef } from "react"
import PCard from "../common/PCard"
import PButton from "../common/PButton2"
import PMonthPicker from "../common/PMonthPicker"
import PScrollContainer from '@/components/common/PScrollContainer'
import PTitle from "@/components/common/PTitle"
// import PInput from "@/components/common/PInput2"
import dayjs from 'dayjs'
import { useRequest } from "ahooks"
import { getBalanceApi, getBalanceBasicApi, ICheckItem } from '@/apis/balance'
import { balanceBasic } from '@/types/user'
import { prompt } from '@/components/common/PPromptModal'

const ResearcherPaymentCard: FC = () => {
  const balanceRef = useRef<HTMLDivElement>(null);
  const [filterMonthPickValue, setMonthPickValue] = useState(dayjs()) 
  const [balanceItems, setBalanceItems] = useState<ICheckItem[]>([])
  const [balanceBasic, setBalanceBasic] = useState<balanceBasic>({
    balance: 0
  })

  const { run } = useRequest(getBalanceApi, {
    manual: true,
    onSuccess(data) {
      setBalanceItems(data.check || [])
    },
  })

  useRequest(getBalanceBasicApi, {
    onSuccess: (data) => {
      setBalanceBasic(data || {})
    }
  })

  const freshList = (value: dayjs.Dayjs) => {
    const date = dayjs(value).format('YYYY-MM')
    run(date)
    
    balanceRef.current && balanceRef.current.scrollTo(0, 0)
  }

  const handleFilterMonthPickerChange = (newValue: dayjs.Dayjs) => {
    setMonthPickValue(newValue)
    freshList(newValue)
  }
  
  useEffect(() => {
    freshList(filterMonthPickValue)
  }, [])


  const handleAddNew = () => {
    prompt?.current?.show({
      content: 'Features Coming Soon…',
      contentClassName: 'flex justify-center items-center',
      footer: <div className="flex justify-end">
        <PButton 
          className="!bg-[#F0E8E3] !w-[100px] h-[33px] text-[20px] font-playfair" 
          radius="full" size="sm" 
          onClick={() => prompt?.current?.close()}
        >
          OK
        </PButton>
      </div>
    })
  }

  return (
    <PCard className="bg-[#EFE8E4] w-[800px] h-[800]" bodyClass="pl-[75px] pr-[50px]">
      <div className="pr-[25px] flex justify-between items-center">
        <PTitle className="text-30px !text-[#141414] leading-[40px] !opacity-100">Payment Methods</PTitle>
        <PButton className="text-[25px]" size="md" radius="full" onClick={() => handleAddNew()}>Add New</PButton>
      </div>

      {/* TODO */}
      <div className="pr-[25px] flex justify-between items-end">
        <PCard className="w-[500px] h-[70px] bg-[#F9F6F4]" bodyClass="flex flex-row px-[30px] py-[10px]">
          <h3 className="w-[100px] font-playfair text-[25px] text-[#141414] font-bold leading-[33.32px]">Visa</h3>
          <span className="text-[27px] text-[#7F7B7A] leading-[31px] font-playfair">7657 9878 8678 9878</span>
        </PCard>
        <PButton className="text-[25px]" size="md" radius="full">Delete</PButton>
      </div>

      {/* TODO */}
      <div className="pr-[25px] flex justify-between items-end mt-[10px]">
        <PCard className="w-[500px] h-[70px] bg-[#F9F6F4]" bodyClass="flex flex-row px-[30px] py-[10px]">
          <h3 className="w-[100px] font-playfair text-[25px] text-[#141414] font-bold leading-[33.32px]">Master</h3>
          <span className="text-[27px] text-[#7F7B7A] leading-[31px] font-playfair">7657 9878 8678 9878</span>
        </PCard>
        <PButton className="text-[25px]" size="md" radius="full">Delete</PButton>
      </div>

      <div className="pr-[25px] flex justify-between">
        <div className="self-end">
          <PMonthPicker value={filterMonthPickValue} onChange={handleFilterMonthPickerChange} />
        </div>

        <p className="text-end text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">
          <span>$</span>
          <span className="ml-[20px]">{balanceBasic.balance}</span>
        </p>
      </div>

      <PScrollContainer ref={balanceRef} className="h-[380px]">
        <div className="flex flex-col gap-[20px]">
          {
            balanceItems.map((it, index) => {
              return (
                <div key={index} className="h-[70px] py-[15px] px-[20px] rounded-3xl flex justify-between items-center bg-[#F9F6F4]">
                  <div className="text-neutral-900 text-[25px] font-bold font-playfair leading-[40px]">
                    { it.message }
                  </div>

                  <div className="w-40 opacity-80 text-black text-[27px] font-normal leading-[30px]">
                    {it.amount >= 0 ? '+' : '-'}$ { String(it.amount).replace(/^[+-]/, '') }
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
