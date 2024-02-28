import React, { useEffect } from "react";
import AOS from "aos";
import "./SkillsSection.css";
import Certifications from "./Certifications";
import { certifications, databaseDevOps, frameworks, languages, othersSkills } from "../../data/SkillsData";

const SkillsSection = () => {
 

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const renderSkill = (skill, index) => (
    <div
      key={index}
      className="skills-section-skill-card"
      data-aos="fade-right"
    >
      <div
        className="skills-section-skill-image"
        style={{ backgroundImage: `url(${skill.icon})` }}
      />
      <div className="skills-section-skill-content">
        <div className="skills-section-skill-name">{skill.name}</div>
        <div className="skills-section-skill-bar">
          <div
            className="skills-section-skill-level"
            style={{ width: `${skill.level * 20}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div id="skills" className="skills-section">
      <h2 data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        Skills
      </h2>
      <h3>Languages</h3>
      <div className="skills-grid">{languages.map(renderSkill)}</div>
      <h3>Frameworks</h3>
      <div className="skills-grid">{frameworks.map(renderSkill)}</div>
      <h3>Database & DevOps Tools</h3>
      <div className="skills-grid">{databaseDevOps.map(renderSkill)}</div>
      <h3>Other Tools</h3>
      <div className="skills-grid">{othersSkills.map(renderSkill)}</div>
      <Certifications certifications={certifications} />
    </div>
  );
};

export default SkillsSection;
