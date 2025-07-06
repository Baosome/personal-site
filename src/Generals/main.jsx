import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import Tabs from './Tabs.jsx'
import Experience from "../Sections/Experience.jsx";
import AboutMe from "../Sections/AboutMe.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NavBar></NavBar>
      <GeneralInfo></GeneralInfo>
      {/*<Tabs></Tabs>*/}
      <AboutMe></AboutMe>
      <Experience></Experience>
  </StrictMode>,
)
