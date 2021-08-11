import React from 'react'
import { Button } from '@material-ui/core';

const Header = () => {
    return (
        <header>
            <div className="left">
                <div className="hamburger">
                    <Button>Bla</Button>
                </div>
                <div className="logo"></div>
            </div>
            <div className="right"></div>
        </header>
    )
}

export default Header
