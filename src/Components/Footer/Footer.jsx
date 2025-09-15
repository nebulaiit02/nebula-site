import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer-container">
        <div className="footer-left">
          <h2>Let’s Build Something Amazing Together!</h2>
          <p className="subtitle">We’re just starting our journey, and we’d love to make you our very first client.
            Get a free consultation and let’s bring your idea to life!!
          </p>

          <p className="description">
            <span role="img" aria-label="phone">📞</span> Get a free consultation and take your business
            to the next level.
          </p>

          <div className="clients-cta">
            <Link href="#contact" className="cta-btn primary-btn">
              🚀 Start Your Project
            </Link>
            <Link href="#contact" className="cta-btn secondary-btn">
              ⭐ Be Our First Client
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <div className="image-box"></div>
        </div>
      </footer>

      <div className="footer-body">
        <div className="footer-card left-card">
          <h2>
            Every moment matters.
          </h2>
          <p className="brand">@ Nebula</p>
          <p className="copyright">
            © 2023 All Rights Reserved, Givingli Inc.
          </p>
        </div>

        <div className="center-card">
          <div className="footer-card support-card">
            <h3>Support</h3>
            <p>
              Have questions? <Link to="/contact-us">Get in touch</Link>
            </p>

            <p>You can also text our support team at 1234567890 or email us at nebula23@gamil.com</p>

          </div>
          <div className="footer-card terms-card">
            <Link to="#">Terms of use</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Card */}
        <div className="footer-card social-card">
          <h3>Social</h3>
          <div className="social-icons">
            <Link to="#"><FaInstagram /></Link>
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaXTwitter /></Link>
          </div>
        </div>
      </div>

      <div className="nebula">NEBULA</div>
    </div>
  );
};

export default Footer;
