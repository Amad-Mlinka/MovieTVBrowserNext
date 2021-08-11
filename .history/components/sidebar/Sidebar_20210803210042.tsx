/*Imports */
import React, { useState } from 'react'

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import LanguageIcon from '@material-ui/icons/Language';

/*Import Plugins*/
import $ from "jquery";

/*Styles*/
import headerStyles from "../../styles/Header.module.scss"


const Sidebar = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);

        $(`.${headerStyles.sidebar}`).addClass(`${headerStyles.sidebarActive}`)

    }
    return (
        <div className={`${headerStyles.sidebar} ${hamburger ? headerStyles.sidebarActive : ""}`}>

                <div className={headerStyles.sidebarMenu}>
                    <ul className={`${headerStyles.sidebarList}`}>
                        <li className={headerStyles.sidebarLink}>
                            <SearchIcon className={`${headerStyles.sidebarIcon} ${hamburger ? headerStyles.dNone : ""}`} />
                            <div className={` ${headerStyles.searchContainer} ${ !hamburger ? headerStyles.dNone : ""}`}>
                                <SearchIcon className={headerStyles.searchIcon} />
                                <input type="search" name="searchBar" className={headerStyles.searchBar} ></input>
                            </div>
                        </li>
                        <li className={headerStyles.sidebarLink}>
                            <HomeIcon className={headerStyles.sidebarIcon} />
                            <span className={`${headerStyles.sidebarText}  ${hamburger ? headerStyles.sidebarTextActive : ""}`}>Home</span>
                        </li>
                        <li className={headerStyles.sidebarLink}>
                            <MovieIcon className={headerStyles.sidebarIcon} />
                            <span className={`${headerStyles.sidebarText}  ${hamburger ? headerStyles.sidebarTextActive : ""}`}>Movies</span>
                        </li>
                        <li className={headerStyles.sidebarLink}>
                            <TvIcon className={headerStyles.sidebarIcon} />
                            <span className={`${headerStyles.sidebarText}  ${hamburger ? headerStyles.sidebarTextActive : ""}`}>TV Shows</span>
                        </li>
                        <li className={headerStyles.sidebarLink}>
                            <LanguageIcon className={headerStyles.sidebarIcon} />
                            <span className={`${headerStyles.sidebarText}  ${hamburger ? headerStyles.sidebarTextActive : ""}`}>Languages</span>
                        </li>
                    </ul>
                </div>

            </div>
    )
}

export default Sidebar
