import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="fixed-navbar-container">
      <nav className="navbar navbar-expand-lg border-bottom navbar-light mb-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Navbar Links on the right */}
          <div className="navbar-links d-flex align-items-center gap-4">
            <span className="nav-link">Request Ambulance</span>
            <span className="nav-link">Track Ambulance</span>
            <span className="nav-link">Login</span>
            <span className="nav-link">SignIn</span>
            <span className="nav-link">SignIn</span>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
