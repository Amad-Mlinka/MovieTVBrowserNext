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
        <div className={`${sidebarStyles.sidebar} ${props.sidebarOpen ? sidebarStyles.sidebarActive : ""}`} 
        onMouseEnter={()=>{
            if(!props.sidebarOpen && props.sidebarLock){
                props.setSidebarOpen(!props.sidebarOpen);
            }
        }}
        onMouseLeave={() => {
            if(props.sidebarOpen && props.sidebarLock){
                props.setSidebarOpen(!props.sidebarOpen);
            }
        }} 
        >

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>
                    <SidebarLink type="search" sidebarOpen={props.sidebarOpen} />

                    <SidebarLink type="singleLink" text="Home" icon={<HomeIcon/>} sidebarOpen={props.sidebarOpen}  />
                    
                    <SidebarLink type="dropdown" text="Movies" icon={<MovieIcon/>} sidebarOpen={props.sidebarOpen} dropdownLinks ={movieDropdown}/>

                    <SidebarLink type="dropdown" text="TV Shows" icon={<TvIcon/>} sidebarOpen={props.sidebarOpen} dropdownLinks ={tvDropdown}/>

                    <SidebarLink type="dropdown" text="Languages" icon={<LanguageIcon/>} sidebarOpen={props.sidebarOpen} dropdownLinks ={languageDropdown}/>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
