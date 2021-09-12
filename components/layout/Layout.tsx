/*Imports */
import Head from 'next/head'
import Nav from '../nav/Nav'
import Content from '../content/Content'
import { useRouter } from 'next/router'
import Footer from '../footer/Footer'

/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/

/*Interfaces */
import ChildrenElementProps from "../../interfaces/childrenInterface"
import React from 'react'



const Layout = ({ children }: ChildrenElementProps) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arimo" />
            </Head>
            <Nav />
            <Content >
                {children}
            </Content>
            <Footer/>
        </>

    )
}

export default Layout
