

import React, { useState } from 'react';
import './Navbar.css';
// import localImage from './images/Fazu pic.jpg';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { userSignout } from '../redux/authReducer/action';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const auth=useSelector((store)=>store.authReducer.isAuth)
    console.log("auth",auth)

const dispatch=useDispatch()
const navigate=useNavigate()

    const handelSignout=()=>{
        dispatch(userSignout())
        navigate("/")
    }

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
                  
                   <Link to={'/recipes'}><a href=''>Recipes</a> </Link>
                   <a>About us</a>
            
                  <Link to={'/favorite'}><i><FavoriteBorderIcon fontSize="large"/></i></Link> 
            
            {auth ? (
                <button onClick={handelSignout} className='get-started'>
                Signout
            </button> 
            ) : (
                <button className='get-started'>
                     <Link to={"/getstarted"} style={{textDecoration:"none"}}>GET STARTED </Link> 
                 </button> 
            )}
                  
                
                  
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>

        </nav>
    );
}

export default Navbar;