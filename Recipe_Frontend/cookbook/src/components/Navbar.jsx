

import React, { useState } from 'react';
import './Navbar.css';
// import localImage from './images/Fazu pic.jpg';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">

            <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="logo">
                <span className="logo-code">Cook</span>
                <span className="logo-morpher">Book</span>
            </div>
            </Link>

            <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
               
                <div className="auth-buttons">
                   {/* <span className="logo-code">Recipes</span>
                   <span className="logo-morpher">About us</span> */}
                   <Link to={'/recipes'}><a href=''>Recipes</a> </Link>
                   <a href=''>About us</a>
                   {/* <a href=''>Tips&Tools</a> */}
                  <Link to={'/favorite'}><i><FavoriteBorderIcon fontSize="large"/></i></Link> 
            
                  <Link to={"/getstarted"} style={{textDecoration:"none"}}><button className='get-started'>GET STARTED</button> </Link> 
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>

        </nav>
    );
}

export default Navbar;