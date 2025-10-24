import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('userLogin') || localStorage.getItem('userSignup')
      if (raw) setUser(JSON.parse(raw))
    } catch (err) {
      console.warn('Failed to read user from localStorage', err)
    }
  }, [])

  const login = (userData, token) => {
    setUser(userData)
    try { 
     // localStorage.setItem('userToken', token)
      localStorage.setItem('userLogin', JSON.stringify(userData)) 
      localStorage.setItem('userSignup', JSON.stringify(userData)) // Also store in userSignup for compatibility
    } catch (e) {
      console.warn('Failed to write user to localStorage', e)
    }
    try { 
      localStorage.setItem('token', token) 
    } catch (e) {
      console.warn('Failed to write token to localStorage', e)
    }
  }

  const logout = () => {
    setUser(null)
    try { 
      localStorage.removeItem('userLogin') 
      localStorage.removeItem('userSignup')
      localStorage.removeItem('token') 
    } catch (e) {}
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
