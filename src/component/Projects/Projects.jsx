import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Projects.css";
import "./ProjectModal.css";
import { useInView } from "react-intersection-observer";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { ProjectsData } from "../../data/ProjectsData";

const Projects = () => {
  

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-down-right">Projects</h2>
      <div className="projects-grid" data-aos="fade-down-left">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setModalOpen] = useState(false);


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
        <div className="project-technology">
          {technologyStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a
          href={githubRepo || "#!"}
          target="_blank"
          rel="noopener noreferrer"
          className={`link-button ${githubRepo ? "" : "disabled"}`}
          onClick={githubRepo ? undefined : (e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href={liveDemo || "#!"}
          target="_blank"
          rel="noopener noreferrer"
          className={`link-button ${liveDemo ? "" : "disabled"}`}
          onClick={liveDemo ? undefined : (e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faGlobe} /> Live Preview
        </a>
      </div>
      <div className="more-info-button">
        <button onClick={() => setModalOpen(true)}>
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        project={project}
      />
    </div>
  );
};

export default Projects;
