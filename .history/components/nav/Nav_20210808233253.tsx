import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';


const Nav = (props) => {
    
    return (
        <>
            <Navbar  sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen} sidebarLock={props.sidebarLock} setSidebarLock={props.setSidebarLock}/>
            <Sidebar sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen} sidebarLock={props.sidebarLock} setSidebarLock={props.setSidebarLock}/>
        </>
    )
}

export default Nav
