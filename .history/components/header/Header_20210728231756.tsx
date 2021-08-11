import React, { useState } from 'react'
import headerStyles from "../../styles/Header.module.scss"
import Image from "next/image"
import logo from "../../public/Logo2/logo_transparent.png"


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
                    <div className={headerStyles.logo}>
                        <Image src={logo} alt="Logo" width="60" height="60"/>
                    </div>
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
