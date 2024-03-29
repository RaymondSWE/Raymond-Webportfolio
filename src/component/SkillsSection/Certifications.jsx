import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Certifications = ({ certifications }) => {
  return (
    <div>
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="ceritficaiton-header"
      >
        Certifications
      </h2>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-card" data-aos="fade-up">
            <div className="certification-card-content">
              <h4 className="certification-card-title">{certification.name}</h4>
              <time>{certification.date}</time>
              <p>{certification.description}</p>
            </div>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> See Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
