/*Imports */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as reduxHooks from "../../hooks/reduxHooks"

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

interface SidebarLinkProps {
    sidebarOpen:boolean,
    setSidebarOpen:Function,
    type:string,
    url?:string,
    text?:string,
    icon?:JSX.Element,
    dropdownLinks:string[]
 }



const SidebarLink = ({sidebarOpen,setSidebarOpen,type,url,text,icon,dropdownLinks}:SidebarLinkProps) => {
    const dispatch = reduxHooks.useAppDispatch();
    const searchTerm = reduxHooks.useAppSelector((state) => state.searchTerm)

    const changeTerm = (term:string) => {
        dispatch({
            type: "CHANGETERM",
            payload: term
        })
        console.log(term)
    }

    const resetTerm = () => {
        dispatch({
            type: "RESETTERM",
        })
    }





    const types = ["search", "singleLink", "dropdown"]
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(false);
    }, [sidebarOpen])
    return (
        <>
            {
                type === types[0] ?
                    <li className={`${sidebarStyles.sidebarLink} ${sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""} ${sidebarStyles.sidebarSearch} ${sidebarOpen ? sidebarStyles.sidebarSearchActive : ""}`} onClick={() => {
                        if (!sidebarOpen) setSidebarOpen(!sidebarOpen)
                    }}>
                        <div className={` ${sidebarStyles.searchContainer}`} >
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" value={searchTerm || ""} className={`${sidebarStyles.searchBar} ${!sidebarOpen ? sidebarStyles.searchBarClosed : ""}`}
                                onChange={(e) => {
                                    changeTerm(e.target.value)
                                }}  ></input>
                            <DoubleArrowIcon className={sidebarStyles.searchIconConfirm} />
                        </div>
                    </li>
                    :
                    type === types[1] ?
                        <Link href={url ? url : "/"}>
                            <li className={`${sidebarStyles.sidebarLink}  ${sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                                if (!sidebarOpen) setSidebarOpen(!sidebarOpen)
                            }}>
                                <div className={`${sidebarStyles.sidebarLinkMain} ${sidebarOpen ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                    {icon}
                                    <span className={`${sidebarStyles.sidebarText}  ${sidebarOpen ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                    <div className={sidebarStyles.singleLinkSpacer}><KeyboardArrowDownIcon /></div>
                                </div>
                            </li>
                        </Link>

                        :
                        <li className={`${sidebarStyles.sidebarLink}  ${sidebarOpen ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                            if (!sidebarOpen) setSidebarOpen(!sidebarOpen)
                            setOpen(!open)
                        }
                        }>
                            <div className={`${sidebarStyles.sidebarLinkMain} ${sidebarOpen ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                {icon}
                                <span className={`${sidebarStyles.sidebarText}  ${sidebarOpen ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                            <div className={`${sidebarStyles.sidebarDropdown} ${open ? sidebarStyles.open : ""}`}>
                                <ul className={`${sidebarStyles.sidebarDropdownLinks}  `}>
                                    {
                                        Object.entries(dropdownLinks).map(([name, link]) => (
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
