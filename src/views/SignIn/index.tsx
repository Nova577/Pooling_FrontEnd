import ArrowUpRight from "@/components/common/Icons/ArrowUpRight"
import PButton from "@/components/common/PButton"
import PCard from "@/components/common/PCard"
import { FC } from "react"
import { Link } from "react-router-dom"
import FormRow from "../SignUp/FormRow"
import { useRequest } from 'ahooks'
import PInput from "@/components/common/PInput"
import PTitle from "@/components/common/PTitle"
import { loginUser } from "@/apis/user"

const SignIn: FC = () => {
  useRequest(loginUser.bind(null, { username: 'test', password: 'asdf' }))

  return (
    <div className="mt-[78px] mb-8 mx-auto max-w-[90rem] flex flex-col items-center">
      <div className="ml-12 self-start">
        <div className="opacity-70 text-neutral-900 text-[17px] font-bold font-playfair leading-snug">
          SEE WHAT YOU CARE
        </div>

        <div className="text-neutral-900 text-[58px] font-normal font-playfair leading-[77.31px]">
          Sign in to Pooling
        </div>

        <div className="pt-[18px] flex items-center">
          <div className="opacity-70 text-neutral-900 text-[21px] font-bold font-playfair first-line:leading-7">
            Don't have an Account?
          </div>

          <Link to="/sign-up">
            <PButton className="ml-12 text-xl" type="neutral" round>
              Sign Up
              <ArrowUpRight className="h-[15px] w-[15px]" />
            </PButton>
          </Link>
        </div>
      </div>

      <PCard className="h-[500px] w-[1000px] p-[50px] pt-[76px] pr-[70px] mt-20 !bg-[#EADED7]" bodyClass="p-0">
        <form>
          <div>
            <PTitle>Email Or Account Number</PTitle>

            <FormRow>
              <PInput />
            </FormRow>
          </div>
          
          <div className="mt-5">
            <PTitle>Password</PTitle>

            <FormRow>
              <PInput />
            </FormRow>
          </div>

          <div className="pt-9 flex flex-col items-center gap-2">
            <PButton className="w-[220px] text-[30px]" size="lg" round>Sign in</PButton>

            <Link className="text-2xl font-bold font-playfair underline leading-loose" style={{ color: 'rgb(107, 102, 99)' }} to="/reset-password">
              Forget Password?
            </Link>
          </div>
        </form>
      </PCard>
    </div>
  )
}

export default SignIn
