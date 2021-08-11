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

interface SidebarProps {
    sidebarOpen:boolean,
    setSidebarOpen:Function
 }



const Sidebar = ({sidebarOpen, setSidebarOpen}:SidebarProps) => {
    
    const languageDropdown = {
        English: "hi",
        Bosnian: "zdravo"
    }
    return (
        <div className={`${sidebarStyles.sidebar} ${sidebarOpen ? sidebarStyles.sidebarOpen : ""}`}>

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>

                    <SidebarLink type="search" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

                    <SidebarLink type="singleLink" text="Home" icon={<HomeIcon />} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} url="/" />

                    <SidebarLink type="singleLink" text="Movies" icon={<MovieIcon />} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} url="/movies" />

                    <SidebarLink type="singleLink" text="TV Shows" icon={<TvIcon />} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} url="/tv" />

                    <SidebarLink type="dropdown" text="Languages" icon={<LanguageIcon />} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} dropdownLinks={languageDropdown} />

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
