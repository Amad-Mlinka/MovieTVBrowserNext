/*Imports */
import React from 'react'

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/


/*Styles*/
import navStyles from "../../styles/Navbar.module.scss"

interface NavbarProps {
    sidebarOpen:boolean,
    setSidebarOpen:Function
 }



const Navbar = ({sidebarOpen, setSidebarOpen}: NavbarProps) => {
    return (
        <header className={navStyles.header}>
        <div className={navStyles.left}>
            <div className={navStyles.hamburgerLogo}>
                <div className={navStyles.hamburger} onClick={()=>{
                        setSidebarOpen(!sidebarOpen);

                    }}>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebarOpen ? navStyles.part1Active : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.horizontal} ${sidebarOpen ? navStyles.horizontalActive : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebarOpen ? navStyles.part2Active : ""}`}></div>
                </div>
                <div data-end="X" className={navStyles.logo}>
                    <span>Movie</span>
                </div>
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
