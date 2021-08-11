import React from 'react'

import headerStyles from "../../styles/Header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.heading}>
                Home
            </div>

        </header>
    )
}

export default Header
