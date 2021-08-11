import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';


const Nav = (props) => {
    
    return (
        <>
            <Navbar sidebarOpen={props.sidebarOpen} setsidebarOpen={props.setsidebarOpen} sidebarLock={props.sidebarLock} setSidebarLock={props.setSidebarLock}/>
            <Sidebar sidebarOpen={props.sidebarOpen} setsidebarOpen={props.setsidebarOpen} sidebarLock={props.sidebarLock} setSidebarLock={props.setSidebarLock}/>
        </>
    )
}

export default Nav
