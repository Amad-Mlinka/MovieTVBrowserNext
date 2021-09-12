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
import { localeInterface } from "../../interfaces/localeInterface";


interface propsInterface {
    locale:localeInterface;
}


const Sidebar = ({locale}:propsInterface) => {
    const router = useRouter()
    const url = router.pathname.split("/")[1];

    const dispatch = reduxHooks.useAppDispatch()
    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)

    const languageDropdown = [
        {
            title: locale.eng,
            link: "en"
        },
        {
            title: locale.bos,
            link: "bs"
        }
    ]
    return (
        <div className={`${sidebarStyles.sidebar} ${sidebar ? sidebarStyles.sidebarOpen : ""}`}>

            <div className={sidebarStyles.sidebarMenu}>
                <div className={`${sidebarStyles.sidebarList}`}>
                    <div className={`${sidebarStyles.sidebarListItem} ${url == "search" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="search"  />
                    </div>
                    <div className={`${sidebarStyles.sidebarListItem} ${url == "" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="singleLink" text={locale.home} icon={<HomeIcon />} url="/"  />
                    </div>

                    <div className={`${sidebarStyles.sidebarListItem} ${url == "movies" && sidebarStyles.sidebarListItemActive}`}>
                        <SidebarLink type="singleLink" text={locale.movies} icon={<MovieIcon />} url="/movies"  />
                    </div>

                    <div className={`${sidebarStyles.sidebarListItem}`}>
                        <SidebarLink type="dropdown" text={locale.languages} icon={<LanguageIcon />} dropdownLinks={languageDropdown}  />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sidebar
