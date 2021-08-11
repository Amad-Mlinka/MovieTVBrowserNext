/*Imports */
import React, { useState } from 'react'

/*Material components*/
import SidebarLink from "./SidebarLink"


/*Icons*/
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/*Import Plugins*/
import $ from "jquery"


/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"


const Sidebar = (props) => {
    const[open,setOpen] =useState(false);
    return (
        <div className={`${sidebarStyles.sidebar} ${props.hamburger ? sidebarStyles.sidebarActive : ""}`}>

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>
                    <li className={`${sidebarStyles.sidebarLink} ${sidebarStyles.sidebarSearch} ${props.hamburger ? sidebarStyles.sidebarSearchActive : ""}`}>
                        <SearchIcon className={`${sidebarStyles.sidebarIcon} ${props.hamburger ? sidebarStyles.dNone : ""}`} />
                        <div className={` ${sidebarStyles.searchContainer} ${!props.hamburger ? sidebarStyles.dNone : ""}`}>
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" className={sidebarStyles.searchBar} ></input>
                        </div>
                    </li>
                    <li className={sidebarStyles.sidebarLink}>
                    <div className={sidebarStyles.sidebarLinkMain}>
                        <HomeIcon className={sidebarStyles.sidebarIcon} />
                        <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Home</span>
                        </div>
                    </li>
                    <li className={sidebarStyles.sidebarLink}>
                        <div className={sidebarStyles.sidebarLinkMain}>
                            <MovieIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Movies</span>
                            <KeyboardArrowDownIcon className={sidebarStyles.dropdownIcon}/>
                        </div>
                        <div className={sidebarStyles.sidebarDropdown}>
                            <ul>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla1</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla2</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla3</div>
                            </ul>
                        </div>
                    </li>
                    <li className={sidebarStyles.sidebarLink}>
                        <div className={sidebarStyles.sidebarLinkMain}>
                            <TvIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>TV Shows</span>
                            <KeyboardArrowDownIcon className={sidebarStyles.dropdownIcon} />
                        </div>
                        <div className={sidebarStyles.sidebarDropdown}>
                            <ul>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla1</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla2</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla3</div>
                            </ul>
                        </div>
                    </li>
                    <li className={sidebarStyles.sidebarLink}>
                        <div className={sidebarStyles.sidebarLinkMain}>
                            <LanguageIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Languages</span>
                            <KeyboardArrowDownIcon className={sidebarStyles.dropdownIcon} />
                        </div>
                        <div className={sidebarStyles.sidebarDropdown}>
                            <ul>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla1</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla2</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla3</div>
                            </ul>
                        </div>
                    </li>
                    <SidebarLink type="search" hamburger={props.hamburger}/>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
