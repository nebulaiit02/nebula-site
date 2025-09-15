import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./ContactPage.css";

function ContactPage() {

  const contactItems = [
    {
      id: 1,
      icon: <LocalPhoneIcon />,
      title: "Phone Number",
      subtitle: "Phone: +1 617-588-7207",
    },
    {
      id: 2,
      icon: <EmailIcon />,
      title: "Email Address",
      subtitle: "hello@nebulaiit.com",
    },
    {
      id: 3,
      icon: <WhatsAppIcon />,
      title: "Whatsapp",
      subtitle: "Phone: +91 1234567890",
    },
    {
      id: 4,
      icon: <LocationOnIcon />,
      title: "Our Office",
      subtitle: "1284 Soldiers Field Road, Boston, MA 02135, USA",
    },
  ];
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
            <div className="contact-info-card">
              {contactItems.map((item) => (
                <div className="info-container" key={item.id}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="map-placeholder" aria-hidden="true"></div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ContactPage;
