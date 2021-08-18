/*Imports */
import React, { useEffect, useState } from 'react'
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


const Search = () => {
    const dispatch = reduxHooks.useAppDispatch()
    const searchTerm:string = reduxHooks.useAppSelector((state:RootState) => state.searchReducer.term)
    const sidebar:boolean = reduxHooks.useAppSelector((state: RootState) =>state.sidebarReducer.open)

    const changeTermHandler = (term:string) => {
        dispatch(changeTerm(term))
    }

    const resetTermHandler = () => {
        dispatch(resetTerm())
    }

    useEffect(() => {
        console.log(searchTerm);
      }, [searchTerm]);


    return (
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
    )
}

export default Search
