import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="glitch" data-text="RAMAN MOHAMMED">RAMAN MOHAMMED</div>
      <p className="subtitle">Web Developer | Machine Learning Enthusiast | Technophile</p>
      <p className="hero-story">
        Software Developer with 2 years of experience across various platforms and languages.
        I gained experience in Java, React.js, TypeScript, Node.js, MySQL, and AWS during school
        and bootcamp, which I also applied in real-world projects. I've shown competence in both
        self-managed and team environments, using modern tools to create robust software systems.
        With a foundation in computer science and practical experience, I excel in front-end and
        back-end development, database design, and cloud services. Always open to learn more.
      </p>
      <button className="cta-button">See My Work</button>
    </div>
  );
};

export default HeroSection;
