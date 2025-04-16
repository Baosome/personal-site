import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import GeneralInfo from './GeneralInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NavBar></NavBar>
      <GeneralInfo></GeneralInfo>

  </StrictMode>,
)
