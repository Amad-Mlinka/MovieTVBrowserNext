/*Imports */
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';
import { useRouter } from 'next/router'


/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/

/*Interfaces */


const Nav = () => {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <>
            <Navbar  />
            <Sidebar />
        </>
    )
}


export default Nav
