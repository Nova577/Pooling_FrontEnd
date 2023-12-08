import PCard from "@/components/common/PCard"
import { useCountDown } from 'ahooks'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import hugeIcon from '@/assets/pooling_logo_huge.svg'

const Welcome = () => {
  const navigate = useNavigate()

  const [countDown] = useCountDown({
    leftTime: 10000,
    onEnd: () => {
      // navigate('/')
    }
  })

  return (
    <div className="py-72 flex justify-center">
      <PCard className="h-[550px] w-[1120px] p-[50px] pt-[120px] relative" bodyClass="p-0">
        <div className="flex flex-col items-center text-center">
          <span className="text-zinc-800 text-[29px] font-bold font-playfair leading-9">
            Welcome to Pooling, your go to sampling platform that will be live in
          </span>

          <span className="text-center text-zinc-800 text-[80px] font-bold font-playfair leading-[106px]">
            { Math.round(countDown / 1000) }
          </span>

          {/* TODO: real account */}
          <span className="mt-3 text-zinc-800 text-[29px] font-bold font-playfair leading-9">
            Your Account:&nbsp;&nbsp;<span className="underline">support@pooling.tools</span>
          </span>

          <div className="mt-9 text-center text-black text-[25px] font-normal font-playfair leading-[30px]">
            You will receive an email notification when the platform goes live.<br/>Thank you for the support.
          </div>
        </div>

        <div className="absolute -top-48 left-96">
          <img src={hugeIcon} />
        </div>
      </PCard>
    </div>
  )
}

export default Welcome
