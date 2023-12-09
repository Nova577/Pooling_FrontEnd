import { FC } from "react"
import PButton from "@/components/common/PButton"
import ArrowUpRight from "@/components/common/Icons/ArrowUpRight"
import PSteps from "@/components/common/PSteps"
import useSignUpStore from "./store"
import StepOneCard from "./StepOneCard"
import StepTwoCard from "./StepTwoCard"
import { Link } from "react-router-dom"
import StepZeroContent from "./StepZeroContent"

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
        { currentStep === 0 && <StepZeroContent /> }

        { currentStep === 1 && <StepOneCard /> }

        { currentStep === 2 && <StepTwoCard /> }
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
