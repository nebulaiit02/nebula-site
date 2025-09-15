import React from "react";
import "./ServicesSection.css";
import { FaLaptopCode, FaBullhorn, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Building responsive, scalable, and future-ready websites.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Boosting your brand’s online presence with smart campaigns.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "E-Learning",
    desc: "Offering IT courses designed for students and professionals.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    desc: "Creating modern and creative designs for digital brands.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-wrapper">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
