import React from 'react'
import headerStyles from "../../styles/Header.module.scss"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left">
                    <div className="hamburger"></div>
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
