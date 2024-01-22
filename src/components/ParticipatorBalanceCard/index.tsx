import { FC, useState, useRef, useEffect } from "react"
import PCard from "../common/PCard"
import PButton from "../common/PButton2"
import PMonthPicker from "../common/PMonthPicker"
import dayjs from 'dayjs'
import { useRequest } from "ahooks"
import { getBalanceApi, getBalanceBasicApi, ICheckItem } from '@/apis/balance'
import PScrollContainer from '@/components/common/PScrollContainer'
import { balanceBasic } from '@/types/user'
import { prompt } from '@/components/common/PPromptModal'

const ParticipatorBalanceCard: FC = () => {
  const balanceRef = useRef(null);
  const [filterMonthPickValue, setMonthPickValue] = useState(dayjs()) 
  const [balanceItems, setBalanceItems] = useState<ICheckItem[]>([])
  const [balanceBasic, setBalanceBasic] = useState<balanceBasic>({
    balance: 0
  })
  // const [total, setTotal] = useState(0)

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
  }

  const handleFilterMonthPickerChange = (newValue: dayjs.Dayjs) => {
    setMonthPickValue(newValue)
    freshList(newValue)
  }
  
  useEffect(() => {
    freshList(filterMonthPickValue)
  }, [])

  const goWithdraw = () => {
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
    <PCard className="bg-[#EFE8E4] w-[800px]" bodyClass="px-[50px]">
      <div className="px-[25px] flex justify-between items-center">
        <p className="text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">$118.40</p>
        <PButton className="text-[25px]" size="md" onClick={() => goWithdraw()}>withdraw</PButton>
      </div>

      <div className="px-[25px] flex justify-between">
        <div className="self-end">
          <PMonthPicker value={filterMonthPickValue} onChange={handleFilterMonthPickerChange} />
        </div>

        <p className="text-end text-neutral-900 text-[50px] font-normal font-playfair leading-[66px]">
          <span>$</span>
          <span className="ml-[20px]">{balanceBasic.balance}</span>
        </p>
      </div>

      <PScrollContainer ref={balanceRef} className="mt-[12px] px-[25px] h-[520px]">
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

export default ParticipatorBalanceCard
