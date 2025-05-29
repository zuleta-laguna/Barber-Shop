import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Barber-Shop">
  <StrictMode>
     <App />
  </StrictMode>
  </BrowserRouter>,
)
