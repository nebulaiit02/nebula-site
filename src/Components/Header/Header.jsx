import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <header className="navbar-wrapper">
      {/* Logo */}
      <div className="nav-logo">NEBULA IIT</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <div className="nav-menu">
          <Link to="/" className="nav-link active" onClick={handleLinkClick}>Home</Link>
          <Link to="/service-us" className="nav-link" onClick={handleLinkClick}>Services</Link>
          <Link to="/product-page" className="nav-link" onClick={handleLinkClick}>Products</Link>
          <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>About Us</Link>
          <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>Contact Us</Link> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
