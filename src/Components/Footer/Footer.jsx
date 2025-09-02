import React from "react";
import "./Footer.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Join our newsletter to keep up to date with us!</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Type your e-mail address here" />
          <button>Send</button>
        </div>
      </div>

      <hr />

      <div className="footer-main">
        <div className="footer-logo">NEBULA IIT</div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-info">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <p>© 2023 NebulaIIT</p>
        </div>
        <div className="footer-social">
          <FaLinkedin />
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>


    </footer>
  );
};

export default Footer;
