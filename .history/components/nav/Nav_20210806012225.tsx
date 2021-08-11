import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';


const Nav = (props) => {
    
    return (
        <>
            <Navbar sidebarOpen={props.sidebarOpen} setsidebarOpen={props.setsidebarOpen}/>
            <Sidebar sidebarOpen={props.sidebarOpen} setsidebarOpen={props.setsidebarOpen}/>
        </>
    )
}

export default Nav
