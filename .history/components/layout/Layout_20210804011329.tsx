import React, { useState } from 'react'
import Nav from '../nav/Nav'

const Layout = ({children}) => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
        <Nav hamburger={hamburger} hamburgerToggle={hamburgerToggle}/>
        <main>
            {children}
        </main>
        </>
        
    )
}

export default Layout
