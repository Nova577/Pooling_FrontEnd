import ArrowUpRight from "@/components/common/Icons/ArrowUpRight"
import PButton from "@/components/common/PButton2"
import PButtonCustom from "@/components/common/PButton"
import PCard from "@/components/common/PCard"
import { FC, useEffect } from "react"
import { Link } from "react-router-dom"
import FormRow from "../SignUp/FormRow"
import PInput from "@/components/common/PInput2"
import PTitle from "@/components/common/PTitle"
import { loginUser } from "@/apis/user"
import { useForm } from "react-hook-form"
import { ls, sleep } from '@/utils/util'
import useSignInStore from './store'
import { useNavigate } from 'react-router-dom'
import { USER_TYPE } from '@/types/user'
import useSignUpStore from "../SignUp/store"
import { useRequest } from "ahooks"
import { toast } from "@/components/common/PToast"

interface ISignInProps {
  username: string
  password: string
}

const signRules = {
  username: {
    required: 'Please enter your email or account number',
  },
  password: {
    required: 'Please enter password',
    pattern: {
      value: /^.{8,24}$/,
      message: 'The password needs to be more than 8 characters and less than 20 characters'
    }
  }
}

const SignIn: FC = () => {
  // const [isLoading, setIsLoading] = useState(false)
  const setUserInfo = useSignInStore(state => state.setUserInfo)
  const navigate = useNavigate()
  const liveInLeftDays = useSignUpStore(state => state.liveInLeftDays)

  const { loading, run } = useRequest(loginUser, {
    manual: true,
    onSuccess: async (res) => {
      const { id, type, token, refreshToken } = res
      ls.set('refreshToken', refreshToken)
      ls.set('token', token)
      setUserInfo({ id, type, email: getValues('username') })
      toast.current?.info('Sign in success!')
      await sleep(1000)
      if (liveInLeftDays > 0 ) {
        navigate('/welcome')
        return
      }
      let path = ''
      if (type === USER_TYPE.PARTICIPATOR) {
        path = '/participator'
      } else if (type === USER_TYPE.RESEARCHER) {
        path = '/researcher'
      }
      navigate(path, {
        replace: true
      })
    }
  })

  useEffect(() => {
    console.log('loading', loading);
    
  }, [loading])

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ISignInProps>({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const signSubmit = async (data: ISignInProps) => {
    run(data)
  }

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
            <PButtonCustom className="ml-12 text-xl" styleType="neutral" round>
              Sign Up
              <ArrowUpRight className="h-[15px] w-[15px]" />
            </PButtonCustom>
          </Link>
        </div>
      </div>

      <PCard className="h-[500px] w-[1000px] p-[50px] pt-[76px] pr-[70px] mt-20 !bg-[#EADED7]" bodyClass="p-0">
        <form onSubmit={handleSubmit(signSubmit)}>
          <div>
            <PTitle>Email Or Account Number</PTitle>

            <FormRow>
              <PInput
                isRequired
                errorMessage={errors.username && errors.username.message}
                {...register("username", signRules.username)}
              />
            </FormRow>
          </div>
          
          <div className="mt-5">
            <PTitle>Password</PTitle>

            <FormRow>
              <PInput 
                isRequired
                errorMessage={errors.password && errors.password.message}
                {...register("password", signRules.password)}
              />
            </FormRow>
          </div>

          <div className="pt-9 flex flex-col items-center gap-2">
            <PButton 
              isLoading={loading}
              className="min-w-[220px] text-[30px]" 
              size="lg" 
              radius="full"
              type="submit"
            >Sign In</PButton>

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
