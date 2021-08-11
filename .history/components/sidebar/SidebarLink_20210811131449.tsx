/*Imports */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as reduxHooks from "../../hooks/reduxHooks"
import searchSlice from '../../store/searchSlice';
import { changeTerm, resetTerm } from '../../store/searchSlice';

/*Material components*/


/*Icons*/
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"
import Link from 'next/link';
import { sidebarState } from '../../store/sidebarInterface';
import { searchTermState } from '../../store/searchTermInterface';
import store, { RootState } from '../../store/store';

interface SidebarLinkProps {
    type:string,
    url?:string,
    text?:string,
    icon?:JSX.Element,
    dropdownLinks:string[]
 }



const SidebarLink = ({type,url,text,icon,dropdownLinks}:SidebarLinkProps) => {
    const dispatch = reduxHooks.useAppDispatch()
    const searchTerm:string = reduxHooks.useAppSelector((state:RootState) => state.searchTermReducer.term)
    const sidebar:boolean = reduxHooks.useAppSelector((state: RootState) =>state.sidebarReducer.open)

    const changeTermHandler = (term:string) => {
        dispatch(changeTerm(term))
        console.log(searchTerm)
    }

    const resetTermHandler = () => {
        dispatch(resetTerm())
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
                    }}>
                        <div className={` ${sidebarStyles.searchContainer}`} >
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" value={searchTerm || ""} className={`${sidebarStyles.searchBar} ${sidebarOpen ? sidebarStyles.searchBarClosed : ""}`}
                                onChange={(e) => {
                                    changeTermHandler(e.target.value)
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
