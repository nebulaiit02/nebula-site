import React from "react";
import "./Home.css";
import TeamMember from "../../Components/TeamMember/TeamMember";
import HeroSection from "../../Components/HeroSection/HeroSection";

function HomePage() {
  return (
    <div className="home-wrapper">
     
      {/* <div className="hero">
        <div className="hero-content">
          <h1>
            Amazing Websites,
            <br />
            Hassle Free
          </h1>
          <p>Custom Websites To Grow Your Business</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="tech-icons">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            alt="HTML5"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="JAVA"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            alt="CSS3"
          />
        </div>
      </div> */}

      <HeroSection/>

      <section className="pricing">
        <h2>Flexible Pricing For All Budgets</h2>
        <div className="pricing-cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <p className="note">
          Our plans are made for you!
          <br />
          Whether you’re just starting or need a full project.
        </p>
      </section>

      <section className="testimonial">
        <div className="testimonial-box"></div>
        <div className="testimonial-text">
          <h3>★★★★★</h3>
          <p>
            “We absolutely loved our website! It looks professional and modern,
            and the support team was amazing. Highly recommend!”
          </p>
          <p className="author">- Happy Client</p>
        </div>
      </section>

      <TeamMember/>

    </div>
  );
}

export default HomePage;
