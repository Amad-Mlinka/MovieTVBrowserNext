/*Imports */

/*Material components*/

/*Icons*/

/*Import Plugins*/

/*Styles*/
import headerStyles from "../../styles/Global/Header.module.scss"

/*Interfaces */



interface headerProps {
    text: string
}

const Header = ({ text }: headerProps) => {
    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.heading}>
                    {text}
                </div>

            </header>
            <div className={headerStyles.buffer}></div>
        </>

    )
}

export default Header
