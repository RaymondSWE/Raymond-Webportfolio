import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#root"); // This is important for accessibility reasons.

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="project-modal-content"
      overlayClassName="project-modal-overlay"
    >
      <h2>{project?.title}</h2>
      <div className="project-dates">
        <p>
          <strong>Start Date:</strong> {project?.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {project?.endDate}
        </p>
      </div>
      {project &&
        project.detailedDescription &&
        project.detailedDescription
          .split("\n")
          .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {project?.demoVideo && (
        <div className="player-wrapper">
          <ReactPlayer
            url={project.demoVideo}
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      )}
      <button className="modal-close-btn" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default ProjectModal;
