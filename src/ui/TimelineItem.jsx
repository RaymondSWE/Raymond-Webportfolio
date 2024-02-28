import React from 'react';

export const TimelineItem = ({
  title,
  subtitle,
  description,
  startDate,
  endDate,
  logo,
}) => {
  return (
    <div className="timeline-item in-view" data-aos="flip-right">
      <img src={logo} alt={`${title} logo`} className="education-logo" />
      <div className="timeline-item-content">
        <span className="tag" style={{ background: "#ff9800" }}>
          {startDate} - {endDate}
        </span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

