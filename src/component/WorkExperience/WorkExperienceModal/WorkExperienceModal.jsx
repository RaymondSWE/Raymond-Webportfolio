import React from "react";
import "./WorkExperienceModal.css";

const WorkExperienceModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="workexperience-modal-overlay">
      <div className="workexperience-modal-content">
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default WorkExperienceModal;
