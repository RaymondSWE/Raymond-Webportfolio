import React from 'react';
import './ProjectsSection.css'; 
import Project from './Project'; 

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of the first project.',
    image: '/path-to-your-image.jpg',
    githubLink: 'https://github.com/your-github-username/project-1',
    projectLink: 'https://your-project-link.com'
  },
  // add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
