import React, { useState, useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Skovde from "../../img/logo/UniversitySkovde.png";
import Boras from "../../img/logo/BorasLogo.jpg";
import { TimelineItem } from "../../ui/TimelineItem";

const Education = () => {
  const education = [
    {
      title: "University Skövde",
      subtitle: "Bachelor's in Computer Science",
      startDate: "August 2021",
      endDate: "May 2024",
      description: "Specialization in System Development",
      logo: Skovde,
    },
    {
      title: "University Borås",
      subtitle: "Bachelor's in Economics (30 credits)",
      startDate: "August 2020",
      endDate: "Jan 2021",
      description: "Drop out after first term",
      logo: Boras,
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


export default Education;
