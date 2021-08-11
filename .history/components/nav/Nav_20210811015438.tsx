import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';
import PropTypes from "prop-types";


const Nav = ({sidebarOpen, setSidebarOpen}) => {
    
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
