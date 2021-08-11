import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';


const Nav = (props) => {
    
    return (
        <>
            <Navbar hamburger={props.hamburger} hamburgerToggle={props.hamburgerToggle}/>
            <Sidebar hamburger={props.hamburger} hamburgerToggle={props.hamburgerToggle}/>
        </>
    )
}

export default Nav
