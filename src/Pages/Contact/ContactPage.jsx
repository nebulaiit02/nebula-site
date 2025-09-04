import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page"> {/* full-screen background */}
      <div className="contact-card"> {/* centered card visible in middle only */}
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-grid">
          {/* Left Section */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +1 617-588-7207</p>
            <p><strong>Email:</strong> info@quera.com</p>

            <h3>Office Location</h3>
            <p>
              1284 Soldiers Field Road,<br />
              Boston, MA 02135, USA
            </p>

            <div className="map-placeholder" aria-hidden="true"></div>
          </div>

          {/* Right Section */}
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

              <div className="checkbox-row">
                <input type="checkbox" id="subscribe" name="subscribe" />
                <label htmlFor="subscribe">Add me to your mailing list</label>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
