/*Imports */
import * as reduxHooks from "../../hooks/reduxHooks"
import { changeOpen } from "../../store/sidebarSlice"
import { RootState } from '../../store/store';


/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/


/*Styles*/
import navStyles from "../../styles/Navbar.module.scss"
import Link from 'next/link';




const Navbar = () => {

    const dispatch = reduxHooks.useAppDispatch()
    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)



    const sidebarToggle = () => {
        dispatch(changeOpen())
    }
    return (
        <header className={navStyles.header}>
            <div className={navStyles.left}>
                <div className={navStyles.hamburgerLogo}>
                    <div className={navStyles.hamburger} onClick={() => {
                        sidebarToggle();

                    }}>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part1Active : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.horizontal} ${sidebar ? navStyles.horizontalActive : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part2Active : ""}`}></div>
                    </div>
                    <Link href="/">
                        <div data-end="X" className={navStyles.logo}>
                            <span>Movie</span>
                        </div>
                    </Link>

                </div>


            </div>
            <div className={navStyles.right}>
                <div className={navStyles.profile}>
                    <div className={`${navStyles.loggedIn} ${navStyles.dNone} `}>

                        <Avatar className={navStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                    </div>
                    <div className={`${navStyles.notLoggedIn} `}>
                        <div className={navStyles.loginRegister}>
                            <div className={navStyles.login}>
                                <span>Login</span>
                            </div>
                            <span>/</span>
                            <div className={navStyles.register}>
                                <span>Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
