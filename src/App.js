import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InHeader from './components/InHeader'
import OutHeader from './components/OutHeader'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Footer from './components/Footer'
import ParticipatorIndex from './pages/ParticipatorIndex/ParticipatorIndex'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ResearcherIndex from './pages/ResearcherIndex/ResearcherIndex'
import NewQuestion from './pages/NewQuestion/NewQuestion'
import Question from './pages/Question/Question'


import Discovery from './pages/ParticipatorIndex/Discovery/Discovery'
import Schedule from './pages/ParticipatorIndex/Schedule/Schedule'
import History from './pages/ParticipatorIndex/History/History'
import Balance from './pages/ParticipatorIndex/Balance/Balance'
import ProfileEdit from './pages/ParticipatorIndex/ProfileEdit/ProfileEdit'
import Welcome from './pages/Welcome/Welcome'
import CreateNewCount from './pages/CreateNewCount/CreateNewCount'

import DashBoard from './pages/ResearcherIndex/DashBoard/DashBoard'
import FeePayment from './pages/ResearcherIndex/FeePayment/FeePayment'
import ProfileEdit2 from './pages/ResearcherIndex/ProfileEdit/ProfileEdit'

const App = () => {
  const [hasSign, setHasSign] = useState(localStorage.getItem('sign'))
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'sign') {
        setHasSign(event.newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  return (
    <Router>
      {hasSign ? <OutHeader /> : <InHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/createnewcount" element={<CreateNewCount />} />
        <Route path="/newquestion" element={<NewQuestion />} />
        <Route path="/question" element={<Question />} />
        <Route path="/participatorindex" element={<ParticipatorIndex />} >
          <Route path='discovery' element={<Discovery />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="history" element={<History />} />
          <Route path="balance" element={<Balance />} />
          <Route path="profileedit" element={<ProfileEdit />} />
        </Route>

        <Route path="/researcherindex" element={<ResearcherIndex />} >
          <Route path='dashboard' element={<DashBoard />} />
          <Route path="feepayment" element={<FeePayment />} />
          <Route path="profileedit" element={<ProfileEdit2 />} />
        </Route>
      </Routes>
      <Footer />
    </Router>

  )
}

export default App