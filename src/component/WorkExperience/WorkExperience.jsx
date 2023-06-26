import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WorkExperience.css';

const WorkExperience = () => {
  const jobs = [
    {
      title: 'Junior Developer',
      company: "Bally's Skövde",
      startDate: 'December 2022',
      endDate: 'January 2023',
    },
    {
      title: 'Junior Developer',
      company: "Bally's Skövde",
      startDate: 'June 2023',
      endDate: 'July 2023',
    },
    {
      title: 'Full Stack Developer',
      company: "Integrify Remote",
      startDate: 'Jan 2022',
      endDate: 'June 2022',
    },
    {
      title: 'Truck Driver',
      company: "Mathem",
      startDate: 'June 2019',
      endDate: 'April 2022',
    },
    {
      title: 'Fitter',
      company: "Volvo Cars",
      startDate: 'August 2017',
      endDate: 'June 2018',
    },
    {
      title: 'Waiter',
      company: "Scandic Hotels",
      startDate: 'May 2016',
      endDate: 'June 2019',
    },
  ];

  return (
    <div className="work-experience-section">
      <h2 className='work-experience-title'>Work Experience</h2>
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