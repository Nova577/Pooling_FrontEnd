import { FC } from "react"
import { Link, useNavigate } from 'react-router-dom'
import logoSrc from '../../assets/logo.png'
import PButton from "../common/PButton"

const SiteNav: FC = () => {
  const navigate = useNavigate()

  const handleSignInButtonClick = () => {
    navigate('/sign-in')
  }

  const handleSignUpButtonClick = () => {
    navigate('/sign-up')
  }

  return (
    <header className="w-full h-[45px] flex-shrink-0 absolute top-0">
      <nav className="h-full pl-[66px] pr-[123px] pr bg-[#302929]  flex items-center justify-between">
        <Link to='/'><img className="h-[32px] w-[26px]" src={logoSrc} /></Link>

        <div>
          <PButton className="text-white" type="ghost" size="xs">Home</PButton>
          <PButton className="text-white" type="ghost" size="xs" onClick={handleSignInButtonClick}>Sign in</PButton>
          <PButton size="xs" onClick={handleSignUpButtonClick}>Sign Up</PButton>
        </div>
      </nav>
    </header>
  )
}

export default SiteNav
