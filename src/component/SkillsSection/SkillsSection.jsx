import React from 'react';
import './SkillsSection.css'; 

const SkillsSection = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'C++',
    'Unity',
    'Unreal Engine',
    'Git',
    'MongoDB',
    // add or remove skills as needed
  ];

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
