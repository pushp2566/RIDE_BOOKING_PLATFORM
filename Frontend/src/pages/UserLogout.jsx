import React, { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export const UserLogout = () => {
    const { logout } = useContext(UserContext)
        const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
            if (response.status === 200) {
                logout()
                
              
                navigate('/userLogin')
            }
            else {
                console.error('Logout failed:', response)
            }
        })
        .catch(error => {
            console.error('Logout failed:', error)
        })
    }, [token, navigate])




return (
    <div>
        <h1>Logging out...</h1>
    </div>
)

}
export default UserLogout