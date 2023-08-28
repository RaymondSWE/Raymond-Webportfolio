import React, { useEffect } from "react";
import AOS from "aos";
import "./SkillsSection.css";
import Certifications from "./Certifications";

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
import Github from "../../img/logo/Github.png";
import Figma from "../../img/logo/Figma.png";
import Tailwind from "../../img/logo/Tailwind.png";
import HTML from "../../img/logo/HTML.png";
import CSS from "../../img/logo/CSS.png";
import Nginx from "../../img/logo/Nginx.png";
import Postman from "../../img/logo/Postman.png";
import NextJS from "../../img/logo/nextjs.png";
import Prisma from "../../img/logo/prisma.png"
import mysql from "../../img/logo/mysql.png"
import TRPCLogo from "../../img/trpc.svg";
import REST from "../../img/logo/REST.png"
import Ubuntu from "../../img/logo/ubuntu.png"
import Bootstrap from "../../img/logo/bootstrap.png"
import vscode from "../../img/logo/vscode.png"
import intellj from "../../img/logo/intellj.svg"
import datagrip from "../../img/logo/datagrip.svg"



const SkillsSection = () => {
  const languages = [
    { name: "HTML", level: 5, icon: HTML },
    { name: "CSS", level: 4, icon: CSS },
    { name: "JavaScript", level: 3, icon: JavascriptLogo },
    { name: "Java", level: 3, icon: JavaLogo },
    { name: "TypeScript", level: 2, icon: TypescriptLogo },
    { name: "C++", level: 2, icon: Cpp },
    { name: "C#", level: 1, icon: Csharp },
  ];

  const frameworks = [
    { name: "React", level: 4, icon: ReactLogo },
    { name: "Node.js", level: 4, icon: NodeLogo },
    { name: "Prisma", level: 4, icon: Prisma },
    { name: "Express.js", level: 4, icon: ExpressLogo },
    { name: "Redux", level: 3, icon: ReduxLogo },
    { name: "NextJS", level: 2, icon: NextJS },
    { name: "Spring", level: 2, icon: Spring },
    { name: "Bootstrap", level: 3, icon: Bootstrap },
    { name: "TailwindCSS", level: 2, icon: Tailwind },


  ];

  const others = [
    { name: "VsCode", level: 5, icon: vscode },
    { name: "MySQL", level: 4, icon: mysql },
    { name: "Git", level: 4, icon: Git },
    { name: "Github", level: 4, icon: Github },
    { name: "REST", level: 4, icon: REST },
    { name: "Intellj", level: 2.5, icon: intellj },
    { name: "Datagrip", level: 2.5, icon: datagrip },

    { name: "Postman", level: 2, icon: Postman },
    { name: "Azure", level: 2, icon: Azure },
    { name: "Linux", level: 2, icon: Linux },
    { name: "Ubuntu", level: 2, icon: Ubuntu },
    { name: "Jest", level: 2, icon: JestLogo },
    { name: "Cypress", level: 1, icon: CypressLogo },
    { name: "Docker", level: 1, icon: Docker },
    { name: "Nginx", level: 1, icon: Nginx },
    { name: "Figma", level: 0.5, icon: Figma },
    { name: "tRPC", level: 0.5, icon: TRPCLogo },
  ];
  const certifications = [
    {
      name: "Testing React with Jest and React Testing Library (RTL)",
      date: "Ongoing",
      description:
        "Comprehensive course on React testing best practices, includes a variety of examples and interactive 'code quizzes'.",
      link: "https://ramanmohammedportfolio.me",
    },
    {
      name: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
      date: "Ongoing",
      description:
        "Comprehensive guide to using Docker, Compose, and Kubernetes. Includes CI examples, configuration best practices, container creation, image registry, and workflow optimization.",
      link: "https://ramanmohammedportfolio.me",
    },
    {
      name: "Cypress -Modern Automation Testing",
      date: "Ongoing",
      description:
        "Master Cypress for web automation, including UI and API testing, with this comprehensive course. Covers JavaScript basics, Cypress framework design, and integration testing.",
      link: "https://ramanmohammedportfolio.mel",
    },
  ];

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
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Skills
      </h2>
      <h3>Languages</h3>
      <div className="skills-grid">
        {languages.map(renderSkill)}
      </div>
      <h3>Frameworks</h3>
      <div className="skills-grid">
        {frameworks.map(renderSkill)}
      </div>
      <h3>Others Tools</h3>
      <div className="skills-grid">
        {others.map(renderSkill)}
      </div>
      <Certifications certifications={certifications} />
    </div>
  );
};

export default SkillsSection;
