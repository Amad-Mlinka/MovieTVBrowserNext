/*Imports */
import React, { useState } from 'react'
import Link from 'next/link';
import * as reduxHooks from "../../hooks/reduxHooks"
import { changeTerm, resetTerm } from '../../store/searchSlice';
import { changeOpen } from '../../store/sidebarSlice';
import store, { RootState } from '../../store/store';

/*Material components*/


/*Icons*/
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"

interface Dropdown {
    title:string,
    link:string
}



interface SidebarLinkProps {
    type:string,
    url?:string,
    text?:string,
    icon?:JSX.Element,
    dropdownLinks?:Dropdown[]
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <>
            {
                type === types[0] ?
                    <li className={`${sidebarStyles.sidebarLink} ${sidebar ? sidebarStyles.sidebarLinkOpen : ""} ${sidebarStyles.sidebarSearch} ${sidebar ? sidebarStyles.sidebarSearchActive : ""}`} onClick={() => {
                    }}>
                        <div className={` ${sidebarStyles.searchContainer}`} >
                            <SearchIcon className={sidebarStyles.searchIcon} />
                            <input type="search" name="searchBar" value={searchTerm || ""} className={`${sidebarStyles.searchBar} ${!sidebar ? sidebarStyles.searchBarClosed : ""}`}
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
                                if (sidebar) sidebarToggle()
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
                            if (sidebar) sidebarToggle()
                            setDropdownOpen(!dropdownOpen)
                        }
                        }>
                            <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                {icon}
                                <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                            <div className={`${sidebarStyles.sidebarDropdown} ${dropdownOpen ? sidebarStyles.open : ""}`} >
                                <ul className={`${sidebarStyles.sidebarDropdownLinks}  `}>
                                    {dropdownLinks &&
                                        (dropdownLinks).map((link) => (
                                            <li className={sidebarStyles.sidebarDropdownLink} key={link.title}>{link.title}</li>
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
