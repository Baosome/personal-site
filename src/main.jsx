import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import Tabs from './Tabs.jsx'
import Experience from "./Experience.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NavBar></NavBar>
      <GeneralInfo></GeneralInfo>
      <Tabs></Tabs>
      <Experience></Experience>
  </StrictMode>,
)
