import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC } from "react"
import FormRow from "../SignUp/FormRow"
import PInput from "@/components/common/PInput2"
import PButton from "@/components/common/PButton"

const ResetPassword: FC = () => {
  return (
    <div className="py-[300px] flex justify-center">
       <PCard className="h-[550px] w-[800px] p-[50px] pr-[70px] !bg-[#EADED7]" bodyClass="p-0">
        <form>
          <PTitle>Email Or Account Number</PTitle>

          <FormRow>
            <PInput label="Email" />

            <PButton className="w-[120px] h-[60px] text-2xl bg-white" squareRound>Send</PButton>
          </FormRow>
        
          <FormRow className="pr-36">
            <PInput label="Code" />
            <PButton className="w-[120px] h-[60px] text-2xl bg-white" squareRound>Check</PButton>
          </FormRow>

          <FormRow>
            <PInput label="Password" />
          </FormRow>

          <FormRow>
            <PInput label="Repeat password" />
          </FormRow>

          <div className="mt-6 flex justify-center">
            <PButton className="w-[12.5rem] h-[60px] text-[35px] bg-white" round>Reset</PButton>
          </div>
        </form>
      </PCard>
    </div>
  )
}

export default ResetPassword
