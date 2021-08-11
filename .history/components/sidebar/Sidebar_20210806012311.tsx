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
    const tvDropdown = {
        History: "link",
        Recomendations: "link",
        Bla: "bla"
    }
    const movieDropdown = {
        History: "link",
        Recomendations: "link",
        Bla: "bla"

    }
    const languageDropdown = {
        English: "hi",
        Bosnian: "zdravo"
    }
    return (
        <div className={`${sidebarStyles.sidebar} ${props.hamburger ? sidebarStyles.sidebarActive : ""}`} onMouseEnter={()=>{
            if(!props.hamburger){
                props.hamburgerToggle(!props.hamburger);
            }
        }}>

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>
                    <SidebarLink type="search" hamburger={props.hamburger} />

                    <SidebarLink type="singleLink" text="Home" icon={<HomeIcon/>} hamburger={props.hamburger}  />
                    
                    <SidebarLink type="dropdown" text="Movies" icon={<MovieIcon/>} hamburger={props.hamburger} dropdownLinks ={movieDropdown}/>

                    <SidebarLink type="dropdown" text="TV Shows" icon={<TvIcon/>} hamburger={props.hamburger} dropdownLinks ={tvDropdown}/>

                    <SidebarLink type="dropdown" text="Languages" icon={<LanguageIcon/>} hamburger={props.hamburger} dropdownLinks ={languageDropdown}/>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
