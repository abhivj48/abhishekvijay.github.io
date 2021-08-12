import React from 'react';
import './Nav.css';
import SchoolIcon from '@material-ui/icons/School';
import {NavLink } from 'react-router-dom'



function Nav() {
    return (
        <>
        
        <div className="navBar">
            
            
            <div className="homeIcon">
                
            <NavLink to="/" exact activeClassName="activeMenu"><i className="bi bi-house-fill"></i></NavLink>
            
            </div>
            <div className="about">
           
            <NavLink to="/about" activeClassName="activeMenu"><i className="bi bi-person-fill"></i></NavLink>
            </div>
            <div className="degree">
            
            <NavLink to='/education' activeClassName="activeMenu"><SchoolIcon   className="degree01" /></NavLink>
            </div>
            
            <div className="portfolio">
            
            <NavLink to="/portfolio" activeClassName="activeMenu"><i className="bi bi-code-slash"></i></NavLink>
            </div>
            
            <div className="say">
            
            <NavLink to="/sayhello" activeClassName="activeMenu"><i className="bi bi-chat-fill"></i></NavLink>
            </div>
        </div>
        </>
    )
}



export default Nav;

