import React from 'react'

import headerStyles from "../../styles/Header.module.scss"

const Header = ({ text }) => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.heading}>
                    {text}
                </div>

            </header>
            <div className={homeStyles.buffer}></div>
        </>

    )
}

export default Header
