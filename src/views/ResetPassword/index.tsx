import PCard from "@/components/common/PCard"
import PTitle from "@/components/common/PTitle"
import { FC, useState } from "react"
import FormRow from "../SignUp/FormRow"
import PInput from "@/components/common/PInput2"
import PButton from "@/components/common/PButton"
import { useForm } from "react-hook-form"
import { sendResetPsdCodeApi, checkResetPsdCodeApi, resetPsdApi } from '@/apis/user'
import { useNavigate } from 'react-router-dom'
import { toast } from "@/components/common/PToast"
import { sleep } from "@/utils/util"

interface IResetPasswordProps {
  email: string
  code: string
  password: string
  repeatPassword: string
}


const resetPasswordRules = {
  email: { required: 'Please enter your email', pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email'
  }},
  code: { required: 'Please enter the code you received', pattern: {
    value: /^\d{4}$/,
    message: 'Please enter a 4-digit verification code'
  }},
  password: {
    required: 'Please enter password',
    pattern: {
      value: /^.{8,24}$/,
      message: 'The password needs to be more than 8 characters and less than 20 characters'
    }
  },
  repeatPassword: { 
    required: 'Please enter your password again', 
    validate: (value: string, formValues: IResetPasswordProps) => {
    return !!value.trim().length && value === formValues.password || 'The two passwords are inconsistent'
  }},
}


const ResetPassword: FC = () => {
  const [codeIsCorrect, setCodeIsCorrect] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, trigger, setFocus, getValues, formState: { errors } } = useForm<IResetPasswordProps>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      repeatPassword: ''
    },
  })

  const sendEmailCode = async () => {
    const verifySuccess = await trigger('email')
    if (!verifySuccess) {
      setFocus("email")
      return
    }
    await sendResetPsdCodeApi({  email: getValues('email') })
    toast.current?.info('The verification code has been sent to your email')
  }


  const checkEmailCode = async () => {
    const verifyEmail = await trigger('email')
    const verifyCode = await trigger('code')
    
    if (!verifyCode) return setFocus("code")
    if (!verifyEmail) return setFocus("email")
  
    const { email, code } = getValues()

    await checkResetPsdCodeApi({
      email,
      code
    })
    setCodeIsCorrect(true)
    toast.current?.info('Verification code correct')
  }

  const onSubmit = async (data: IResetPasswordProps) => {
    if (!codeIsCorrect) {
      toast.current?.info('Please check your code')
      return
    }
    const { email, password } = data
    const params = {
      username: email,
      password
    }
    await resetPsdApi(params)
    toast.current?.info('Password reset successfully, please log in again')
    await sleep(1000)
    navigate('/sign-in')
  }

  return (
    <div className="py-[300px] flex justify-center">
       <PCard className="h-[550px] w-[800px] p-[50px] pr-[70px] !bg-[#EADED7]" bodyClass="p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PTitle>Reset your Password</PTitle>

          <FormRow>
            <PInput 
              label="Email" 
              isRequired
              errorMessage={errors.email && errors.email.message}
              {...register("email", resetPasswordRules.email)}
            />

            <PButton 
              className="w-[120px] h-[60px] text-2xl bg-white" 
              squareRound 
              onClick={sendEmailCode}
              type="button"
            >Send</PButton>
          </FormRow>
        
          <FormRow className="pr-36">
            <PInput 
              label="Code"
              isRequired
              errorMessage={errors.code && errors.code.message}
              {...register("code", resetPasswordRules.code)}
            />
            <PButton 
              className="w-[120px] h-[60px] text-2xl bg-white" 
              squareRound
              type="button" 
              onClick={checkEmailCode}
            >Check</PButton>
          </FormRow>

          <FormRow>
            <PInput 
              type="password" 
              label="Password" 
              isRequired
              errorMessage={errors.password && errors.password.message}
              {...register("password", resetPasswordRules.password)}
              
            />
          </FormRow>

          <FormRow>
            <PInput 
              type="password" 
              label="Repeat password" 
              isRequired
              errorMessage={errors.repeatPassword && errors.repeatPassword.message}
              {...register('repeatPassword', resetPasswordRules.repeatPassword)}
            />
          </FormRow>

          <div className="mt-6 flex justify-center">
            <PButton className="w-[12.5rem] h-[60px] text-[35px] bg-white" round type="submit">Reset</PButton>
          </div>
        </form>
      </PCard>
    </div>
  )
}

export default ResetPassword
