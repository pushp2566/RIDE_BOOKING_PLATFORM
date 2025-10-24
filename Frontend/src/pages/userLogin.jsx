import React, { useState, useContext   } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = { email, password }
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if (response.status === 200) {
        console.log('Login successful:', response.data)
        login(response.data.user, response.data.token)
        navigate('/home')
      } else {
        console.warn('Login failed:', response)
        
        
      }
    } catch (error) {
      console.error('There was an error logging in!', error)
    }
  }

  const handleCaptain = () => {
    navigate('/captainLogin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-96 rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Uber</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">What's your email? (e.g. john@example.com)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className="w-full bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Enter Password (e.g. password123) (min 8 characters)  </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              className="w-full bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded mb-4">Login</button>

          <p className="text-center text-sm mb-4">New here? <Link to="/userSignup" className="text-blue-600">Create new Account</Link></p>

            <button type="button" onClick={handleCaptain} className="w-full bg-green-500 text-white py-2 rounded">Sign in as a captain</button>
        </form>
      </div>
    </div>
  )
}

export default UserLogin