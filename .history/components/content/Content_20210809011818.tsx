import React from 'react'
import contentStyles from "../../styles/Content.module.scss"


const Content = (props) => {
    return (
        <main className={`${contentStyles.main} ${props.sidebarOpen ? contentStyles.hamburgerOpen : contentStyles.hamburgerClose}`}>
            
        </main>
    )
}

export default Content
