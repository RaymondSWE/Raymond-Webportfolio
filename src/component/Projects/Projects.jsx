import React, { useState } from "react";
import "./Projects.css";
import csgoImage from "../../img/csgo.png";
import blackjackImage from "../../img/blackjack.png";
import taskmanagementImage from "../../img/Todo-javaswing.png";
import raydeployImage from "../../img/RayDeploy.png";
import webportfolioImage from "../../img/webportfolio.png";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CSFairTrade",
      description:
        "A full-stack trading platform providing a secure and user friendly environment for trading in-game skins in the CS:GO market, estimated over 1 billion euros. I single-handedly developed this platform from scratch, tackling complex challenges of real-time data sync and transaction management.",
      image: csgoImage,
      technologyStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.IO",
        "HTTPS",
        "Nginx",
        "Digital Ocean",
        "Azure",
      ],
      liveDemo: "https://csfairtrade.com/",
      githubRepo: null,
    },
    {
      id: 2,
      title: "Blackjack game",
      description:
        "A desktop version of the Blackjack card game, developed in collaboration with a classmate. It was a challenging yet exciting process to transform the game rules into logic and implementing it in Java.",
      image: blackjackImage,
      technologyStack: ["Java", "Java Swing"],

      liveDemo: null,
      githubRepo: "https://github.com/RaymondSWE/Blackjack-game",
    },
    {
      id: 3,
      title: "Simple Website",
      description:
        "A fundamental project developed while learning web development basics. Following a YouTube tutorial, I created this simple website to gain hands-on experience with HTML, CSS, and JavaScript.",
      image: raydeployImage,
      technologyStack: ["HTML, CSS and Javascript"],
      liveDemo: "https://clever-pasca-d05919.netlify.app/",
      githubRepo: "https://github.com/RaymondSWE/RayDeploy",
    },
    {
      id: 4,
      title: "Web Portfolio",
      description:
        "A personal web portfolio built with React.js over a couple of days, showcasing my skills and experiences in a easy way.",
      image: webportfolioImage,
      technologyStack: ["React.js"],
      liveDemo: "http://ramanmohammedportfolio.me/",
      githubRepo: "https://github.com/RaymondSWE/Raymond-Webportfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-carousel">
        <Carousel
          showThumbs={true}
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          stopOnHover={true}
          swipeable={true}
          showStatus={false}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleButtonClick = (link) => {
    if (!link) {
      alert("This link is not available.");
    }
  };

  const { title, description, image, liveDemo, githubRepo, technologyStack } =
    project;

  return (
    <div ref={ref} className={`project-card ${inView ? "in-view" : ""}`}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <h3>Technology</h3>
        <div className="project-technology">
          {technologyStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-buttons">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(liveDemo)}>
                Live Demo
              </button>
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(githubRepo)}>
                GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
