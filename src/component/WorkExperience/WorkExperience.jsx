import React, { useEffect } from "react";
import AOS from "aos";
import "./WorkExperience.css";

const WorkExperience = () => {
  const jobs = [
    {
      title: "Junior Developer",
      company: "Bally's Skövde",
      startDate: "December 2022",
      endDate: "January 2023",
    },
    {
      title: "Junior Developer",
      company: "Bally's Skövde",
      startDate: "June 2022",
      endDate: "July 2022",
    },
    {
      title: "Full Stack Developer",
      company: "Integrify Remote",
      startDate: "Jan 2022",
      endDate: "June 2022",
    },
    {
      title: "Truck Driver",
      company: "Mathem",
      startDate: "June 2019",
      endDate: "April 2022",
    },
    {
      title: "Fitter",
      company: "Volvo Cars",
      startDate: "August 2017",
      endDate: "June 2018",
    },
    {
      title: "Waiter",
      company: "Scandic Hotels",
      startDate: "May 2016",
      endDate: "June 2018",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="workexperience" className="work-experience-section">
      <h2
        className="work-experience-title"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Work Experience
      </h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <TimelineItem key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, description, startDate, endDate }) => {
  return (
    <>
      <div className="timeline-item in-view" data-aos="flip-right">
        <div className="timeline-item-content">
          <span className="tag" style={{ background: "#ff9800" }}>
            {startDate} - {endDate}
          </span>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <span className="circle" />
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
