import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersProvider } from './contexts/usersContext'
import './index.css'
import App from './App.jsx'
import { ModalProvider } from './contexts/modalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </UsersProvider>
  </StrictMode>,
)
