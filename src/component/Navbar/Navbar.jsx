import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Raman Mohammed</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#about" className="navbar-links">About</a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-links">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-links">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#education" className="navbar-links">Education</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
