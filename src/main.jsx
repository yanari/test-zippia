import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersProvider } from './contexts/usersContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </StrictMode>,
)
