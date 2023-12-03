import { FC } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNav from "./components/SiteNav"
import Home from "./views/Home"
import SignUp from "./views/SignUp"
// import SiteFooter from "./components/SiteFooter"

const App: FC = () => {
  return (
    <BrowserRouter>
    <div className="h-full flex flex-col">
      <SiteNav />

      <main className="pt-[45px] flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>

    </div>

    </BrowserRouter>
  )
}

export default App
