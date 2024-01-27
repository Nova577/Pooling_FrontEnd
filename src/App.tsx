import { FC, useEffect } from "react"
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
import QuestionnaireResultPage from './views/Questionnaire/Result'
import useSignInStore from '@/views/SignIn/store'
import Toast from '@/components/common/PToast'
import PPromptModal from '@/components/common/PPromptModal'
import { USER_TYPE } from "@/types/user"
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
  {
    path: '/create-questionnaire',
    element: <QuestionnaireCreatePage />
  },
  {
    path: '/questionnaire-result/:id',
    element: <QuestionnaireResultPage />
  },
]

const App: FC = () => {
  const getInitUserInfo = useSignInStore((state) => state.getInitUserInfo)
  const userInfo = useSignInStore(state=> state.userInfo)

  useEffect(() => {
    getInitUserInfo()
  }, [])
  
  return (
    <BrowserRouter>
      <div className="h-full flex flex-col">
        <SiteNav />

        <main className="pt-[45px] flex-auto w-[1500px] mx-auto">
          <Routes>
            {
              routersMap.map((router: IRouterItem) => {
                const { path, element, access } = router
                
                // return (
                //   (!access || (userInfo?.type && access.includes(userInfo.type))) 
                //     && <Route path={path} element={element} key={path} />
                // )
                return <Route path={path} element={element} key={path} />
              })
            }
          </Routes>
        </main>
        <SiteFooter />

        <Toast />
        <PPromptModal />
      </div>
    </BrowserRouter>
  )
}

export default App
