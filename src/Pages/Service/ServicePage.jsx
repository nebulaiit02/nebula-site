import React from "react";
import "./ServicePage.css";

// ====== Data ======
const services = [
  {
    category: "Ed-Tech Solutions",
    title: "QubitronX",
    features: [
      "Interactive Online Courses, Workshops & Training Modules",
      "Personalized Learning Experiences",
      "Corporate Training to Upskill Workforces",
    ],
    button: { text: "Visit Site", link: "#" },
  },
  {
    category: "IT Services",
    title: "IT Services",
    features: [
      "Custom Software Development for Web, Mobile, & Enterprise",
      "Personalized Learning Experiences",
      "Corporate Training to Upskill Workforces",
    ],
    button: { text: "Contact Us", link: "#" },
  },
];

const pricingPlans = [
  {
    plan: "Basic",
    price: "$0",
    duration: "/month",
    desc: "Perfect For Small Teams",
    button: "Start Hiring",
    features: ["3 Projects", "AI Applicant Screening", "AI Recruiter"],
  },
  {
    plan: "Standard",
    price: "$49",
    duration: "/month",
    desc: "Ideal For Growing Startups",
    button: "Get Started",
    features: [
      "10 Projects",
      "AI Screening + Matching",
      "Priority Support",
      "Custom Reports",
    ],
  },
  {
    plan: "Premium",
    price: "$99",
    duration: "/month",
    desc: "Best For Enterprises",
    button: "Go Premium",
    features: [
      "Unlimited Projects",
      "Full AI Recruiter Suite",
      "Dedicated Account Manager",
      "Advanced Analytics",
    ],
  },
];

// ====== Component ======
const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h2>Our Services</h2>
        <p>
          At NebulaIT, we bring together innovation, technology, and education
          to empower individuals and businesses. Our services are designed to
          deliver end-to-end solutions in both EdTech and IT, ensuring growth,
          scalability, and long-term success.
        </p>
      </section>

      {/* Blank Section */}
      <section className="blank-section">blank</section>

      {/* Services Section */}
      <section className="service-section">
        <div className="cards">
          {services.map((service, idx) => (
            <div className="card" key={idx}>
              <h3>{service.category}</h3>
              <h4>{service.title}</h4>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button>{service.button.text}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="pricing-title">Pricing</h2>
        <div className="cards">
          {pricingPlans.map((plan, idx) => (
            <div className="pricing-card" key={idx}>
              <h4>{plan.plan}</h4>
              <p className="price">
                {plan.price}
                <span>{plan.duration}</span>
              </p>
              <p className="desc">{plan.desc}</p>
              <button>{plan.button}</button>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="future-section">
        <h2>Shaping the Future</h2>
        <p>
          At NebulaIT, we don’t just deliver services — we build experiences.
          From scalable EdTech platforms to enterprise-level IT solutions, our
          goal is to make technology work for people, not the other way around.
        </p>
        <p>
          The future of education and technology is digital, inclusive, and
          limitless — and we are here to lead that change.
        </p>
        <p>Together, let’s learn, innovate, and grow.</p>
      </section>
    </div>
  );
};

export default ServicesPage;
