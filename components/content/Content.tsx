/*Imports */

import * as reduxHooks from "../../hooks/reduxHooks"
import { RootState } from '../../store/store'

/*Material components*/

/*Icons*/

/*Import Plugins*/


/*Styles*/
import contentStyles from "../../styles/Global/Content.module.scss"

/*Interfaces */
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
