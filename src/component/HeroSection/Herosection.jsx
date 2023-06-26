import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './HeroSection.css';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
  const openGithubProfile = () => {
    window.open('https://github.com/RaymondSWE', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/raman-mohammed/', '_blank');
  };

  return (
    <div id='about' className="hero-container">
      <div className="hero-background"></div>
      <div className='glitch'>
      <TypingEffect text=" Hey! I'm Raman Mohammed" speed={175} />
      </div>
      <p className="subtitle">Fullstack Developer</p>
      <p className="hero-story">
        Software Developer with 2 years of experience across various platforms and languages.
        I gained experience in Java, React.js, TypeScript, Node.js, MySQL, and AWS during school
        and bootcamp, which I also applied in real-world projects. I've shown competence in both
        self-managed and team environments, using modern tools to create robust software systems.
        With a foundation in computer science and practical experience, I excel in front-end and
        back-end development, database design, and cloud services. Always open to learn more.
      </p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faGithub} className="icon" onClick={openGithubProfile} />
        <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={openLinkedInProfile} />
      </div>
    </div>
  );
};

export default HeroSection;
