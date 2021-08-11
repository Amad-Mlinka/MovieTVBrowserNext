import React, { useState } from 'react'
import headerStyles from "../../styles/Header.module.scss"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';




const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.left}>
                    <div className={headerStyles.hamburgerLogo}>
                        <div className={headerStyles.hamburger} onClick={hamburgerToggle}>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part1}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.horizontal}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part2}`}></div>
                        </div>
                        <div data-end="X" className={headerStyles.logo}>
                            <span>Movie</span>
                        </div>
                    </div>

                    <div className={headerStyles.search}>
                        <div className="searchContainer">
                            <SearchIcon className={headerStyles.searchIcon} />
                            <input type="search" name="searchBar" className={headerStyles.searchBar} ></input>
                        </div>

                    </div>
                </div>
                <div className={headerStyles.right}>
                    <div className={headerStyles.profile}>
                        <div className={headerStyles.loggedIn}>

                            <Avatar className={headerStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                        </div>
                        <div className={`${headerStyles.notLoggedIn} ${headerStyles.dNone}`}>
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
            <div className={headerStyles.sidebar}>


            </div>

        </>

    )
}

export default Header
