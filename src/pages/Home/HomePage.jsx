import React from "react";
import "./Home.css";
import TeamMember from "../../Components/TeamMember/TeamMember";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

function HomePage() {
  const services = [
    {
      title: "Web Development",
      name: "Qubitron X",
      desc: "Build responsive and scalable websites tailored to your business needs.",
    },
    {
      title: "EdTech Training",
      name: "Qubitron X",
      desc: "Interactive training programs to empower your team with the latest technologies.",
    },
    {
      title: "Custom IT Solutions",
      name: "Qubitron X",
      desc: "Personalized IT services and solutions for startups and enterprises.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$0/month",
      description: "Perfect For Small Teams",
      features: ["3 Projects", "AI Applicant Screening", "AI Recruiter"],
    },
    {
      name: "Standard",
      price: "$0/month",
      description: "For Growing Teams",
      features: ["10 Projects", "Advanced AI Screening", "Team Collaboration"],
    },
    {
      name: "Premium",
      price: "$0/month",
      description: "For Enterprises",
      features: ["Unlimited Projects", "Full AI Suite", "Dedicated Support"],
    },
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image"></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-name">{service.name}</p>
              <p className="service-desc">{service.desc}</p>
              <button className="visit-btn">Visit Site</button>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View All Services</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="pricing-background-text">Pricing</div>
        <div className="pricing-content">
          <div className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <div className="pricing-card" key={index}>
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">{plan.price}</div>
                <div className="plan-description">{plan.description}</div>
                <button className="plan-button">Start Hiring</button>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src="client-placeholder.jpg" alt="Prince Jha" />
          </div>
          <div className="testimonial-content">
            <div className="stars">★★★★★</div>
            <p className="quote">
              The team’s ability to blend design, strategy, and innovation gave our brand a fresh,
              professional edge that customers noticed instantly.
            </p>
            <p className="client-name">
              Prince Jha <span className="separator">|</span> <span className="client-title">CEO, NebulaITT</span>
            </p>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <TeamMember />
      </section>
    </div>
  );
}

export default HomePage;
