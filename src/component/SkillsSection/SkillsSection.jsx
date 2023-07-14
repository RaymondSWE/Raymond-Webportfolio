import React, { useEffect } from "react"; 
import AOS from "aos"; 
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

  const certifications = [
    { 
      name: "Testing React with Jest and React Testing Library (RTL)", 
      date: "Ongoing", 
      description: "Comprehensive course on React testing best practices, includes a variety of examples and interactive 'code quizzes'.", 
      link: "https://ramanmohammedportfolio.me"
    },
    {
      name: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain", 
      date: "Ongoing", 
      description: "Comprehensive guide to using Docker, Compose, and Kubernetes. Includes CI examples, configuration best practices, container creation, image registry, and workflow optimization.", 
      link: "https://ramanmohammedportfolio.me"
    },
    {
      name: "Cypress -Modern Automation Testing from Scratch + Frameworks", 
      date: "Ongoing", 
      description: "Master Cypress for web automation, including UI and API testing, with this comprehensive course. Covers JavaScript basics, Cypress framework design, and integration testing.", 
      link: "https://ramanmohammedportfolio.mel"
    }
    
  ];
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skills-section-skill-card" data-aos="fade-right">
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
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
        <div key={index} className="certification-card" data-aos="fade-up">
        <div className="certification-card-content">
          <h3>{certification.name}</h3>
          <time>{certification.date}</time>
          <p>{certification.description}</p>
        </div>
        <a href={certification.link} target="_blank" rel="noopener noreferrer">Download Certificate</a>
      </div>        
        ))}
        </div>
    </div>
  );
};

export default SkillsSection;
 