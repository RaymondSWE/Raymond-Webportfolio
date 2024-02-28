import React, { useState, useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { TimelineItem } from "../../ui/TimelineItem";
import { EducationData } from "../../data/EducationData";

const Education = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="education" className="education-section">
      <h2 className="education-section-title" data-aos="zoom-out-down">
        Education
      </h2>
      <div className="education-section-timeline">
        {EducationData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};


export default Education;
