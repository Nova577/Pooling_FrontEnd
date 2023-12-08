import { FC } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNav from "./components/SiteNav"
import Home from "./views/Home"
import SignUp from "./views/SignUp"
import SiteFooter from "./components/SiteFooter"
import SignIn from "./views/SignIn"
import ResetPassword from "./views/ResetPassword"
import Welcome from "./views/Welcome"

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="h-full flex flex-col">
        <SiteNav />

        <main className="pt-[45px] flex-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/Welcome" element={<Welcome />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
