import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WorkExperience.css';

const WorkExperience = () => {
  const jobs = [
    {
      title: 'Junior Developer',
      company: "Bally's Skövde",
      startDate: 'Dec 2022',
      endDate: 'Jan 2023',
    },
    {
      title: 'Junior Developer',
      company: "Bally's Skövde",
      startDate: 'Jun 2023',
      endDate: 'Jul 2023',
    },
    {
      title: 'Full Stack Developer',
      company: "Integrify Remote",
      startDate: 'Jan 2022',
      endDate: 'Jun 2022',
    },
  ];

  return (
    <div className="work-experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <TimelineItem key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, description, startDate, endDate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <div ref={ref} className={`timeline-item ${inView ? 'in-view' : ''}`}>
      <div className="timeline-item-content">
        <span className="tag" style={{ background: '#ff9800' }}>{startDate} - {endDate}</span>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <span className="circle" />
      </div>
    </div>
    </>
  );
};

export default WorkExperience;