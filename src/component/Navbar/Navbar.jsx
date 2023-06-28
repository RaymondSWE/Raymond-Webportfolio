import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#about" className="navbar-container-navbar-logo">Raman Mohammed</a>
        <ul className="navbar-container-navbar-menu">
          <li className="navbar-container-navbar-item">
            <a href="#about" className="navbar-container-navbar-links" onClick={handleClick}>About</a>
          </li>
          <li className="navbar-container-navbar-item">
            <a href="#skills" className="navbar-container-navbar-links" onClick={handleClick}>Skills</a>
          </li>
          <li className="navbar-container-navbar-item">
            <a href="#projects" className="navbar-container-navbar-links" onClick={handleClick}>Projects</a>
          </li>
          <li className="navbar-container-navbar-item">
            <a href="#workexperience" className="navbar-container-navbar-links" onClick={handleClick}>Work</a>
          </li>
          <li className="navbar-container-navbar-item">
            <a href="#education" className="navbar-container-navbar-links" onClick={handleClick}>Education</a>
          </li>
          <li className="navbar-container-navbar-item">
            <a href="#contact" className="navbar-container-navbar-links" onClick={handleClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
