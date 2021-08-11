import React, { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import navStyles from "../../styles/Header.module.scss"
import $ from "jquery";


const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
            <Header hamburger={hamburger} hamburgerToggle={hamburgerToggle}/>
            <Sidebar hamburger={hamburger}/>
        </>
    )
}

export default Nav
