import React from "react";
import "./Home.css";

function HomePage() {
  return (
    <div className="home-wrapper">
     
      <div className="hero">
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
      </div>

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

      <section className="team">
        <h2>Our Creative Minds</h2>
        <p>
          Creative minds behind professional websites that boost your brand.
        </p>
        <div className="team-members">
          <div className="member">Person 1</div>
          <div className="member">Person 2</div>
          <div className="member">Person 3</div>
          <div className="member">Person 4</div>
          <div className="member">Person 5</div>
          <div className="member">Person 6</div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
