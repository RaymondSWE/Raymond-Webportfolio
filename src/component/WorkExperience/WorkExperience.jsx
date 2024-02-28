import React, { useEffect } from "react";
import AOS from "aos";
import "./WorkExperience.css";
import { WorkExperienceData } from "../../data/WorkExperienceData";
import { TimelineItem } from "../../ui/TimelineItem"; 

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="workexperience" className="work-experience-section">
      <h2 className="work-experience-title" data-aos="zoom-out-down">
        Work Experience
      </h2>
      <div className="timeline">
        {WorkExperienceData.map((job) => (
          <TimelineItem
            title={job.title}
            subtitle={job.company} 
            startDate={job.startDate}
            endDate={job.endDate}
            logo={job.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
