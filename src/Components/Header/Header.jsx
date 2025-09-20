import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCog, FaEnvelope } from "react-icons/fa";
import "./Header.css";
import logo from "/src/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/", icon: <FaHome className="icon" /> },
    { name: "About Us", path: "/about-us", icon: <FaInfoCircle className="icon" /> },
    { name: "Services", path: "/service", icon: <FaCog className="icon" /> },
    { name: "Contact Us", path: "/contact-us", icon: <FaEnvelope className="icon" /> },
  ];

  const activeTab = tabs.find((tab) => tab.path === location.pathname) || tabs[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Full Header */}
      <header className={`navbar-wrapper ${isScrolled ? "hide" : ""}`}>
        <div className="nav-logo">
          <img src={logo} alt="Nebula Logo" className="nav-logo-img" />
        </div>
        <nav className="nav-links">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Compact Floating Header */}
      <div
        className={`compact-navbar ${isScrolled ? "show" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="compact-logo">NEBULA</div>
        <div className={`compact-menu ${isHovered ? "open" : ""}`}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                isActive ? "compact-link active" : "compact-link"
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
        {!isHovered && (
          <NavLink to={activeTab.path} className="compact-link active">
            {activeTab.name}
          </NavLink>
        )}
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="mobile-navbar">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {tab.icon}
            <span>{tab.name}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Header;
