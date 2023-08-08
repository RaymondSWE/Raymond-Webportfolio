import React, { useEffect } from "react";
import AOS from "aos";
import "./WorkExperience.css";
import Ballys from "../../img/logo/Ballys.png";
import Integrify from "../../img/logo/Integrify.jpeg";
import Mathem from "../../img/logo/Mathem.png";
import Volvo from "../../img/logo/Volvo.jpg";
import Scandic from "../../img/logo/Scandic.png";


const WorkExperience = () => {
  const jobs = [
    {
      title: "Junior Developer",
      company: "Bally's Skövde",
      startDate: "December 2022",
      endDate: "January 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Ballys
    },
    {
      title: "Junior Developer",
      company: "Bally's Skövde",
      startDate: "June 2022",
      endDate: "July 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Ballys
    },
    {
      title: "Full Stack Developer",
      company: "Integrify Remote",
      startDate: "Jan 2022",
      endDate: "June 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Integrify

    },
    {
      title: "Truck Driver",
      company: "Mathem",
      startDate: "June 2019",
      endDate: "April 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Mathem

    },
    {
      title: "Fitter",
      company: "Volvo Cars",
      startDate: "August 2017",
      endDate: "June 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Volvo

    },
    {
      title: "Waiter",
      company: "Scandic Hotels",
      startDate: "May 2016",
      endDate: "June 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Scandic
    },
  ];
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
        {jobs.map((job, index) => (
          <TimelineItem key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, description, startDate, endDate, logo }) => {
  return (
    <>
      <div className="timeline-item in-view" data-aos="flip-right">
        <img src={logo} alt={company} className="job-logo" />
        <div className="timeline-item-content">
          <span className="tag" style={{ background: "#ff9800" }}>
            {startDate} - {endDate}
          </span>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;