import { useState } from 'react'
import './NavBar.css'

function NavBar() {

    return (
        <>
            <div className={"NavBar"}>
                <a href={"/"}>.Home()</a>
                <a href={"/"}>.Resume()</a>
            </div>

        </>
    )
}

export default NavBar