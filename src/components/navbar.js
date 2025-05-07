import React, { useState } from 'react';
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed-navbar-container">
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <h2>Life+</h2>
          </div>

          {/* Navbar Links */}
          <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <span className="nav-link">Request Ambulance</span>
            <span className="nav-link">Track Ambulance</span>
            <button className="login-btn">Login / Register</button>
          </div>

          {/* Hamburger Icon */}
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
