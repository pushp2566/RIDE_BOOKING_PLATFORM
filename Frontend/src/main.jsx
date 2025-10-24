import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {UserProvider} from './context/UserContext.jsx'
import {CaptainProvider} from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CaptainProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainProvider>
    </UserProvider>
  </StrictMode>,
)
