/*Imports */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

/*Material components*/


/*Icons*/
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/*Import Plugins*/
import $ from "jquery"


/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"
import Link from 'next/link';



const SidebarLink = (props) => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.searchTerm)

    const changeTerm = (term) => {
        dispatch({
            type:"CHANGETERM",
            payload:term
        })
        console.log(term)
    }

    const resetTerm = () => {
        dispatch({
            type:"RESETTERM",
        })
    }


 


    const types = ["search", "singleLink", "dropdown"]
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(false);
    }, [props.sidebarOpen])
    return (
        <>
            {
                props.type === types[0] ?
                    <li className={`${sidebarStyles.sidebarLink} ${props.sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""} ${sidebarStyles.sidebarSearch} ${props.sidebarOpen ? sidebarStyles.sidebarSearchActive : ""}`} onClick={() => {
                        if (!props.sidebarOpen) props.setSidebarOpen(!props.sidebarOpen)
                    }}>
                        <div className={` ${sidebarStyles.searchContainer}`} >
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" className={`${sidebarStyles.searchBar} ${!props.sidebarOpen ? sidebarStyles.searchBarClosed : ""}`}  onKeyPress={(e)=>{
                                changeTerm(e.target.value)
                                
                                }} value={searchTerm || ""} ></input>
                            <DoubleArrowIcon className={sidebarStyles.searchIconConfirm} />
                        </div>
                    </li>
                    :
                    props.type === types[1] ?
                        <Link href={props.url ? props.url :"/"}>
                            <li className={`${sidebarStyles.sidebarLink}  ${props.sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                                if (!props.sidebarOpen) props.setSidebarOpen(!props.sidebarOpen)
                            }}>
                                <div className={`${sidebarStyles.sidebarLinkMain} ${props.sidebarOpen ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                    {props.icon}
                                    <span className={`${sidebarStyles.sidebarText}  ${props.sidebarOpen ? sidebarStyles.sidebarTextActive : ""}`}>{props.text}</span>
                                    <div className={sidebarStyles.singleLinkSpacer}><KeyboardArrowDownIcon /></div>
                                </div>
                            </li>
                        </Link>

                        :
                        <li className={`${sidebarStyles.sidebarLink}  ${props.sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                            if (!props.sidebarOpen) props.setSidebarOpen(!props.sidebarOpen)
                            setOpen(!open)
                        }
                        }>
                            <div className={`${sidebarStyles.sidebarLinkMain} ${props.sidebarOpen ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                {props.icon}
                                <span className={`${sidebarStyles.sidebarText}  ${props.sidebarOpen ? sidebarStyles.sidebarTextActive : ""}`}>{props.text}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                            <div className={`${sidebarStyles.sidebarDropdown} ${open ? sidebarStyles.open : ""}`}>
                                <ul className={`${sidebarStyles.sidebarDropdownLinks}  `}>
                                    {
                                        Object.entries(props.dropdownLinks).map(([name, link]) => (
                                            <li className={sidebarStyles.sidebarDropdownLink} key={name}>{name}</li>
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
