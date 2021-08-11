import React, { useState } from 'react'
import Nav from '../nav/Nav'
import Head from 'next/head'
import Content from '../content/Content'

interface LayoutProps {
    children: React.ReactNode;
 }
 

const Layout = ({ children }:LayoutProps) => {
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
            <Head>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arimo" />
            </Head>
            <Nav sidebarOpen={sidebarOpen} setSidebarOpen={sidebarToggle} sidebarLock={sidebarLock} setSidebarLock={sidebarLockToggle} />
            <Content sidebarOpen={sidebarOpen} setSidebarOpen={sidebarToggle}>
                {children}
            </Content>
        </>

    )
}

export default Layout
