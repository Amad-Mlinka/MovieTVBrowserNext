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
                    <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu">
                    <label className={headerStyles.hamburger} onClick={hamburgerToggle}>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part1}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.horizontal}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part2}`}></div>
                    </label>
                    <div className="logo"></div>
                    <div className="search"></div>
                </div>
                <div className="right">
                    <div className="profile"></div>
                </div>

            </header>
            <div className="sidebar">
                <ul className="sidebarInner">
                    <li>Home</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Favourites</li>
                    <li>Recommendations</li>
                </ul>
            </div>

        </>

    )
}

export default Header
