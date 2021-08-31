/*Imports */
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import * as reduxHooks from "../../hooks/reduxHooks"
import { changeTerm, resetTerm } from '../../store/searchSlice';
import { changeOpen } from '../../store/sidebarSlice';
import store, { RootState } from '../../store/store';
import Search from './Search';

/*Material components*/


/*Icons*/
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Navigation/Sidebar.module.scss"


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
   
    const sidebar:boolean = reduxHooks.useAppSelector((state: RootState) =>state.sidebarReducer.open)

    
    const types = ["search", "singleLink", "dropdown"]
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <>
            {
                type === types[0] ?
                   <Search/>
                    :
                    type === types[1] ?
                        <Link href={url ? url : "/"}>
                            <li className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }}>
                                <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                    {icon}
                                    <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                    <div className={sidebarStyles.singleLinkSpacer}><KeyboardArrowDownIcon /></div>
                                </div>
                            </li>
                        </Link>

                        :
                        <li className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                            if (sidebar) setDropdownOpen(!dropdownOpen)
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
