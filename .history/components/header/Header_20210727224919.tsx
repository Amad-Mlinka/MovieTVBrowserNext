import React from 'react'
import headerStyles from "../../styles/Header.module.scss"

const Header = () => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className="left">
                    <div className={headerStyles.hamburger}>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part_1}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.horizontal}`}></div>
                        <div className={`${headerStyles.spinner} ${headerStyles.diagonal} ${headerStyles.part_2}`}></div>
                    </div>
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
