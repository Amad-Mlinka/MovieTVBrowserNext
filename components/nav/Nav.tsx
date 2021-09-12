/*Imports */
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';
import { useRouter } from 'next/router'
import { localeInterface } from '../../interfaces/localeInterface';
import en from '../../locales/en';
import bs from '../../locales/bs';


/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/

/*Interfaces */


const Nav = () => {
    const router = useRouter();
    const { locale } = router;
    const t: localeInterface = locale === "en" ? en : bs
    return (
        <>
            <Navbar locale={t}  />
            <Sidebar  locale={t} />
        </>
    )
}


export default Nav
