import React from "react";
import "./SkillsSection.css";
// import the images
import JavascriptLogo from "../../img/logo/Javascript.png";
import ReactLogo from "../../img/logo/React.png";
import ReduxLogo from "../../img/logo/Redux.png";
import NodeLogo from "../../img/logo/Node.png";
import TypescriptLogo from "../../img/logo/Typescript.png";
import ExpressLogo from "../../img/logo/Express.png";
import JavaLogo from "../../img/logo/Java.png";
import Azure from "../../img/logo/Azure.png";
import Docker from "../../img/logo/Docker.png";
import Spring from "../../img/logo/Spring.png";
import Cpp from "../../img/logo/Cpp.png";
import Git from "../../img/logo/Git.png";
import Linux from "../../img/logo/Linux.png";
import Csharp from "../../img/logo/Csharp.png";
import JestLogo from "../../img/logo/Jest.png";
import CypressLogo from "../../img/logo/Cypress.png";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 5, icon: JavascriptLogo },
    { name: "React", level: 5, icon: ReactLogo },
    { name: "Node.js", level: 5, icon: NodeLogo },
    { name: "Express.js", level: 4, icon: ExpressLogo },
    { name: "Git", level: 4, icon: Git },
    { name: "Java", level: 3, icon: JavaLogo },
    { name: "TypeScript", level: 3, icon: TypescriptLogo },
    { name: "Redux", level: 3, icon: ReduxLogo },
    { name: "Spring", level: 2, icon: Spring },
    { name: "C++", level: 2, icon: Cpp },
    { name: "Azure", level: 2, icon: Azure },
    { name: "Linux", level: 2, icon: Linux },
    { name: "Jest", level: 2, icon: JestLogo },
    { name: "Cypress", level: 2, icon: CypressLogo },
    { name: "Docker", level: 1, icon: Docker },
    { name: "C#", level: 1, icon: Csharp },
  ];

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skills-section-skill-card">
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
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
