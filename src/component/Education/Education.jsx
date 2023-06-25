import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'School Name 1',
      degree: 'Degree 1',
      startDate: 'September 2015',
      endDate: 'June 2019',
    },
    // Add or remove education entries as needed
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ school, degree, startDate, endDate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'in-view' : ''}`}>
      <div className="timeline-item-content">
        <span className="tag" style={{ background: '#ff9800' }}>
          {startDate} - {endDate}
        </span>
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
};

export default Education;
