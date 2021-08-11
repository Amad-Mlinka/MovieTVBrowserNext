import React, { useState } from 'react'
import Nav from '../nav/Nav'
import layoutStyles from "../../styles/Layout.module.scss"

const Layout = ({children}) => {
    const [sidebarOpen, setsidebarOpen] = useState(false)
    const [sidebarLock, setSidebarLock] = useState(false);
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
        <Nav sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen}/>
        <main className={`${layoutStyles.main} ${sidebarOpen ? layoutStyles.hamburgerOpen : layoutStyles.hamburgerClose}`}>
            {children}
        </main>
        </>
        
    )
}

export default Layout
