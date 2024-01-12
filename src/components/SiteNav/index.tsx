import { FC } from "react"
import { Link, useNavigate } from 'react-router-dom'
import logoSrc from '../../assets/logo.png'
import PButton from "../common/PButton"
import useSignInStore from '@/views/SignIn/store'
import { signOutApi } from '@/apis/user'
import { ls, sleep } from '@/utils/util'
import { toast } from '@/components/Toast/index'

const SiteNav: FC = () => {
  const navigate = useNavigate()
  const userInfo = useSignInStore(state => state.userInfo)
  const removeUserInfo = useSignInStore(state => state.removeUserInfo)

  const afterSignOut = async () => {
    toast.current?.info('Sign out success')
    await sleep(1000)
    ls.remove('token')
    ls.remove('refreshToken')
    removeUserInfo()
    navigate(`/sign-in`, {
      replace: true
    })
  }

  const signOut = async () => {
    try {
      await signOutApi()
      afterSignOut()
    } catch(e) {
      afterSignOut()
    }
  }

  return (
    <header className="w-full h-[45px] flex-shrink-0 absolute top-0">
      <nav className="h-full pl-[66px] pr-[123px] pr bg-[#302929]  flex items-center justify-between">
        <Link to='/'><img className="h-[32px] w-[26px]" src={logoSrc} /></Link>

        <div>
          <Link to="/">
            <PButton className="text-white" styleType="ghost" size="xs">Home</PButton>
          </Link>
          {
            userInfo?.id ? <>
              <PButton size="xs" onClick={() => signOut()}>Sign out</PButton>
            </> : <>
              <Link to="sign-in">
                <PButton className="text-white" styleType="ghost" size="xs">Sign in</PButton>
              </Link>

              <Link to="sign-up">
                <PButton size="xs">Sign Up</PButton>
              </Link>
            </>
          }
          
        </div>
      </nav>
    </header>
  )
}

export default SiteNav
