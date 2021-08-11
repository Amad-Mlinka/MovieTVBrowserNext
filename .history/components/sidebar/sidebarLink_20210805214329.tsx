/*Imports */
import React, { useEffect, useState } from 'react'

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



const SidebarLink = (props) => {
    const types = ["search", "singleLink", "dropdown"]
    useEffect(() => {
        console.log(props.type)
    }, [])
    return (
        <>
            {
                props.type === types[0] ?
                    <li className={`${sidebarStyles.sidebarLink} ${sidebarStyles.sidebarSearch} ${props.hamburger ? sidebarStyles.sidebarSearchActive : ""}`}>
                        <SearchIcon className={`${sidebarStyles.sidebarIcon} ${props.hamburger ? sidebarStyles.dNone : ""}`} />
                        <div className={` ${sidebarStyles.searchContainer} ${!props.hamburger ? sidebarStyles.dNone : ""}`}>
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" className={sidebarStyles.searchBar} ></input>
                        </div>
                    </li>
                    :
                    props.type === types[1] ?
                        <li className={sidebarStyles.sidebarLink}>
                            <div className={sidebarStyles.sidebarLinkMain}>
                                {props.icon}
                                <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>{props.text}</span>
                            </div>
                        </li>
                        :
                        <li className={sidebarStyles.sidebarLink}>
                            <div className={sidebarStyles.sidebarLinkMain}>
                                {props.icon}
                                <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>{props.text}</span>
                                <KeyboardArrowDownIcon className={sidebarStyles.dropdownIcon} />
                            </div>
                            <div className={sidebarStyles.sidebarDropdown}>
                                <ul>
                                    {
                                        Object.entries(props.dropdownLinks).map(([name,link])=> (
                                            <li className={sidebarStyles.sidebarDropdownLink}>{name}</li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </li>
            }
        </>


    )
}

export default SidebarLink
