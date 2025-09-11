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