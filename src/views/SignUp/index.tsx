import { FC } from "react"
import PCard from "../../components/common/PCard"
import PInput from "../../components/common/PInput"
import PButton from "../../components/common/PButton"
import PTitle from "../../components/common/PTitle"
import PNeutralButton from "../../components/common/PNeutralButton"
import ArrowUpRight from "../../components/common/Icons/ArrowUpRight"
import PRadioGroup from "../../components/common/PRadioGroup"
import PSteps from "../../components/common/PSteps"
import useSignUpStore from "./store"
import StepTwoCard from "./StepTwoCard"
import FormRow from "./FormRow"

const SignUp: FC = () => {
  const { currentStep, switchToNextStep, switchToPrevStep } = useSignUpStore()

  const handleStepsNextButtonClick = () => {
    switchToNextStep()
  }

  const handleStepsPrevButtonClick = () => {
    switchToPrevStep()
  }

  return (
    <div className="pt-[78px] flex justify-center">
      <div>
        <div className="opacity-70 text-neutral-900 text-[17px] font-bold font-playfair leading-snug">
          START FOR FREE
        </div>

        <div className="text-neutral-900 text-[58px] font-normal font-playfair leading-[77.31px]">
          Create new account.
        </div>

        <div className="pt-[18px] flex items-center">
          <div className="opacity-70 text-neutral-900 text-[21px] font-bold font-playfair first-line:leading-7">
            Already A Member?
          </div>

          <PNeutralButton className="ml-[49px]">
            Sign in
            <ArrowUpRight className="h-[15px] w-[15px]" />
          </PNeutralButton>
        </div>

        <div className="mt-[80px] flex gap-[100px]">
          {
            currentStep === 0
            && (
              <>
                <PCard className="h-[550px] w-[660px] p-[50px]" bodyClass="p-0 gap-0">
                  <form>
                    <div className="pt-2">
                      <PTitle>Create your email account</PTitle>
                    </div>

                    <FormRow>
                      <PInput label="Email" />
                      <PButton className="h-[60px] w-[120px] rounded-[1.25rem] text-neutral-900">
                        <span className="opacity-70 text-[23px]">
                          Send
                        </span>
                      </PButton>
                    </FormRow>

                    <FormRow>
                      <PInput label="Code" />

                      <PButton className="h-[60px] w-[120px] mr-[140px] rounded-[1.25rem]">
                        <span className="opacity-70 text-[23px]">Check</span>
                      </PButton>
                    </FormRow>
                  </form>

                  <form className="mt-[38px]">
                    <PTitle>Password</PTitle>

                    <FormRow>
                      <PInput label="Choose a password" placeholder="At least 8 characters" />
                    </FormRow>

                    <FormRow>
                      <PInput label="Repeat password" />
                    </FormRow>
                  </form>
                </PCard>

                <PCard className="h-[550px] w-[660px] p-[50px]" bodyClass="p-0 gap-0">
                  <form>
                    <div className="pt-2">
                      <PTitle>Personal details</PTitle>
                    </div>

                    <FormRow>
                      <PRadioGroup />
                      <PRadioGroup />
                    </FormRow>
                    
                    <FormRow>
                      <PInput label="First name" />
                      <PInput label="Last name" />
                    </FormRow>
                  </form>

                  <form className="mt-[38px]">
                    <div>
                      <PTitle>Area</PTitle>
                    </div>

                    <FormRow>
                      <PInput label="Country/Region" />
                    </FormRow>

                    <FormRow>
                      <PInput label="State" />
                    </FormRow>
                  </form>
                </PCard>
              </>
            )
          }

          {
            currentStep === 1
            && (
              <StepTwoCard />
            )
          }
        </div>

        <div className="w-full mt-16 flex justify-center">
          <PSteps current={currentStep} onNextButtonClick={handleStepsNextButtonClick} onPrevButtonClick={handleStepsPrevButtonClick} />
        </div>
      </div>
    </div>
  )
}

export default SignUp
