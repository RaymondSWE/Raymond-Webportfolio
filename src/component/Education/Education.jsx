import React from 'react';
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
    <div id="education" className="education-section">
      <h2>Education</h2>
      {education.map((education, index) => (
        <div key={index} className="education-card">
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p>{education.startDate} - {education.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
