import React from 'react';
import { motion } from 'framer-motion';
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

const ProjectCard = ({ title, description, image, url, github }) => { // Receive github URL as a prop
  return (
    <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
      <div className="project-inner">
        <div className="project-front">
          <img src={image} alt={title} />
        </div>
        <div className="project-back">
          <h3>{title}</h3>
          <p className='project-description'>{description}</p>
          <div className="project-buttons">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
