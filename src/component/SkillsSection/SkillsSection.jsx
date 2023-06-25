import React from 'react';
import './SkillsSection.css';
// import the images
import Javascript from '../../img/Javascript.jpg';
import ReactImg from '../../img/react.jpg';
import Redux from '../../img/redux.png';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 5, image: Javascript },
    { name: 'React', level: 5, image: ReactImg },
    { name: 'Redux', level: 2, image: Redux },
  ];

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-image" style={{ backgroundImage: `url(${skill.image})` }} />
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level * 20}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
