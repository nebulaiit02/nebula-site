import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page"> 
      <div className="contact-card"> 
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-grid">
          <div className="contact-form">
            <h2>Ask us anything</h2>
            <form>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>

              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="How can we help you ?" rows="6"></textarea>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-container">
              <p><LocalPhoneIcon/></p>
              <h3>Phone Number</h3>
              <p>Phone: +1 617-588-7207</p>
            </div>

            <div className="map-placeholder" aria-hidden="true"></div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
