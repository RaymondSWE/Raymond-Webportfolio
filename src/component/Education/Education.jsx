import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'University Skövde',
      degree: "Bachelor's in Computer Science - Specialization System Development",
      startDate: 'August 2021',
      endDate: 'May 2024',
    },
    {
      school: 'University Borås',
      degree: "Bachelor's in Economics (60 credits)",
      startDate: 'August 2020',
      endDate: 'May 2021',
    },
  ];

  return (
    <div id='education' className="education-section">
      <h2 className="education-section-title">Education</h2>
      <div className="education-section-timeline">
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
