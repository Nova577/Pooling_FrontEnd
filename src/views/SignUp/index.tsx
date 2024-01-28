import { FC, useState } from "react"
import PButton from "@/components/common/PButton"
import ArrowUpRight from "@/components/common/Icons/ArrowUpRight"
import PSteps from "@/components/common/PSteps"
import useSignUpStore from "./store"
import StepOneCard from "./StepOneCard"
import StepTwoCard from "./StepTwoCard"
import { Link, useNavigate } from "react-router-dom"
import StepZeroContent from "./StepZeroContent"
import { useForm, FormProvider } from "react-hook-form";
import { ChARACTER_ENUM } from '@/types/user'
import { participantSignUpApi, researcherSignUpApi } from '@/apis/user'
import { toast } from "@/components/common/PToast"
import { sleep } from '@/utils/util'

const SignUp: FC = () => {
  const { currentStep, switchToNextStep, switchToPrevStep } = useSignUpStore(state => ({ 
    currentStep: state.currentStep,  
    switchToNextStep: state.switchToNextStep,
    switchToPrevStep: state.switchToPrevStep,
  }))
  const [currentCharacter, setCurrentCharacter] = useState<string>(ChARACTER_ENUM.RESEARCHER)
  const [codeIsCorrect, setCodeIsCorrect] = useState<boolean>(false)
  const navigate = useNavigate()

  const methods = useForm({
    mode: 'onChange'
  })
  const { handleSubmit, getValues, trigger, formState: { errors } } = methods;

  const handleStepsNextButtonClick = async () => {
    let verifySuccess = false
    if (!currentStep) {
      const triggerKeys = ['email', 'code', "firstName", "lastName", 'country', 'password', 'repeatPassword', 'sex', 'state', 'birthData']
      verifySuccess = await trigger(triggerKeys)

      if (verifySuccess && !codeIsCorrect) {
        toast.current?.info('Please check your code')
      }
    } else if (currentStep === 1) {
      verifySuccess = await trigger()
    }
    if (!verifySuccess) return

    switchToNextStep()
  }

  const handleStepsPrevButtonClick = () => {
    switchToPrevStep()
  }

  const onSubmit = async () => {
    const { 
      email, firstName, lastName, country, password, sex, state, birthData,
      section, medicalHistory, occupation, institute, relatedLinks, researchFields, other, title,  pets,
    } = getValues()
    const baseParams = {
      email,
      firstName,
      lastName,
      password,
      sex,
      country,
      state,
      birth: birthData.join('-')
    }
    
    if (ChARACTER_ENUM.RESEARCHER) {
      const newParams = {
        ...baseParams,
        institute,
        title,
        tags: {
          researchFields,
          other
        },
        relatedLinks
      }

      await researcherSignUpApi(newParams)
      toast.current?.info('Sign up success!')
      await sleep(1000)
      navigate('/sign-in', { replace: true })
      
    } else {
      const newParams = {
        ...baseParams,
        section,
        occupation,
        tags: {
          pets,
          medicalHistory,
          other
        },
      }

      await participantSignUpApi(newParams)
      toast.current?.info('Sign up success!')
      await sleep(1000)
      navigate('/sign-in', { replace: true })
    }
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
            <PButton className="ml-12 text-xl" styleType="neutral" round>
              Sign In
              <ArrowUpRight className="h-[15px] w-[15px]" />
            </PButton>
          </Link>
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[80px]">
            <StepZeroContent 
              className={ currentStep !== 0 ? 'hidden' : 'block' } 
              setCodeIsCorrect={setCodeIsCorrect}
            />

            <StepOneCard 
              className={ currentStep !== 1 ? 'hidden' : 'block' } 
              setCurrentCharacter={setCurrentCharacter}
              currentCharacter={currentCharacter}
            />

            { currentStep === 2 && <StepTwoCard /> }
          </div>

          <div className="w-full mt-16 flex justify-center">
            <PSteps
              current={currentStep}
              onNextButtonClick={handleStepsNextButtonClick}
              onPrevButtonClick={handleStepsPrevButtonClick}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignUp
