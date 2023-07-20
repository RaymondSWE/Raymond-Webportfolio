import React from "react";
import Modal from "react-modal";

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

      {project &&
        project.detailedDescription &&
        project.detailedDescription
          .split("\n")
          .map((paragraph, index) => <p key={index}>{paragraph}</p>)}

      <button className="modal-close-btn" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default ProjectModal;
