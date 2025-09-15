import React from 'react';
import './About.css';
import TeamMember from '../../Components/TeamMember/TeamMember';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';

const AboutPage = () => {


  const timelineProjects = [
    { phase: "Person 1" },
    { phase: "Person 2" },
    { phase: "Person 3" },
    { phase: "Person 4" },
    { phase: "Person 5" }
  ];

  return (
    <div className="about-page">
   
      <ServicesSection/>
      <TeamMember/>

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


    </div>
  );
};

export default AboutPage;