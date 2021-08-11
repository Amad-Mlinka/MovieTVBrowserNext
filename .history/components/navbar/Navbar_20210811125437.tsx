/*Imports */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as reduxHooks from "../../hooks/reduxHooks"
import searchSlice from '../../store/searchSlice';
import { changeTerm, resetTerm } from '../../store/searchSlice';
import { sidebarState } from "../../store/sidebarInterface"
import { changeOpen } from "../../store/sidebarSlice"

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/


/*Styles*/
import navStyles from "../../styles/Navbar.module.scss"





const Navbar = () => {

    const dispatch = reduxHooks.useAppDispatch()
    const sidebar = reduxHooks.useAppSelector((state: any) =>{
        console.log(state.open)
        state.open
        
    } )



    const sidebarToggle = () => {
        dispatch(changeOpen())
        console.log(sidebar)
    }
    return (
        <header className={navStyles.header}>
            <div className={navStyles.left}>
                <div className={navStyles.hamburgerLogo}>
                    <div className={navStyles.hamburger} onClick={() => {
                        sidebarToggle();

                    }}>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part1Active : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.horizontal} ${sidebar ? navStyles.horizontalActive : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part2Active : ""}`}></div>
                    </div>
                    <div data-end="X" className={navStyles.logo}>
                        <span>Movie</span>
                    </div>
                </div>


            </div>
            <div className={navStyles.right}>
                <div className={navStyles.profile}>
                    <div className={`${navStyles.loggedIn} ${navStyles.dNone} `}>

                        <Avatar className={navStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                    </div>
                    <div className={`${navStyles.notLoggedIn} `}>
                        <div className={navStyles.loginRegister}>
                            <div className={navStyles.login}>
                                <span>Login</span>
                            </div>
                            <span>/</span>
                            <div className={navStyles.register}>
                                <span>Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
