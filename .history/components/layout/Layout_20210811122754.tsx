import React, { useState } from 'react'
import Nav from '../nav/Nav'
import Head from 'next/head'
import Content from '../content/Content'

interface LayoutProps {
    children: React.ReactNode;
 }
 

const Layout = ({ children }:LayoutProps) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arimo" />
            </Head>
            <Nav />
            <Content >
                {children}
            </Content>
        </>

    )
}

export default Layout
