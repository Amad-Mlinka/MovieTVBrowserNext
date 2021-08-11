import React from 'react'
import contentStyles from "../../styles/Content.module.scss"
import * as reduxHooks from "../../hooks/reduxHooks"
import { RootState } from '../../store/store'
import ChildrenElementProps from "../../interfaces/childrenInterface"


const Content = ({children}:ChildrenElementProps) => {

    const sidebar:boolean = reduxHooks.useAppSelector((state: RootState) =>state.sidebarReducer.open)
    return (
        <main className={`${contentStyles.main}`}>
            <div className={`${contentStyles.movable} ${sidebar ? contentStyles.hamburgerOpen : contentStyles.hamburgerClose}`}>
                {children}
            </div>

        </main>
    )
}

export default Content
