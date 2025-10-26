import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import UserSignup from './pages/userSignup'
import UserLogin from './pages/userLogin'
import CaptainSignup from './pages/captainSignup'
import CaptainLogin from './pages/captainLogin'
import ProtectedRoute from './components/ProtectedRoute'
import { UserLogout } from './pages/UserLogout'
import { CaptainLogout } from './pages/CaptainLogout'
import CaptainProtectedRoute from './components/CaptainProtectedRoute'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'




const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/home' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        } />
        <Route path='/userSignup' element={<UserSignup/>} />
        <Route path='/userLogin' element={<UserLogin/>} />
        <Route path='/captainSignup' element={<CaptainSignup/>} />
        <Route path='/captainLogin' element={<CaptainLogin/>} />
        <Route path='/Riding' element={
          <Riding/>   
        } />


        <Route path='/captainRiding' element={
          <CaptainProtectedRoute>
            <CaptainRiding/>
          </CaptainProtectedRoute>
        } />


        <Route path='/userLogout' element={
          <ProtectedRoute>
            <UserLogout/>
          </ProtectedRoute>
        } />
        <Route path='/captainHome' element={
          <CaptainProtectedRoute>
            <CaptainHome/>
          </CaptainProtectedRoute>
        } />
        <Route path='/captainLogout' element={
          <CaptainProtectedRoute>
            <CaptainLogout/>
          </CaptainProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App