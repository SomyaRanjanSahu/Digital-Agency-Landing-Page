import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/" style={{color: 'orange'}}>ONIX<span style={{color: 'black'}}>LAB</span></a>
      </div>
      <ul className="navbar__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
      <div className="navbar__signup">
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;