import React, { useState, useContext   } from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import axios from 'axios'
import { CaptainContext } from '../context/CaptainContext'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const { login } = useContext(CaptainContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const captainData = { 
      fullname: { firstname: firstName, lastname: lastName }, 
      email, 
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity),
        vehicleType: vehicleType
      }
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if (response.status === 201) {
        login(response.data.captain, response.data.token)
        navigate('/home')
      } else {
        console.warn('Signup failed:', response)
      }
    } catch (error) {
      console.error('There was an error signing up!', error)
      if (error.response) {
        console.error('Error response:', error.response.data)
        console.error('Error status:', error.response.status)
      }
    }
  }

  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-96 rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Uber</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">What's your name</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="w-1/2 bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
                className="w-1/2 bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">What's your email</label>
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
            <label className="block text-sm font-medium mb-2">Enter Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              className="w-full bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Vehicle Information</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Vehicle Color"
                required
                className="bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
              />
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="License Plate"
                required
                className="bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder="Capacity (seats)"
                min="1"
                required
                className="bg-gray-100 px-3 py-2 rounded placeholder-gray-400 placeholder-opacity-50"
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="bg-gray-100 px-3 py-2 rounded"
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded mb-4">Create Account</button>

          <p className="text-center text-sm mb-4">Already have an account? <Link to="/captainLogin" className="text-blue-600">Login here</Link></p>

          <p className="text-xs text-gray-500">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </form>
      </div>
    </div>
  )
}

export default CaptainSignup