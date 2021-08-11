import React, { useState } from 'react'
import Nav from '../nav/Nav'
import layoutStyles from "../../styles/Layout.module.scss"

const Layout = ({children}) => {
    const [sidebarOpen, setsidebarOpen] = useState(false)
    const [sidebarLock, setSidebarLock] = useState(false);
    const sidebarToggle = () => {
        setsidebarOpen(!sidebarOpen);
    }
    const sidebarLockToggle = () => {
        setSidebarLock(!sidebarLock);
    }
    return (
        <>
        <Nav sidebarOpen={sidebarOpen} setsidebarOpen={sidebarToggle} sidebarLock={sidebarLock} setSidebarLock={sidebarLockToggle}/>
        <main className={`${layoutStyles.main} ${sidebarOpen ? layoutStyles.hamburgerOpen : layoutStyles.hamburgerClose}`}>
            {children}
        </main>
        </>
        
    )
}

export default Layout
