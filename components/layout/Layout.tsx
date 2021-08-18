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
import { useRouter } from 'next/router'

const Layout = ({ children }:ChildrenElementProps) => {
    const router=useRouter()
    console.log(router.pathname)
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
