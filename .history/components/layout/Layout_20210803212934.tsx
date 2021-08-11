import React from 'react'
import Header from "../header/Header"
import Nav from '../nav/Nav'

const Layout = ({children}) => {
    return (
        <>
        <Nav/>
        <main>
            {children}
        </main>
        </>
        
    )
}

export default Layout
