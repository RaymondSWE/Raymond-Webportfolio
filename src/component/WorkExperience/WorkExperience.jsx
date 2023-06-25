import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WorkExperience.css';

const WorkExperience = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'Company A',
      description: 'Job description...',
      startDate: '2020',
      endDate: 'Present',
    },{
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
      {
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
      {
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
      {
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
      {
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
      {
        title: 'Software Engineer',
        company: 'Company A',
        description: 'Job description...',
        startDate: '2020',
        endDate: 'Present',
      },
    // More jobs...
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
        <p>{description}</p>
        <span className="circle" />
      </div>
    </div>
    </>
  );
};

export default WorkExperience;