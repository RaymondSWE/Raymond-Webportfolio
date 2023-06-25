import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
// import ProjectImage from '../../img/project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'Project description.. dsadasdsad sad sadsdsa.',
      // image: ProjectImage,
      url: 'https://projecturl.com',
      github: 'https://github.com/user/project1', // Add github URL
    },
    // More projects...
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
