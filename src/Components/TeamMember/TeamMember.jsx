import React from 'react'
import './TeamMember.css'

export default function TeamMember() {

    const teamMembers = [
        { name: "Person 1", role: "Role 1" },
        { name: "Person 2", role: "Role 2" },
        { name: "Person 3", role: "Role 3" },
        { name: "Person 4", role: "Role 4" },
        { name: "Person 5", role: "Role 5" },
        { name: "Person 6", role: "Role 6" }
    ];
    return (
        <>
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
        </>
    )
}
