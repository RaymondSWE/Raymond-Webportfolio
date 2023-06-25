import React, { useState } from 'react';
import './Projects.css';
import csgoImage from '../../img/csgo.png';
import blackjackImage from '../../img/blackjack.png';
import taskmanagementImage from '../../img/Todo-javaswing.png';
import raydeployImage from '../../img/RayDeploy.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CSFairTrade',
      description: 'CSFairTrade is a full-stack trading platform developed by me. The platform provides users with the ability to buy and sell in-game skins for the CS:GO market, with a total value of over 1 billion euros.',
      image: csgoImage,
      technologyStack: 'React.js, Node.js, Express.js, MySQL, Socket.IO, HTTPS',
      liveDemo: 'https://csfairtrade.com/',
      githubRepo: null,
    },
    {
      id: 2,
      title: 'Blackjack game',
      description: 'The blackjack card game project was developed by a team of two members. The project involved analyzing the requirements, designing the components, implementing the game using Java and Java Swing.',
      image: blackjackImage,
      technologyStack: 'Java, Java Swing',
      liveDemo: null,
      githubRepo: 'https://github.com/RaymondSWE/Blackjack-game',
    },
    {
      id: 3,
      title: 'Simple webbsite',
      description: 'Simple HTML, CSS and Javascript. This was from a youtube videos, one of my first project to learn the basic of webbdevelopment.',
      image: raydeployImage,
      technologyStack: 'HTML, CSS and Javascript',
      liveDemo: 'https://clever-pasca-d05919.netlify.app/',
      githubRepo: 'https://github.com/RaymondSWE/RayDeploy',
    },
    {
      id: 4,
      title: 'Webbportoflio',
      description: 'Simple HTML, CSS and Javascript. This was from a youtube videos, one of my first project to learn the basic of webbdevelopment.',
      image: raydeployImage,
      technologyStack: 'Java, Java Swing',
      authentication: null,
      platform: null,
      deployment: 'Hostinger',
      liveDemo: 'http://ramanmohammedportfolio.me/',
      githubRepo: 'https://github.com/RaymondSWE/Raymond-Webportfolio',
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {

  const handleButtonClick = (link) => {
    if (!link) {
      alert('This link is not available.');
    }
  };

  const { title, description, image, liveDemo, githubRepo, technologyStack } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <h3>Technology</h3>
        <p className='project-technology'>{technologyStack}</p>
        <div className="project-buttons">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(liveDemo)}>Live Demo</button>
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(githubRepo)}>GitHub</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
