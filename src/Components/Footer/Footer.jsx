import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Top Section */}
      <footer className="footer-container">
        {/* Left Content */}
        <div className="footer-left">
          <h2>Your business needs an amazing website.</h2>
          <p className="subtitle">We make it easy for you.</p>

          <p className="description">
            <span role="img" aria-label="phone">📞</span> Get a free consultation and take your business
            to the next level.
          </p>

          <button className="cta-btn">Let's talk today!</button>
        </div>

        {/* Right Placeholder Box */}
        <div className="footer-right">
          <div className="image-box"></div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="footer">
        {/* Left Card */}
        <div className="footer-card left-card">
          <h2>
            Every<br />moment<br />matters.
          </h2>
          <p className="brand">© Givingli</p>
          <p className="copyright">
            © 2023 All Rights Reserved, Givingli Inc.
          </p>
        </div>

        {/* Support Card */}
        <div className="footer-card support-card">
          <h3>Support</h3>
          <p>
            Have questions? <a href="#">Get in touch</a> or check out our{" "}
            <a href="#">Help Center</a>.
          </p>
          <p>
            You can also text our support team at{" "}
            <a href="tel:3107735384">(310) 773-5384</a> or email us at{" "}
            <a href="mailto:help@givingli.com">help@givingli.com</a>
          </p>
        </div>

        {/* Terms Card */}
        <div className="footer-card terms-card">
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Social Card */}
        <div className="footer-card social-card">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      <div className="nebula">N E B U L A</div>
    </div>
  );
};

export default Footer;
