import React from 'react';
import './About.css';

const AboutPage = () => {
  const teamMembers = [
    { name: "Person 1", role: "Role 1" },
    { name: "Person 2", role: "Role 2" },
    { name: "Person 3", role: "Role 3" },
    { name: "Person 4", role: "Role 4" },
    { name: "Person 5", role: "Role 5" },
    { name: "Person 6", role: "Role 6" }
  ];

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
      <section className="creative-minds">
        <h2>Our Creative Minds</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar"></div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

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
      <section className="our-clients">
        <h2>Our Clients</h2>
        
        <div className="clients-grid">
          <div className="client-card">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>wertyuiopasdfghjklzxcvbnm</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
          </div>
          <div className="client-card">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>wertyuiopasdfghjklzxcvbnm</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
          </div>
          <div className="client-card">
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>wertyuiopasdfghjklzxcvbnm</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;