import { useState } from 'react'
import './GeneralInfo.css'

function GeneralInfo() {

    return (
        <>
            <div className="Main">
                <div className="NameMain">
                    <h2>Huy-</h2>
                    <h1>Bao</h1>
                    <div><h2>Trang</h2></div>
                </div>
                <div className="GeneralInfoMain">
                    <h3>Software Engineer | Cyber Analysis</h3>
                    <h3>Seattle, Washington</h3>
                    <h4>Active Security Clearance</h4>
                </div>
                <div className="LinkMain">
                    <ol>
                        <li><a href=""><img src="" alt="LinkedIn"/></a></li>
                        <li><a href=""><img src="" alt="GitHub"/></a></li>
                        <li><a href=""><img src="" alt="Mail"/></a></li>
                    </ol>
                </div>
                <div className="PhotoMain">
                    <img src="" alt="Photo"/>
                </div>
            </div>
            <hr/>

        </>
    )
}

export default GeneralInfo