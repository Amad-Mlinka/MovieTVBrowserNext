/*Imports */
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import * as reduxHooks from "../../hooks/reduxHooks"
import searchSlice from '../../store/searchSlice';
import { changeTerm, resetTerm } from '../../store/searchSlice';
import { changeOpen } from '../../store/sidebarSlice';
import { sidebarState } from '../../store/sidebarInterface';
import { searchTermState } from '../../store/searchTermInterface';
import store, { RootState } from '../../store/store';

/*Material components*/


/*Icons*/
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"



interface SidebarLinkProps {
    type:string,
    url?:string,
    text?:string,
    icon?:JSX.Element,
    dropdownLinks:string[]
 }



const SidebarLink = ({type,url,text,icon,dropdownLinks}:SidebarLinkProps) => {
    const dispatch = reduxHooks.useAppDispatch()
    const searchTerm:string = reduxHooks.useAppSelector((state:RootState) => state.searchReducer.term)
    const sidebar:boolean = reduxHooks.useAppSelector((state: RootState) =>state.sidebarReducer.open)

    const changeTermHandler = (term:string) => {
        dispatch(changeTerm(term))
        console.log(searchTerm)
    }

    const resetTermHandler = () => {
        dispatch(resetTerm())
    }

    const sidebarToggle = () => {
        dispatch(changeOpen())
        console.log(sidebar)
    }





    const types = ["search", "singleLink", "dropdown"]
    const [open, setOpen] = useState(false);
    return (
        <>
            {
                type === types[0] ?
                    <li className={`${sidebarStyles.sidebarLink} ${sidebar ? sidebarStyles.sidebarLinkOpen : ""} ${sidebarStyles.sidebarSearch} ${sidebar ? sidebarStyles.sidebarSearchActive : ""}`} onClick={() => {
                    }}>
                        <div className={` ${sidebarStyles.searchContainer}`} >
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" value={searchTerm || ""} className={`${sidebarStyles.searchBar} ${sidebar ? sidebarStyles.searchBarClosed : ""}`}
                                onChange={(e) => {
                                    changeTermHandler(e.target.value)
                                }}  ></input>
                            <DoubleArrowIcon className={sidebarStyles.searchIconConfirm} />
                        </div>
                    </li>
                    :
                    type === types[1] ?
                        <Link href={url ? url : "/"}>
                            <li className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                                if (!sidebar) sidebarToggle()
                            }}>
                                <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                    {icon}
                                    <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                    <div className={sidebarStyles.singleLinkSpacer}><KeyboardArrowDownIcon /></div>
                                </div>
                            </li>
                        </Link>

                        :
                        <li className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                            if (!sidebar) sidebarToggle()
                        }
                        }>
                            <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                {icon}
                                <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
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
