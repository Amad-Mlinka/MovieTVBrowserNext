/*Imports */
import React, { useState } from 'react'

/*Material components*/


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



const sidebarLink = (props) => {
    const types=["search","dropdown","singleLink"]
    return (
        <li className={`${sidebarStyles.sidebarLink} ${sidebarStyles.sidebarSearch} ${props.hamburger ? sidebarStyles.sidebarSearchActive : ""}`}>
            {props.icon}
            <SearchIcon className={`${sidebarStyles.sidebarIcon} ${props.hamburger ? sidebarStyles.dNone : ""}`} />
            <div className={` ${sidebarStyles.searchContainer} ${!props.hamburger ? sidebarStyles.dNone : ""}`}>
                <SearchIcon className={sidebarStyles.searchIcon} />
                <input type="search" name="searchBar" className={sidebarStyles.searchBar} ></input>
            </div>
        </li>
    )
}

export default sidebarLink
