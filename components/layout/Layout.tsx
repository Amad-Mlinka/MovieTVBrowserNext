/*Imports */
import Head from 'next/head'
import Nav from '../nav/Nav'
import Content from '../content/Content'
import { useRouter } from 'next/router'

/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/

/*Interfaces */
import ChildrenElementProps from "../../interfaces/childrenInterface"


const Layout = ({ children }: ChildrenElementProps) => {
    const router = useRouter();
    const url = router.pathname;
    console.log(url);
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
