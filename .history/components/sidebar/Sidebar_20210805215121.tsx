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
        history: "link",
        recomendations: "link",
        bla: "bla"
    }
    const movieDropdown = {
        history: "link",
        recomendations: "link",
        bla: "bla"

    }
    const languageDropdown = {
        english: "hi",
        bosnian: "zdravo"
    }
    return (
        <div className={`${sidebarStyles.sidebar} ${props.hamburger ? sidebarStyles.sidebarActive : ""}`}>

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>
                    <SidebarLink type="search" hamburger={props.hamburger} />

                    <SidebarLink type="singleLink" text="Home" icon={<HomeIcon/>} hamburger={props.hamburger}  />
                    
                    <SidebarLink type="dropdown" text="Movies" icon={<MovieIcon/>} hamburger={props.hamburger} dropdownLinks ={movieDropdown}/>

                    <SidebarLink type="dropdown" text="TV Shows" icon={<TvIcon/>} hamburger={props.hamburger} dropdownLinks ={tvDropdown}/>


                    <li className={sidebarStyles.sidebarLink}>
                        <div className={sidebarStyles.sidebarLinkMain}>
                            <MovieIcon className={sidebarStyles.sidebarIcon} />
                            <span className={`${sidebarStyles.sidebarText}  ${props.hamburger ? sidebarStyles.sidebarTextActive : ""}`}>Movies</span>
                            <KeyboardArrowDownIcon />
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
                            <KeyboardArrowDownIcon />
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
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className={sidebarStyles.sidebarDropdown}>
                            <ul>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla1</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla2</div>
                                <div className={sidebarStyles.sidebarDropdownLink}>Bla3</div>
                            </ul>
                        </div>
                    </li>
                    <SidebarLink type="dropdown" dropdownLinks={tvDropdown} text="Another Link" icon={<LanguageIcon />} hamburger={props.hamburger} />
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
