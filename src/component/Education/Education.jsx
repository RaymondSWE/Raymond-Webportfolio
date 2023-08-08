import React, { useState, useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also load AOS styles here

const Education = () => {
  const education = [
    {
      school: "University Skövde",
      degree: "Bachelor's in Computer Science",
      startDate: "August 2021",
      endDate: "May 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      school: "University Borås",
      degree: "Bachelor's in Economics (60 credits)",
      startDate: "August 2020",
      endDate: "May 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="education" className="education-section">
      <h2 className="education-section-title" data-aos="zoom-out-down">
        Education
      </h2>
      <div className="education-section-timeline">
        {education.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ school, degree, description, startDate, endDate }) => {
  return (
    <div className="timeline-item in-view" data-aos="flip-right">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: "#ff9800" }}>
          {startDate} - {endDate}
        </span>
        <h3>{school}</h3>
        <p>{degree}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Education;
