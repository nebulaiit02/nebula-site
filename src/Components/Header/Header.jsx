import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">

      <div className="nav-left">
        <a href="#" className="active">Home</a>
        <a href="#">About Us</a>
      </div>

  
      <div className="nav-center">
        NEBULA IIT
      </div>

      <div className="nav-right">
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
