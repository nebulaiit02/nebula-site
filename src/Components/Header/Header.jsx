import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCog, FaEnvelope } from "react-icons/fa";
import "./Header.css";

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

  const activeTab =
    tabs.find((tab) => tab.path === location.pathname)?.name || "Home";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Desktop Headers (hidden on mobile) ===== */}
      <div className="desktop-header">
        {!isScrolled && (
          <header className="navbar-wrapper">
            <div className="nav-logo">
              <span>NEBULA</span>
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
        )}

        {isScrolled && (
          <div
            className={`compact-navbar ${isHovered ? "expanded" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="compact-logo">
              <span>NEBULA</span>
            </div>
            <div className="compact-menu">
              {isHovered ? (
                tabs.map((tab) => (
                  <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={({ isActive }) =>
                      isActive ? "compact-link active" : "compact-link"
                    }
                  >
                    {tab.name}
                  </NavLink>
                ))
              ) : (
                <span className="compact-link active">{activeTab}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ===== Mobile Bottom Navbar ===== */}
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
