import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC } from "react"
import PScrollContainer from '@/components/common/PScrollContainer'

const data1 = [
  {
    content: '· Question 1 Text type answer one hkjahlskjalsclmalksnlksnxnslxaaksbxajknksnxsxsaml Jakmslk knkjnk nkjnlkn knlmaspo oknlk oljmklmlk mllm lmllm mllm mll smallkmlsxm Jaknskj knjnkjnas knjnkj',
  },
  {
    content: '· Question 1 Text type answer one hkjahlskjalsclmalksnlksnxnslxaaksbxajknksnxsxsaml Jakmslk knkjnk nkjnlkn knlmaspo oknlk oljmklmlk mllm lmllm mllm mll smallkmlsxm Jaknskj knjnkjnas knjnkj',
  },
  
]

const ResetPassword: FC = () => {
  return (
    <div className="flex justify-center">
       <PCard className="w-[1060px] h-[900px] px-[80px] pr-[40px] py-[24px]" bodyClass="p-0">
          <PTitle className="text-[65px] leading-[86px] text-[#141414] font-normal opacity-[1]">Daily sugar consumption</PTitle>
         
          <PTitle className="mt-[33px] text-[21px] leading-[28px] text-[#141414] font-normal opacity-[1]">1. Question 1 Text type</PTitle>

          <PScrollContainer className="mt-[18px] h-[670px] pr-[15px]">
            {
              data1.map((it: { content: string }) => {
                return <PCard 
                  className="bg-white/60 w-full mb-[30px]"
                  bodyClass="pl-[30px] pr-[48px] pt-[6px] pb-[25px]"
                >
                  <p className="text-[21px] leading-[26px] text-[#141414] font-playfair">
                    {it.content}
                  </p>
                </PCard>
              })
            }
          </PScrollContainer>
      </PCard>
    </div>
  )
}

export default ResetPassword
