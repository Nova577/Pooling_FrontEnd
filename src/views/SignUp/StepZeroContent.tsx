import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import FormRow from "./FormRow"
import PButton from "@/components/common/PButton"
import PRadioGroup from "@/components/common/PRadioGroup"
import PInput from "@/components/common/PInput2"
import PSelect from "@/components/common/PSelect"
import PPlainInput from "@/components/common/PPlainInput"
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@nextui-org/react'
import { judgeInputNumber } from '@/utils/util'

const countryOptions = [
  { key: 'cn', value: 'cn', label: 'China' },
  { key: 'us', value: 'us', label: 'U.S.A' },
]

const stateOptions = [
  { key: 'sh', value: 'sh', label: 'ShangHai' },
  { key: 'bj', value: 'bj', label: 'BeiJing' },
]

export interface ISignUpZeroFrom {
  email: string
  code: string
  password: string
  repeatPassword: string
  sex: string
  birthData: string[]
  ["first name"]: string
  ["last name"]: string
  country: string
  state: string
}

const rules = {
  email: { required: 'Please enter your email', pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email'
  }},
  code: { required: 'Please enter the code you received', pattern: {
    value: /^.{4,}$/,
    message: 'Code at least 6 characters'
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
  "first name": {
    required: 'Please enter your first name', 
  },
  "last name": {
    required: 'Please enter your last name', 
  },
  birthData: {
    validate: (value: string) => {
      const newValues = [value[2], value[0], value[1]]
      const birthStr = newValues.join('-')
      const birthReg = /^(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/
      return birthReg.test(birthStr) || 'Please enter a valid birth time'
    }
  }
}

interface IStepZeroProps {
  className?: string
  setCodeIsCorrect: (value: boolean) => void
}

const StepZeroContent: FC<IStepZeroProps> = ({ className, setCodeIsCorrect }) => {
  const { register, getValues, setValue, control, setError, trigger, setFocus, formState: { errors } } = useFormContext<ISignUpZeroFrom>()
  const [birthError, setBirthError] = useState('')

  const sendEmailCode = async () => {
    const verifySuccess = await trigger('email')
    if (!getValues('code').trim().length || !verifySuccess) {
      setFocus("email")
      return
    }
    // TODO send code api
  }

  const checkEmailCode = async () => {
    const verifySuccess = await trigger('code')
    if (!getValues('code').trim().length || !verifySuccess) {
      setFocus("code")
      return
    }
    // TODO check code api

    setCodeIsCorrect(true)
  }

  const handleBirthChange = (value: string, index: number, birthData: string[]) => {
    console.log('value, index, birthData', value, index, birthData);
    value = judgeInputNumber(value)
    const newBirthData = birthData.slice()
    newBirthData.splice(index, 1, value)
    setValue('birthData', newBirthData)
  }
  
  const onBirthBlur = async () => {
    const value = getValues('birthData')
    
    const birthStr = value.join('-')
    const birthReg = /^(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/
    setError('birthData', {
      type: 'manual',
      message: 'Please enter a valid birth time'
    })
    
    setBirthError(birthReg.test(birthStr) ? '' : 'Please enter a valid birth time')
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
          {/* <PRadioGroup
            options={[{ label: 'DD', value: 'DD' }, { label: 'MM', value: 'MM' }, { label: 'YYYY', value: 'YYYY' }]}
          /> */}
          <Controller
              control={control}
              name="birthData"
              defaultValue={['', '12', '01']}
              render={({ field }) => (
                <div className="relative" ref={field.ref}>
                  <div className="w-[270px] h-[60px] bg-[#F6F2EF] rounded-2xl relative">
                    <label className="absolute left-[20px] top-[5px] opacity-50 text-neutral-900 text-sm font-bold font-playfair leading-[18px]">
                      Date
                    </label>

            
                  <div className="w-[270px] h-full flex items-center justify-center pt-[10px] font-playfair text-[20px] text-[#151515]">
                    <PPlainInput 
                      value={field.value[1]} 
                      maxLength={2} 
                      onValueChange={(value: string) => handleBirthChange(value, 1, field.value)}
                      onBlur={onBirthBlur}
                    />
                    <span className="mx-[10px] mt-[8px]">/</span>
                    <PPlainInput 
                      value={field.value[2]} 
                      maxLength={2} 
                      onValueChange={(value: string) => handleBirthChange(value, 2, field.value)}
                      onBlur={onBirthBlur}
                    />
                    <span className="mx-[10px] mt-[8px]">/</span>
                    <PPlainInput 
                      className="w-[50px]"  
                      value={field.value[0]}
                      maxLength={4}
                      onValueChange={(value: string) => handleBirthChange(value, 0, field.value)}
                      onBlur={onBirthBlur}
                    />
                  </div>
                </div>
                {/* {birthError && <span className="absolute text-tiny text-danger p-[4px]">{birthError}</span>} */}
                <span className="absolute text-tiny text-danger p-[4px]">{errors.birthData?.message}</span>
              </div>
            )}
          />
        </FormRow>
            
          
        <FormRow>
          <PInput 
            label="First name" 
            isRequired
            errorMessage={errors['first name'] && errors['first name'].message}
            {...register("first name", rules['first name'])}
          />
          <PInput 
            label="Last name" 
            isRequired
            errorMessage={errors['last name'] && errors['last name'].message}
            {...register("last name", rules['last name'])}
          />
        </FormRow>

        <div className="mt-[38px]">
          <PTitle>Area</PTitle>
        </div>

        <FormRow>
          <Controller
            control={control}
            name="country"
            defaultValue={countryOptions[0].value}
            render={({ field }) => (
              <PSelect 
                selectionMode="single"
                label="Country/Region" 
                placeholder="" 
                options={countryOptions}
                selectedKeys={new Set([field.value])}
                onChange={(e) => {
                  const value = e.target.value
                  if (!value) return
                  setValue('country', value)
                }}
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Controller
            control={control}
            name="state"
            defaultValue={stateOptions[0].value}
            render={({ field }) => (
              <PSelect 
                label="State" 
                placeholder=" " 
                options={stateOptions} 
                selectedKeys={new Set([field.value])}
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