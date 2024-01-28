import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import FormRow from "./FormRow"
import PButton from "@/components/common/PButton"
import PRadioGroup from "@/components/common/PRadioGroup"
import PInput from "@/components/common/PInput2"
import PSelect from "@/components/common/PSelect"
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@nextui-org/react'
import { sendSignUpCodeApi, checkSignUpCodeApi } from '@/apis/user'
import PMultiPlainInput from "@/components/common/PMultiPlainInput"
import { getDictionaryApi } from '@/apis/dictionary'
import { toast } from "@/components/common/PToast"
import { useRequest } from "ahooks"
import { ISelectOptionItem } from '@/types/global'
import { formatDirectoryOption } from '@/utils/util'

export interface ISignUpZeroFrom {
  email: string
  code: string
  password: string
  repeatPassword: string
  sex: string
  birthData: string[]
  firstName: string
  lastName: string
  country: string
  state: string
}

const rules = {
  email: { required: 'Please enter your email', pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email'
  }},
  code: { required: 'Please enter the code you received', pattern: {
    value: /^\d{4}$/,
    message: 'Please enter a 4-digit verification code'
  }},
  password: { required: 'Please enter your password', pattern: {
    value: /^.{8,24}$/,
    message: 'The password must contain at least 8 characters'
  }},
  repeatPassword: { 
    required: 'Please enter your password again', 
    validate: (value: string, formValues: ISignUpZeroFrom) => {
    return !!value.trim().length && value === formValues.password || 'The two passwords are inconsistent'
  }},
  firstName: {
    required: 'Please enter your first name', 
  },
  lastName: {
    required: 'Please enter your last name', 
  },
  birthData: {
    required: true,
    validate: (value: string[]) => {
      const newValues = [value[2], value[0], value[1]]
      
      const birthStr = newValues.join('-')
      const birthReg = /^[1|2][1-9]\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/
      return birthReg.test(birthStr) || 'Please enter a valid birth time'
    }
  },
  country: {
    required: 'Please select country'
  },
  state: {
    required: 'Please select state'
  }
}

interface IStepZeroProps {
  className?: string
  setCodeIsCorrect: (value: boolean) => void
}

const StepZeroContent: FC<IStepZeroProps> = ({ className, setCodeIsCorrect }) => {
  const { register, getValues, setValue, control, trigger, setFocus, formState: { errors } } = useFormContext<ISignUpZeroFrom>()
  const [countryOption, setCountryOption] = useState<ISelectOptionItem[]>([])
  const [stateOption, setStateOption] = useState<ISelectOptionItem[]>([])
  
  useRequest(() => getDictionaryApi('Country'), {
    onSuccess(countryData) {
      if (countryData?.country) {
        setCountryOption(formatDirectoryOption(countryData.country))
      }
    }
  })

  const getDictionaryOptions = async (country: string) => {
    try {
      const data = await getDictionaryApi(country, 'State')
      setStateOption(formatDirectoryOption(data?.state))
    } catch(e) {
      setStateOption([])
    }
  }
  

  const sendEmailCode = async () => {
    const verifySuccess = await trigger('email')
    const email = getValues('email')
    if (!verifySuccess) {
      setFocus("email")
      return
    }
    await sendSignUpCodeApi({  email })
    toast.current?.info('The verification code has been sent to your email')
  }

  const checkEmailCode = async () => {
    const verifyEmail = await trigger('email')
    const verifyCode = await trigger('code')
    
    if (!verifyCode) return setFocus("code")
    if (!verifyEmail) return setFocus("email")
  
    const { email, code } = getValues()

    await checkSignUpCodeApi({
      email,
      code
    })
    setCodeIsCorrect(true)
    toast.current?.info('Verification code correct')
  }

  return (
    <div className={cn('flex', className)}>
      <PCard className="h-[550px] w-[660px] p-[50px] !bg-[#EADED7] mr-[100px]" bodyClass="p-0 gap-0">
        <div className="pt-2">
          <PTitle>Create your email account</PTitle>
        </div>
          
        <FormRow>
          <PInput 
            label="Email"
            {...register('email', rules.email)}
            isRequired
            // color={error ? "danger" : "success"}
            errorMessage={errors.email && errors.email.message}
          />
          <PButton 
            className="h-[60px] w-[120px] text-neutral-900 bg-white"
            squareRound
            onClick={sendEmailCode}
            type="button"
          >
            <span className="opacity-70 text-[23px]">
              Send
            </span>
          </PButton>
        </FormRow>
           
        <FormRow>
          <PInput 
            label="Code" 
            isRequired
            errorMessage={errors.code && errors.code.message}
            {...register('code', rules.code)}
          />

          <PButton className="h-[60px] w-[120px] mr-[140px] bg-white" squareRound type="button" onClick={checkEmailCode}>
            <span className="opacity-70 text-[23px]">Check</span>
          </PButton>
        </FormRow>

        <PTitle className="mt-[38px]">Password</PTitle>
        
        <FormRow>
          <PInput
            type="password" 
            label="Choose a password" 
            placeholder="At least 8 characters"
            isRequired
            errorMessage={errors.password && errors.password.message}
            {...register('password', {
              onChange: () => {
                if (getValues('repeatPassword')) {
                  trigger('repeatPassword')
                }                 
              },
              ...rules.password
            })}
          />
        </FormRow>

        <FormRow>
          <PInput 
            type="password" 
            label="Repeat password"
            isRequired
            errorMessage={errors.repeatPassword && errors.repeatPassword.message}
            {...register('repeatPassword', rules.repeatPassword)}
          />
        </FormRow>
      </PCard>

      <PCard className="h-[550px] w-[660px] p-[50px] !bg-[#EADED7]" bodyClass="p-0 gap-0">
        {/* <form> */}
          <div className="pt-2">
            <PTitle>Personal details</PTitle>
          </div>
            
        <FormRow>
          <Controller
            control={control}
            name="sex"
            defaultValue={"0"}
            render={({ field }) => (
              <PRadioGroup
                options={[
                  { label: 'Mr', value: '0' }, 
                  { label: 'Ms', value: '1' }, 
                  { label: 'Other', value: '2' }
                ]}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="birthData"
            defaultValue={['12', '12', '1802']}
            rules={rules.birthData}
            render={({ field }) => (
              <div className="relative" ref={field.ref}>
                <div className="w-[270px] h-[60px] bg-[#F6F2EF] rounded-2xl relative">
                  <label className="absolute left-[20px] top-[5px] opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18px]">
                    Date of Birth
                  </label>

                  <PMultiPlainInput 
                    {...field}
                    type='number'
                    config={[{
                      maxLength: 2,
                    }, {
                      maxLength: 2,
                    }, {
                      maxLength: 4,
                      className: 'w-[50px]',
                    }]}
                  />
                </div>
                <span className="absolute text-tiny text-danger p-[4px]">{errors.birthData?.message}</span>
              </div>
            )}
          />
        </FormRow>
            
          
        <FormRow>
          <PInput 
            label="First name" 
            isRequired
            errorMessage={errors.firstName && errors.firstName.message}
            {...register("firstName", rules.firstName)}
          />
          <PInput 
            label="Last name" 
            isRequired
            errorMessage={errors.lastName && errors.lastName.message}
            {...register("lastName", rules.lastName)}
          />
        </FormRow>

        <div className="mt-[38px]">
          <PTitle>Area</PTitle>
        </div>

        <FormRow>
          <Controller
            control={control}
            name="country"
            defaultValue={''}
            rules={rules.country}
            render={({ field }) => (
              <PSelect 
                selectionMode="single"
                label="Country/Region" 
                placeholder="" 
                classNames={{
                  mainWrapper: 'relative',
                  helperWrapper: 'absolute bottom-[-24px]'
                }}
                options={countryOption}
                selectedKeys={new Set([field.value])}
                errorMessage={errors.country && errors.country?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  
                  setValue('country', value)
                  setValue('state', '')
                  getDictionaryOptions(value)
                }}
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Controller
            control={control}
            name="state"
            defaultValue={''}
            rules={rules.state}
            render={({ field }) => (
              <PSelect 
                label="State" 
                placeholder=" " 
                options={stateOption} 
                selectedKeys={new Set([field.value])}
                errorMessage={errors.state && errors.state?.message}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('state', value)
                }}
              />
            )}
          />
        </FormRow>
      </PCard>
    </div>
  )
}

export default StepZeroContent