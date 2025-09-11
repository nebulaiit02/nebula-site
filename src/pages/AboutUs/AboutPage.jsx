import React from 'react';
import './About.css';
import TeamMember from '../../Components/TeamMember/TeamMember';

const AboutPage = () => {


  const timelineProjects = [
    { phase: "Person 1" },
    { phase: "Person 2" },
    { phase: "Person 3" },
    { phase: "Person 4" },
    { phase: "Person 5" }
  ];

  const awards = [
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef",
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef",
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef"
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <div className="header-content">
          <h1 className="main-title">
            asdfgsdfgdsdbfhdfhfdhdjfdhfdjfdfnfdhfndf
          </h1>
          <h2 className="sub-title">
            fhurfngrsfgdsgdegsdgsdgsdgsdgsdgsdgsd
          </h2>
        </div>
        
        <div className="about-section">
          <h3>About</h3>
          <h3>Section</h3>
          <div className="about-text">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>wertyuiopasdfghjklzxcvbnm</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>
      </header>

      {/* Our Creative Minds Section */}
      <TeamMember/>

      {/* Project Timeline Section */}
      <section className="project-timeline">
        <h2>Project Timeline</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineProjects.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{item.phase}</h4>
                <p>{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards">
        <h2>Awards</h2>
        
        <div className="awards-list">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-icon"></div>
              <p>{award}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="clients-section">
      <div className="clients-content">
        <h2 className="clients-title">Our Clients</h2>

        <p className="clients-text">
          We’re just starting our journey and don’t have clients to showcase yet —
          but our vision is clear and we’re ready to take on exciting projects.
        </p>

        <blockquote className="clients-quote">
          “To empower startups, small businesses, and learners through technology.”
        </blockquote>

        <p className="clients-highlight">
          ✨ We’d love to make <strong>you our very first client</strong>.  
          Let’s turn your idea into reality!
        </p>

        <div className="clients-cta">
          <a href="#contact" className="cta-btn primary-btn">
            🚀 Start Your Project
          </a>
          <a href="#contact" className="cta-btn secondary-btn">
            ⭐ Be Our First Client
          </a>
        </div>
      </div>
    
      </section>
    </div>
  );
};

export default AboutPage;