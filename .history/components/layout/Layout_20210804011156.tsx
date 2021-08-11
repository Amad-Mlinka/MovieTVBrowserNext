import React from 'react'
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
