import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Projects.css";
import "./ProjectModal.css";
import csgoImage from "../../img/csgo.png";
import blackjackImage from "../../img/blackjack.png";
import codemateImage from "../../img/codemate.png";
import taskmanagementImage from "../../img/Todo-javaswing.png";
import raydeployImage from "../../img/RayDeploy.png";
import webportfolioImage from "../../img/webportfolio.png";
import massageAppImage from "../../img/massageapp.png";
import snipeskinsImage from "../../img/snipeskins.jpg";
import queueStudentImage from "../../img/queue-student.png"
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { projects } from "../../data/projects";

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
        {projects.map((project) => (
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

  const handleButtonClick = (link) => {
    if (!link) {
      toast.error("This link is not available.");
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
        <div className="project-technology">
          {technologyStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <div>
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleButtonClick(githubRepo)}
          >
            <button className="link-button">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </button>
          </a>
        </div>
        <div>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleButtonClick(liveDemo)}
          >
            <button className="link-button">
              <FontAwesomeIcon icon={faGlobe} /> Live Preview
            </button>
          </a>
        </div>
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
