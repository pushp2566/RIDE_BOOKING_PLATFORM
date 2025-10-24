import React, { createContext, useState, useEffect } from 'react'

export const CaptainContext = createContext(null)

export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('captainLogin') || localStorage.getItem('captainSignup')
      if (raw) setCaptain(JSON.parse(raw))
    } catch (err) {
      console.warn('Failed to read captain from localStorage', err)
    }
  }, [])

  const login = (captainData, token) => {
    setCaptain(captainData)
    try { 
      localStorage.setItem('captainLogin', JSON.stringify(captainData)) 
      localStorage.setItem('captainSignup', JSON.stringify(captainData)) // Also store in captainSignup for compatibility
    } catch (e) {
      console.warn('Failed to write captain to localStorage', e)
    }
    try { 
      localStorage.setItem('captainToken', token) 
    } catch (e) {
      console.warn('Failed to write captain token to localStorage', e)
    }
  }

  const logout = () => {
    console.log('Captain logout called - clearing localStorage')
    setCaptain(null)
    try { 
      localStorage.removeItem('captainLogin') 
      localStorage.removeItem('captainSignup')
      localStorage.removeItem('captainToken') 
      console.log('Captain token and data removed from localStorage')
    } catch (e) {
      console.warn('Failed to remove captain from localStorage', e)
    }
  }

  return (
    <CaptainContext.Provider value={{ captain, login, logout }}>
      {children}
    </CaptainContext.Provider>
  )
}

export default CaptainProvider
