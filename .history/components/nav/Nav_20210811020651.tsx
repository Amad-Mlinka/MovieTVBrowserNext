import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';
import PropTypes from "prop-types";

interface NavProps {
    sidebarOpen:boolean,
    setSidebarOpen:Function
 }


const Nav = ({sidebarOpen, setSidebarOpen}: NavProps) => {

    return (
        <>
            <Navbar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        </>
    )
}

Nav.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
    setSidebarOpen: PropTypes.func.isRequired,
  };

export default Nav
