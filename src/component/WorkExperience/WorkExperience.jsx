import React, { useEffect, useState } from "react";
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
      description: `• Appointed to pair program with other developers, learning the registration and 
 onboarding processes for newly registered players.
• Managed player security, handling inquiries from customers encountering  bugs.
• Expanded skillset by learning new technologies and working methodology  such as 
Dynatrace, Grafana/Prometheus, Jira, SCRUM meetings, BDD, and  TDD tests.
• Developed excellent communication and problem-solving skills through  hands-on 
experience in player management.`,
      logo: Ballys,
    },
    {
      title: "Junior Developer",
      company: "Bally's Skövde",
      startDate: "June 2022",
      endDate: "July 2022",
      description: `• Collaborated with a team to develop a massage application for a company's 
 employees.
• Designed the database, identified software requirements, and implemented 
 backend logic
• Utilized MySQL, React, Material UI, and Spring for various  development tasks.
• Gained valuable skills in teamwork and problem solving.`,
      logo: Ballys,
    },
    {
      title: "Full Stack Developer",
      company: "Integrify Remote",
      startDate: "Jan 2022",
      endDate: "June 2022",
      description: `• Completed a six-month bootcamp with a comprehensive curriculum focused  on 
the latest technologies and industry best practices.
• Gained expertise in JavaScript, React.js, TypeScript, Node.js, and Amazon Web 
 Services.
• Developed practical skills by working on real-world projects throughout the 
 bootcamp.`,
      logo: Integrify,
    },
    {
      title: "Truck Driver",
      company: "Mathem",
      startDate: "June 2019",
      endDate: "April 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Mathem,
    },
    {
      title: "Assembler",
      company: "Volvo Cars",
      startDate: "August 2017",
      endDate: "June 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Volvo,
    },
    {
      title: "Waiter",
      company: "Scandic Hotels",
      startDate: "May 2016",
      endDate: "June 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      logo: Scandic,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleReadMore = (description) => {
    setModalContent(description);
    setModalOpen(true);
  };

  const TimelineItem = ({
    title,
    company,
    description,
    startDate,
    endDate,
    logo,
  }) => {
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
            {/* <button onClick={() => handleReadMore(description)}>Read More</button> */}
          </div>
        </div>
      </>
    );
  };

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
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          Close
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default WorkExperience;
