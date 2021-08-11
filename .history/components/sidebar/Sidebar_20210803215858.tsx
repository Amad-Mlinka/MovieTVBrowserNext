/*Imports */
import React from 'react'

/*Material components*/


/*Icons*/
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import LanguageIcon from '@material-ui/icons/Language';

/*Import Plugins*/


/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"


const Sidebar = (props) => {
    return (
        <div className={`${sidebarStyles.sidebar} ${props.hamburger ? sidebarStyles.sidebarActive : ""}`}>

                <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${headerStyles.sidebarList}`}>
                        <li className={`${headerStyles.sidebarLink} ${headerStyles.sidebarSearch} ${hamburger ? headerStyles.sidebarSearchActive : ""}`}>
                            <SearchIcon className={`${headerStyles.sidebarIcon} ${hamburger ? headerStyles.dNone : ""}`} />
                            <div className={` ${headerStyles.searchContainer} ${ !hamburger ? headerStyles.dNone : ""}`}>
                                <SearchIcon className={headerStyles.searchIcon} />
                                <input type="search" name="searchBar" className={headerStyles.searchBar} ></input>
                            </div>
                        </li>
                        <li className={sidebarStyles.sidebarLink}>
                            <HomeIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Home</span>
                        </li>
                        <li className={sidebarStyles.sidebarLink}>
                            <MovieIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Movies</span>
                        </li>
                        <li className={sidebarStyles.sidebarLink}>
                            <TvIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>TV Shows</span>
                        </li>
                        <li className={sidebarStyles.sidebarLink}>
                            <LanguageIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Languages</span>
                        </li>
                    </ul>
                </div>

            </div>
    )
}

export default Sidebar
