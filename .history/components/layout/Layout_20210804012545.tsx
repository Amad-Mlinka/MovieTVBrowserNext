import React, { useState } from 'react'
import Nav from '../nav/Nav'
import layoutStyles from "../../styles/Layout.module.scss"

const Layout = ({children}) => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
        <Nav hamburger={hamburger} hamburgerToggle={hamburgerToggle}/>
        <main className={hamburger ? layoutStyles.hamburgerOpen : layoutStyles.hamburgerClose}>
            {children}
        </main>
        </>
        
    )
}

export default Layout
