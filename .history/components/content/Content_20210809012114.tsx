import React from 'react'
import contentStyles from "../../styles/Content.module.scss"


const Content = (props) => {
    return (
        <main className={`${contentStyles.main}`}>
            <div className={`${contentStyles.movable} ${props.sidebarOpen ? contentStyles.hamburgerOpen : contentStyles.hamburgerClose}`}></div>
            {props.children}
        </main>
    )
}

export default Content
