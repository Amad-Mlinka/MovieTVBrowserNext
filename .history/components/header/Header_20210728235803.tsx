import React, { useState } from 'react'
import headerStyles from "../../styles/Header.module.scss"
import Image from "next/image"
import logo from "../../public/Logo1/logo_transparent.png"


const Header = () => {
    const [hamburger, setHamburger] = useState(false)
    const hamburgerToggle = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.left}>
                    <div className="hamburgerLogo">
                        <div className={headerStyles.hamburger} onClick={hamburgerToggle}>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part1}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.horizontal}`}></div>
                            <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part2}`}></div>
                        </div>
                        <div data-end="X" className={headerStyles.logo}>
                            Movie
                        </div>
                    </div>

                    <div className="search">
                        <input type="search" name="searchBar" className={headerStyles.searchBar} />
                    </div>
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
