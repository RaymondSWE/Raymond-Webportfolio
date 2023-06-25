import React, { useState } from 'react';
import './Projects.css';
import csgoImage from '../../img/csgo.png';

const Projects = () => {
  const projects = [
    {
      title: 'CSFairTrade',
      description: 'CSFairTrade is a full-stack trading platform developed by me. The platform provides users with the ability to buy and sell in-game skins for the CS:GO market, with a total value of over 1 billion euros.',
      image: csgoImage,
      technologyStack: 'React.js, Node.js, Express.js, MySQL, Socket.IO, HTTPS',
      authentication: 'Integrated Steam API OAuth 2.0 for user registration and session management.',
      platform: 'CSFairTrade offers users an interface to manage their inventories directly within the platform. It fetches user inventory data, obtains data from all bots, and accesses the current price list. Data is stored and displayed using MySQL due to API request limitations from Steam. The database is hosted on Azure.',
      deployment: 'Hosted on DigitalOcean droplets, running on PM2. Implemented CI/CD pipeline using GitHub Actions for frontend and backend in both development and production environments. Both frontend and backend are secured with SSL certification and traffic is managed using Nginx.',
      liveDemo: 'https://csfairtrade.com/',
      githubRepo: 'GitHub repository available upon request.',
    },
    // Add more projects...
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  liveDemo,
  githubRepo,
  authentication,
  platform,
  deployment,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            <button>Live Demo</button>
          </a>
          <a href={githubRepo} target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
          <button onClick={toggleDetails}>More Information</button>
        </div>
        {showDetails && (
          <div className="project-more-info">
            <h4>Authentication</h4>
            <p>{authentication}</p>
            <h4>Platform</h4>
            <p>{platform}</p>
            <h4>Deployment</h4>
            <p>{deployment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;