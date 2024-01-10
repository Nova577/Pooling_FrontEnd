import { FC } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNav from "./components/SiteNav"
import Home from "./views/Home"
import SignUp from "./views/SignUp"
import SiteFooter from "./components/SiteFooter"
import SignIn from "./views/SignIn"
import ResetPassword from "./views/ResetPassword"
import Welcome from "./views/Welcome"
import Participator from "./views/Participator"
import Researcher from "./views/Researcher"
import QuestionnaireCreatePage from './views/Questionnaire/Create'
import QuestionnaireFillPage from './views/Questionnaire/Fill'
import useSignInStore, { USER_TYPE } from '@/views/SignIn/store'

interface IRouterItem {
  path: string
  element: JSX.Element
  access?: string[]
}

const routersMap: IRouterItem[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/welcome',
    element: <Welcome />
  },
  {
    path: '/participator',
    element: <Participator />,
    access: [USER_TYPE.PARTICIPATOR]
  },
  {
    path: '/researcher',
    element: <Researcher />,
    access: [USER_TYPE.RESEARCHER]
  },
  {
    path: '/fill-questionnaire/:id',
    element: <QuestionnaireFillPage />
  },
  {
    path: '/create-questionnaire/:id',
    element: <QuestionnaireCreatePage />
  },
]

const App: FC = () => {
  const userInfo = useSignInStore((state) => state.userInfo)

  return (
    <BrowserRouter>
      <div className="h-full flex flex-col">
        <SiteNav />

        <main className="pt-[45px] flex-auto">
          <Routes>
            {
              routersMap.map((router: IRouterItem) => {
                const { path, element, access } = router
                
                return (
                  (!access || (userInfo?.type && access.includes(userInfo.type))) 
                    && <Route path={path} element={element} key={path} />
                )
              })
            }
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
