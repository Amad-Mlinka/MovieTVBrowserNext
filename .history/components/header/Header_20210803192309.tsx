/*Imports */
import React, { useState } from 'react'

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

/*Import Plugins*/
import $ from "jquery";

/*Styles*/
import headerStyles from "../../styles/Header.module.scss"




const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);

        $(`.${headerStyles.sidebar}`).addClass(`${headerStyles.sidebarActive}`)

    }
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.left}>
                    <div className={headerStyles.hamburgerLogo}>
                        <div className={headerStyles.hamburger} onClick={hamburgerToggle}>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${hamburger ? headerStyles.part1Active : ""}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.horizontal} ${hamburger ? headerStyles.horizontalActive : ""}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${hamburger ? headerStyles.part2Active : ""}`}></div>
                        </div>
                        <div data-end="X" className={headerStyles.logo}>
                            <span>Movie</span>
                        </div>
                    </div>

                    <div className={headerStyles.search}>
                        <div className={headerStyles.searchContainer}>
                            <SearchIcon className={headerStyles.searchIcon} />
                            <input type="search" name="searchBar" className={headerStyles.searchBar} ></input>
                        </div>

                    </div>
                </div>
                <div className={headerStyles.right}>
                    <KeyboardArrowDownIcon className={headerStyles.expandButton} />
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
            <div className={`${headerStyles.sidebar} ${hamburger ? headerStyles.sidebarActive : ""}`}>
                
                <div className={headerStyles.sidebarMenu}>
                    <ul className={`${headerStyles.sidebarList}`}>
                        <li className={headerStyles.sidebarLink}>
                            <HomeIcon className={headerStyles.sidebarIcon} />
                            <span className={headerStyles.sidebarText}>Text 123</span>
                        </li>
                        <li className={headerStyles.sidebarLink}>
                            <HomeIcon className={headerStyles.sidebarIcon} />
                        </li>
                    </ul>
                </div>
                
            </div>

        </>

    )
}

export default Header
