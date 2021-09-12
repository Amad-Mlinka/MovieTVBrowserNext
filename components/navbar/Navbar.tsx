/*Imports */
import * as reduxHooks from "../../hooks/reduxHooks"
import { changeOpen } from "../../store/sidebarSlice"
import { RootState } from '../../store/store';


/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/


/*Styles*/
import navStyles from "../../styles/Navigation/Navbar.module.scss"
import Link from 'next/link';
import { localeInterface } from "../../interfaces/localeInterface";

interface propsInterface {
    locale:localeInterface;
}


const Navbar = ({locale}:propsInterface) => {
    const dispatch = reduxHooks.useAppDispatch()
    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)



    const sidebarToggle = () => {
        dispatch(changeOpen())
    }
    return (
        <header className={navStyles.header}>
            <div className={navStyles.left}>
                <div className={navStyles.hamburgerLogo}>
                    <div className={navStyles.hamburger} onClick={() => {
                        sidebarToggle();

                    }}>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part1Active : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.horizontal} ${sidebar ? navStyles.horizontalActive : ""}`}></div>
                        <div className={`${navStyles.spinner} ${navStyles.diagonal} ${sidebar ? navStyles.part2Active : ""}`}></div>
                    </div>
                    <Link href="/">
                        <div data-end="X" className={navStyles.logo}>
                            <span>Movie</span>
                        </div>
                    </Link>

                </div>


            </div>

        </header>
    )
}

export default Navbar
