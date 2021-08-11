import React, { useState } from 'react'
import headerStyles from "../../styles/Header.module.scss"


const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
            <header className={headerStyles.header}>
                <div className="left">
                    <div className={headerStyles.hamburger} onClick={hamburgerToggle}>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part1}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.horizontal}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part2}`}></div>
                    </div>
                    <div className="logo"></div>
                    <div className="search"></div>
                </div>
                <div className="right">
                    <div className="profile"></div>
                </div>

            </header>
            <div className="sidebar">
               
                
            </div>

        </>

    )
}

export default Header
