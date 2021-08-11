/*Imports */
import React, { useEffect, useState } from 'react'

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
import sidebarStyles from "../../styles/Sidebar.module.scss"


const Sidebar = (props) => {
    useEffect(() => {
        if(props.hamburger){
            $(`.${sidebarStyles.sidebar}`).addClass(`${sidebarStyles.sidebarActive}`)
        }else{
            $(`.${sidebarStyles.sidebar}`).removeClass(`${sidebarStyles.sidebarActive}`)
        }
        
    }, [props.hamburger])
    return (
        <div className={`${sidebarStyles.sidebar} ${props.hamburger ? sidebarStyles.sidebarActive : ""}`}>

                <div className={sidebarStyles.sidebarMenu}>
                    <ul className={`${sidebarStyles.sidebarList}`}>
                        <li className={sidebarStyles.sidebarLink}>
                            <SearchIcon className={`${sidebarStyles.sidebarIcon} ${props.hamburger ? sidebarStyles.dNone : ""}`} />
                            <div className={` ${sidebarStyles.searchContainer} ${ !props.hamburger ? sidebarStyles.dNone : ""}`}>
                                <SearchIcon className={sidebarStyles.searchIcon} />
                                <input type="search" name="searchBar" className={sidebarStyles.searchBar} ></input>
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
