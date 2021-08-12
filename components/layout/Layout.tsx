/*Imports */
import Head from 'next/head'
import Nav from '../nav/Nav'
import Content from '../content/Content'

/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/

/*Interfaces */
import ChildrenElementProps from "../../interfaces/childrenInterface"







const Layout = ({ children }:ChildrenElementProps) => {
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
