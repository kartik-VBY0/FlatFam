import React from 'react'
import Template3 from '../assets/Template 31.png';
import {Link} from "react-router-dom";
import '../styles/header.css';
import Listing from '../pages/Listing';

function Header() {
  return (
    <header>
      
      <div className="navbar-left" >        
        <div className='logo'>
          <a href='/'><img height="80px" src={Template3} alt="logo" /></a>
        </div>
      </div>
      <div className='navbar-center'>
        <p><span>FLAT</span>FAM</p>
      </div>
      
      <div className="navbar-right">
      <Link to="/Listing"><button >List Your Property</button></Link>
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </header>
  )
}

export default Header;
