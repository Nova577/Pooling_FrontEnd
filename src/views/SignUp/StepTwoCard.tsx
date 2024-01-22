import PCard from "@/components/common/PCard"
import { FC } from "react"
import lockIcon from '@/assets/lock_icon.svg'
import PButton from "@/components/common/PButton"

const StepTwoCard: FC = () => {
  return (
    <PCard className="h-[550px] w-[1120px] p-[50px] pr-[70px] !bg-[#EADED7]" bodyClass="p-0">
      <div className="flex items-center">
        <img src={lockIcon} />
        <h5 className="ml-5 opacity-50 text-neutral-900 text-[23px] font-bold font-playfair leading-[30px]">We protect your information</h5>
      </div>

      <p className="w-[960px] h-[308px] mt-[30px] font-st-song font-light text-[35px] leading-[35px] text-neutral-500">
        <span>
          You own your information. We will only use your information to offer you the products and services you selected. Please note that this product is intended for users in the United States, and when you create a mail.com account, your user information and all data in your mail.com account will be processed on servers located in the United States. Would you like to learn more?
          <br/>
          Please consult our
        </span>
        &nbsp;
        <span className="underline">
          privacy policy
        </span>
        &nbsp;
        <span>
          for additional information.
        </span>
      </p>

      <div className="flex justify-center">
        <PButton className="font-normal px-16 text-[27px]" size="lg" round type="submit">I agree. Create an account now.</PButton>
      </div>
    </PCard>
  )
}

export default StepTwoCard
