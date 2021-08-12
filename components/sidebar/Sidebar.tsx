/*Imports */
import * as reduxHooks from "../../hooks/reduxHooks"
import { RootState } from '../../store/store';

/*Material components*/
import SidebarLink from "./SidebarLink"

/*Icons*/
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import LanguageIcon from '@material-ui/icons/Language';

/*Import Plugins*/

/*Styles*/
import sidebarStyles from "../../styles/Sidebar.module.scss"




const Sidebar = () => {

    const dispatch = reduxHooks.useAppDispatch()
    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)

    const languageDropdown = [
        {
            title: "english",
            link: "bla"
        },
        {
            title: "bosnian",
            link: "blabla"
        }
    ]
    return (
        <div className={`${sidebarStyles.sidebar} ${sidebar ? sidebarStyles.sidebarOpen : ""}`}>

            <div className={sidebarStyles.sidebarMenu}>
                <ul className={`${sidebarStyles.sidebarList}`}>

                    <SidebarLink type="search" />

                    <SidebarLink type="singleLink" text="Home" icon={<HomeIcon />} url="/" />

                    <SidebarLink type="singleLink" text="Movies" icon={<MovieIcon />} url="/movies" />

                    <SidebarLink type="singleLink" text="TV Shows" icon={<TvIcon />} url="/tv" />

                    <SidebarLink type="dropdown" text="Languages" icon={<LanguageIcon />} dropdownLinks={languageDropdown} />

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
