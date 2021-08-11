/*Imports */
import React, { useState } from 'react'

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/
import $ from "jquery";

/*Styles*/
import navStyles from "../../styles/Navbar.module.scss"

const Navbar = (props) => {
    return (
        <header className={navStyles.header}>
        <div className={navStyles.left}>
            <div className={navStyles.hamburgerLogo}>
                <div className={navStyles.hamburger} onClick={props.hamburgerToggle}>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${props.hamburger ? navStyles.part1Active : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.horizontal} ${props.hamburger ? navStyles.horizontalActive : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${props.hamburger ? navStyles.part2Active : ""}`}></div>
                </div>
                <div data-end="X" className={navStyles.logo}>
                    <span>Movie</span>
                </div>
            </div>


        </div>
        <div className={navStyles.right}>
            <div className={navStyles.profile}>
                <div className={`${navStyles.loggedIn} `}>

                    <Avatar className={navStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                </div>
                <div className={`${navStyles.notLoggedIn} ${navStyles.dNone}`}>
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
