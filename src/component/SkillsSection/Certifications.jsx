import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div>
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Certifications
      </h2>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-card" data-aos="fade-up">
            <div className="certification-card-content">
              <h3>{certification.name}</h3>
              <time>{certification.date}</time>
              <p>{certification.description}</p>
            </div>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
