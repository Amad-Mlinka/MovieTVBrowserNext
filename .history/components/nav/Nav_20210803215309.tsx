import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import navStyles from "../../styles/Header.module.scss"
import $ from "jquery";
import Navbar from '../navbar/Navbar';


const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
            <Navbar hamburger={hamburger} hamburgerToggle={hamburgerToggle}/>
            <Sidebar hamburger={hamburger}/>
        </>
    )
}

export default Nav
