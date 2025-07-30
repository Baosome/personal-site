import { useState } from 'react'
import './GeneralInfo.css'
import linkedinLogo from '../assets/linkedin.svg'
import githubLogo from '../assets/github.svg'
import mailLogo from '../assets/mail.svg'

function GeneralInfo() {
    return (
        <>
            <section id = "GeneralInfo">
                <div className="GeneralInfoMain">
                    <div className="Name">
                        <h2>Hello my name is</h2>
                        <h1 className="FirstName">Bao</h1>
                    </div>
                    <div className="Description">
                        <h3>Software Engineer | Cyber Analysis</h3>
                        <h3>Seattle, Washington</h3>
                        <h4>Active Security Clearance</h4>
                    </div>
                    <div className="LinkMain">
                        <a href=""><img src={linkedinLogo} alt=""/></a>
                        <a href=""><img src={githubLogo} alt=""/></a>
                        <a href=""><img src={mailLogo} alt=""/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeneralInfo