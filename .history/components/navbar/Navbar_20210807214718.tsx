/*Imports */
import React from 'react'

/*Material components*/
import Avatar from '@material-ui/core/Avatar';

/*Icons*/

/*Import Plugins*/


/*Styles*/
import navStyles from "../../styles/Navbar.module.scss"



const Navbar = (props) => {
    return (
        <header className={navStyles.header}>
        <div className={navStyles.left}>
            <div className={navStyles.hamburgerLogo}>
                <div className={navStyles.hamburger} onClick={()=>{
                        props.setSidebarOpen(!props.sidebarOpen);
                        props.setSidebarLock(!props.sidebarLock);

                    }}>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${props.sidebarOpen ? navStyles.part1Active : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.horizontal} ${props.sidebarOpen ? navStyles.horizontalActive : ""}`}></div>
                    <div className={`${navStyles.spinner} ${navStyles.diagonal} ${props.sidebarOpen ? navStyles.part2Active : ""}`}></div>
                </div>
                <div data-end="X" className={navStyles.logo}>
                    <span>Movie</span>
                </div>
            </div>


        </div>
        <div className={navStyles.right}>
            <div className={navStyles.profile}>
                <div className={`${navStyles.loggedIn} ${navStyles.dNone} `}>

                    <Avatar className={navStyles.avatar} alt="Amad Mlinaric"> AM </Avatar>
                </div>
                <div className={`${navStyles.notLoggedIn} `}>
                    <div className={navStyles.loginRegister}>
                        <div className={navStyles.login}>
                            <span>Login</span>
                        </div>
                        <span>/</span>
                        <div className={navStyles.register}>
                            <span>Register</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
    )
}
export const getStaticProps = async() => {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+process.env.apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    const data= await res.json();
    console.log(data)
    return {
        props:{ movies:data}
    }
}

export default Navbar
