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
import sidebarStyles from "../../styles/Navigation/Sidebar.module.scss"
import { useRouter } from 'next/router'




const Sidebar = () => {
    const router = useRouter()
    const url = router.pathname.split("/")[1];
    console.log({ url })

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
                    <div className={`${sidebarStyles.sidebarListItem} ${url == "search" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="search" />
                    </div>
                    <div className={`${sidebarStyles.sidebarListItem} ${url == "" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="singleLink" text="Home" icon={<HomeIcon />} url="/" />
                    </div>

                    <div className={`${sidebarStyles.sidebarListItem} ${url == "movies" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="singleLink" text="Movies" icon={<MovieIcon />} url="/movies" />
                    </div>

                    <div className={`${sidebarStyles.sidebarListItem} ${url == "tv" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="singleLink" text="TV Shows" icon={<TvIcon />} url="/tv" />
                    </div>

                    <div className={`${sidebarStyles.sidebarListItem}`}>
                        <SidebarLink type="dropdown" text="Languages" icon={<LanguageIcon />} dropdownLinks={languageDropdown} />
                    </div>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar
