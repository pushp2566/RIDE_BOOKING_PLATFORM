import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({ children }) => {
  //const { user } = useContext(UserContext)
  //const { captain } = useContext(CaptainContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const userData = localStorage.getItem('userLogin') || localStorage.getItem('userSignup')
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('userLogin') || localStorage.getItem('userSignup')
      
    if (!token || !userData) {
      navigate('/userLogin', { replace: true })
    }
  }, [navigate, userData])

  //const token = localStorage.getItem('token')
  //const userData = localStorage.getItem('userLogin') || localStorage.getItem('userSignup')  
  if (!token || !userData) {
    return null // Don't render anything while redirecting    
  }

  return <>{children}</>
}

export default ProtectedRoute
