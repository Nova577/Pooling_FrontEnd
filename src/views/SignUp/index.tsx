import { FC } from "react"
import PCard from "@/components/common/PCard"
import PInput from "@/components/common/PInput"
import PButton from "@/components/common/PButton"
import PTitle from "@/components/common/PTitle"
import PNeutralButton from "@/components/common/PNeutralButton"
import ArrowUpRight from "@/components/common/Icons/ArrowUpRight"
import PRadioGroup from "@/components/common/PRadioGroup"
import PSteps from "@/components/common/PSteps"
import useSignUpStore from "./store"
import StepOneCard from "./StepOneCard"
import FormRow from "./FormRow"
import StepTwoCard from "./StepTwoCard"
import { Link } from "react-router-dom"

const SignUp: FC = () => {
  const { currentStep, switchToNextStep, switchToPrevStep } = useSignUpStore()

  const handleStepsNextButtonClick = () => {
    switchToNextStep()
  }

  const handleStepsPrevButtonClick = () => {
    switchToPrevStep()
  }

  return (
    <div className="mt-[78px] mb-8 mx-auto max-w-[90rem] flex flex-col items-center">
      <div className="ml-12 self-start">
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

          <Link to="/sign-in">
            <PButton className="ml-12 text-xl" type="neutral" round>
              Sign In
              <ArrowUpRight className="h-[15px] w-[15px]" />
            </PButton>
          </Link>
        </div>
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
                    <PButton className="h-[60px] w-[120px] text-neutral-900 bg-white" squareRound>
                      <span className="opacity-70 text-[23px]">
                        Send
                      </span>
                    </PButton>
                  </FormRow>

                  <FormRow>
                    <PInput label="Code" />

                    <PButton className="h-[60px] w-[120px] mr-[140px] bg-white" squareRound>
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
                    <PRadioGroup
                      options={[
                        { label: 'Ms', value: 'Ms' },
                        { label: 'Mr', value: 'Mr' },
                        { label: 'Other', value: 'Other' },
                      ]}
                    />
                    <PRadioGroup
                      options={[
                        { label: 'MM', value: 'MM' },
                        { label: 'DD', value: 'DD' },
                        { label: 'YYYY', value: 'YYYY' },
                      ]}
                    />
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
            <StepOneCard />
          )
        }

        {
          currentStep === 2
          && (
            <StepTwoCard />
          )
        }
      </div>

      <div className="w-full mt-16 flex justify-center">
        <PSteps
          current={currentStep}
          onNextButtonClick={handleStepsNextButtonClick}
          onPrevButtonClick={handleStepsPrevButtonClick}
        />
      </div>
    </div>
  )
}

export default SignUp
