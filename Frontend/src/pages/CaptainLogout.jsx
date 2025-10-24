import React, { useContext } from 'react'
import axios from 'axios'
import { CaptainContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'





export const CaptainLogout = () => {
    const { logout } = useContext(CaptainContext)
    const token = localStorage.getItem('captainToken')
    console.log('CaptainLogout - token from localStorage:', token)
    const navigate = useNavigate()
    useEffect(() => {
        // Always logout locally first - this clears localStorage immediately
       // logout()
        
        // Then try to logout on server (but don't depend on it)
        if (token) {
            axios.post(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {}, { 
                headers: { Authorization: `Bearer ${token}` } 
            })
            .then(response => {
                console.log('Server logout successful:', response.data)
                logout()
                navigate('/captainLogin')
            })
            .catch(error => {
                console.error('Server logout failed:', error)
                // Still navigate to login even if server logout fails
                navigate('/captainLogin')
            })
        } else {
            // No token, just navigate to login
            navigate('/captainLogin')
        }
    }, [logout, navigate])




return (
    <div>
        <h1>Logging out...</h1>
    </div>
)

}
    export default CaptainLogout