import React from 'react'

import headerStyles from "../../styles/Header.module.scss"

interface headerProps{
    text:string
}

const Header = ({ text }:headerProps) => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.heading}>
                    {text}
                </div>

            </header>
            <div className={headerStyles.buffer}></div>
        </>

    )
}

export default Header
