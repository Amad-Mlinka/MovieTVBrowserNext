/*Imports */
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import * as reduxHooks from "../../hooks/reduxHooks"
import { RootState } from '../../store/store';
import Search from './Search';

/*Material components*/


/*Icons*/
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Navigation/Sidebar.module.scss"
import { localeInterface } from '../../interfaces/localeInterface';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import bs from '../../locales/bs';
import { changeOpen } from '../../store/sidebarSlice';


interface Dropdown {
    title: string,
    link: string,
}



interface SidebarLinkProps {
    type: string,
    url?: string,
    text?: string,
    icon?: JSX.Element,
    dropdownLinks?: Dropdown[],
}



const SidebarLink = ({ type, url, text, icon, dropdownLinks }: SidebarLinkProps) => {
    const router = useRouter();
    const { locale } = router;
    const t: localeInterface = locale === "en" ? en : bs

    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)
    const dispatch = reduxHooks.useAppDispatch()


    const types = ["search", "singleLink", "dropdown"]
    const [dropdownOpen, setDropdownOpen] = useState(false);

    
    const sidebarToggle = () => {
        dispatch(changeOpen())
    }


    return (
        <>
            {
                type === types[0] ?
                    <Search locale={t} />
                    :
                    type === types[1] ?
                        <Link href={url ? url : "/"}>
                            <div className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }}>
                                <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`}>
                                    {icon}
                                    <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                    <div className={sidebarStyles.singleLinkSpacer}><KeyboardArrowDownIcon /></div>
                                </div>
                            </div>
                        </Link>

                        :
                        <div className={`${sidebarStyles.sidebarLink}  ${sidebar ? sidebarStyles.sidebarLinkOpen : ""}`} style={{ margin: '10px auto' }} onClick={() => {
                            if (sidebar) setDropdownOpen(!dropdownOpen)
                        }
                        }>
                            <div className={`${sidebarStyles.sidebarLinkMain} ${sidebar ? sidebarStyles.sidebarLinkMainOpen : ""}`} onClick={() => {
                                !sidebar ? sidebarToggle() : ""
                            }}>
                                {icon}
                                <span className={`${sidebarStyles.sidebarText}  ${sidebar ? sidebarStyles.sidebarTextActive : ""}`}>{text}</span>
                                <KeyboardArrowDownIcon />
                            </div>
                            <div className={`${sidebarStyles.sidebarDropdown} ${dropdownOpen ? sidebarStyles.open : ""}`} >
                                <ul className={`${sidebarStyles.sidebarDropdownLinks}  `}>
                                    {dropdownLinks &&
                                        (dropdownLinks).map((link) => (
                                            <li onClick={() => {
                                                const locale = link.link
                                                router.push(router.pathname, router.asPath, { locale });
                                            }} value={link.link} className={sidebarStyles.sidebarDropdownLink} key={link.title}>{link.title}</li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>
            }
        </>


    )
}

export default SidebarLink
