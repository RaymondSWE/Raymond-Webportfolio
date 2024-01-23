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
import Prisma from "../../img/logo/prisma.png";
import mysql from "../../img/logo/mysql.png";
import TRPCLogo from "../../img/trpc.svg";
import REST from "../../img/logo/REST.png";
import Ubuntu from "../../img/logo/ubuntu.png";
import Bootstrap from "../../img/logo/bootstrap.png";
import vscode from "../../img/logo/vscode.png";
import intellj from "../../img/logo/intellj.svg";
import datagrip from "../../img/logo/datagrip.svg";
import socketIO from "../../img/logo/socketIO.png";
import pythonLogo from "../../img/logo/python.png";
import zeromqLogo from "../../img/logo/zeromq.svg"
import pycharmLogo from "../../img/logo/pycharm.svg"
import LiquibaseLogo from "../../img/logo/Liquibase.png"
import SwarmLogo from "../../img/logo/Dockerswarm.png"
import VercelLogo from "../../img/logo/Vercel.png"
import AWSLambdaLogo from "../../img/logo/AWSLambda.png"
import GrafanaLogo from "../../img/logo/Grafana.png"
import PrometheusLogo from "../../img/logo/prometheusio.svg"
import Kubernetes from "../../img/logo/kubernetes.png"

const SkillsSection = () => {
  const languages = [
    { name: "HTML", level: 5, icon: HTML },
    { name: "CSS", level: 4, icon: CSS },
    { name: "JavaScript", level: 4, icon: JavascriptLogo },
    { name: "Java", level: 4, icon: JavaLogo },
    { name: "TypeScript", level: 3, icon: TypescriptLogo },
    { name: "Python", level: 2, icon: pythonLogo },
    { name: "C++", level: 1, icon: Cpp },
    { name: "C#", level: 1, icon: Csharp },
  ];

  const frameworks = [
    { name: "React", level: 4, icon: ReactLogo },
    { name: "Node.js", level: 4, icon: NodeLogo },
    { name: "NextJS", level: 4, icon: NextJS },
    { name: "Prisma", level: 4, icon: Prisma },
    { name: "Spring", level: 4, icon: Spring },
    { name: "TailwindCSS", level: 4, icon: Tailwind },
    { name: "Express.js", level: 4, icon: ExpressLogo },
    { name: "Redux", level: 3, icon: ReduxLogo },
    { name: "Bootstrap", level: 3, icon: Bootstrap },
  ];

  const databaseDevOps = [
    { name: "Git & Github", level: 4, icon: Git },
    { name: "Docker", level: 4, icon: Docker },
    { name: "Docker-Swarm", level: 3, icon: SwarmLogo },
    { name: "Github Action", level: 3, icon: Github },
    { name: "Liquibase", level: 3, icon: LiquibaseLogo },
    { name: "MySQL", level: 4, icon: mysql },
    { name: "AWS Lambda", level: 3, icon: AWSLambdaLogo },
    { name: "Vercel", level: 3, icon: VercelLogo },
    { name: "Azure", level: 2, icon: Azure },
    { name: "Grafana", level: 2, icon: GrafanaLogo },
    { name: "Prometheus", level: 2, icon: PrometheusLogo },
    { name: "Nginx", level: 2, icon: Nginx },
    { name: "Kubernetes", level: 1, icon: Kubernetes },

  ];

  const others = [
    { name: "VsCode", level: 5, icon: vscode },
    { name: "Intellj", level: 5, icon: intellj },
    { name: "Pycharm", level: 5, icon: pycharmLogo },
    { name: "Datagrip", level: 5, icon: datagrip },
    { name: "Linux", level: 4, icon: Linux },
    { name: "Ubuntu", level: 4, icon: Ubuntu },
    { name: "REST", level: 4, icon: REST },
    { name: "Postman", level: 4, icon: Postman },
    { name: "ZeroMQ", level: 3.5, icon: zeromqLogo },
    { name: "SocketIO (Websocket)", level: 3, icon: socketIO },
    { name: "Jest", level: 2, icon: JestLogo },
    { name: "Cypress", level: 1, icon: CypressLogo },
    { name: "Figma", level: 0.5, icon: Figma },
    { name: "tRPC", level: 0.5, icon: TRPCLogo },
  ];


  const certifications = [
    {
      name: "Docker Mastery: with Kubernetes + Docker Swarm from a Docker Captain",
      date: "Ongoing",
      description:
        "Comprehensive guide to using Docker, Compose, and Kubernetes. Includes CI/CD examples, configuration best practices, orchestration tool management, container creation, image registry, and workflow optimization.",
      link: "https://www.udemy.com/certificate/UC-1fc30466-eee4-488e-9993-67d336a8c927/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    },
    {
      name: "Testing React with Jest and React Testing Library (RTL)",
      date: "Ongoing",
      description:
        "Comprehensive course on React testing best practices, includes a variety of examples and interactive 'code quizzes'.",
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
      <div className="skills-grid">{others.map(renderSkill)}</div>
      <Certifications certifications={certifications} />
    </div>
  );
};

export default SkillsSection;
