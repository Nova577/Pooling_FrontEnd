import PCard from "@/components/common/PCard"
import hugeIcon from '@/assets/pooling_logo_huge.svg'
import useSignUpStore from '@/views/SignUp/store'
import useSignInStore from '@/views/SignIn/store'

const Welcome = () => {
  const liveInLeftDays = useSignUpStore(state => state.liveInLeftDays)
  const userInfo = useSignInStore(state => state.userInfo)

  return (
    <div className="py-72 flex justify-center">
      <PCard className="h-[550px] w-[1120px] p-[50px] pt-[120px] relative" bodyClass="p-0">
        <div className="flex flex-col items-center text-center">
          <span className="text-zinc-800 text-[29px] font-bold font-playfair leading-9">
            Welcome to Pooling, your go to sampling platform that will be live in
          </span>

          <span className="text-center text-zinc-800 text-[80px] font-bold font-playfair leading-[106px]">
            { liveInLeftDays > 0 ? liveInLeftDays : 0 }
          </span>

          <span className="mt-3 text-zinc-800 text-[29px] font-bold font-playfair leading-9">
            Your Account:&nbsp;&nbsp;<span className="underline">{userInfo?.email}</span>
          </span>

          <div className="mt-9 text-center text-black text-[25px] font-normal font-playfair leading-[30px]">
            You will receive an email notification when the platform goes live.<br/>Thank you for the support.
          </div>
        </div>

        <div className="absolute -top-48 left-96">
          <img src={hugeIcon} />
        </div>
      </PCard>
    </div>
  )
}

export default Welcome
