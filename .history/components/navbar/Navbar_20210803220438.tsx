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
        <header className={headerStyles.header}>
        <div className={headerStyles.left}>
            <div className={headerStyles.hamburgerLogo}>
                <div className={headerStyles.hamburger} onClick={props.hamburgerToggle}>
                    <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${props.hamburger ? headerStyles.part1Active : ""}`}></div>
                    <div className={`${headerStyles.spinner} ${headerStyles.horizontal} ${props.hamburger ? headerStyles.horizontalActive : ""}`}></div>
                    <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${props.hamburger ? headerStyles.part2Active : ""}`}></div>
                </div>
                <div data-end="X" className={headerStyles.logo}>
                    <span>Movie</span>
                </div>
            </div>


        </div>
        <div className={headerStyles.right}>
            <div className={headerStyles.profile}>
                <div className={`${headerStyles.loggedIn} ${headerStyles.dNone}`}>

                    <Avatar className={headerStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                </div>
                <div className={`${headerStyles.notLoggedIn}`}>
                    <div className={headerStyles.loginRegister}>
                        <div className={headerStyles.login}>
                            <span>Login</span>
                        </div>
                        <span>/</span>
                        <div className={headerStyles.register}>
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
