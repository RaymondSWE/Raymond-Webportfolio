import React from 'react';
import './Project.css'; 

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href={project.projectLink} target="_blank" rel="noreferrer">Project</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
