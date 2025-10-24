import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainContext } from '../context/CaptainContext'

const CaptainProtectedRoute = ({ children }) => {
  const { captain } = useContext(CaptainContext)
  const navigate = useNavigate()
  const [isChecking, setIsChecking] = useState(true)
  
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('captainToken')
      console.log('CaptainProtectedRoute - token:', token)
      console.log('CaptainProtectedRoute - captain:', captain)
      
      if (!token) {
        console.log('No captain token found, redirecting to login')
        navigate('/captainLogin', { replace: true })
        return
      }
      
      // Check if captain data exists in localStorage
      const captainData = localStorage.getItem('captainLogin') || localStorage.getItem('captainSignup')
      
      if (!captainData) {
        console.log('No captain data in localStorage, redirecting to login')
        navigate('/captainLogin', { replace: true })
        return
      }
      
      // If we have token and captain data, we're good
      if (token && captainData) {
        console.log('Token and captain data found, allowing access')
        setIsChecking(false)
      }
    }
    
    checkAuth()
  }, [navigate, captain])

  // Show loading while checking authentication
  if (isChecking) {
    return <div>Loading...</div>
  }

  // If we reach here, authentication is valid
  return children
}

export default CaptainProtectedRoute
