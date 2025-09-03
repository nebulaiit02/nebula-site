import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">

      <div className="nav-left">
        <Link to="/Home-Page" className="nav-link active">Home</Link>
        <Link to="/" className="nav-link">About Us</Link>
      </div>

  
      <div className="nav-center">
        NEBULA IIT
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link ">Services</a>
        <Link to="/Contact-Page" className="nav-link ">Contact Us</Link>
        <Link to="/product-page" className="nav-link ">Products</Link>
      </div>

   
    </header>
  );
};

export default Header;
