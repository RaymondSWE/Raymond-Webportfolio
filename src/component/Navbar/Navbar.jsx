import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import HamburgerMenu from 'react-hamburger-menu';

import {
  faUser,
  faTools,
  faProjectDiagram,
  faBriefcase,
  faUniversity,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const navItems = [
    { icon: faUser, label: "About", href: "#about" },
    { icon: faTools, label: "Skills", href: "#skills" },
    { icon: faProjectDiagram, label: "Projects", href: "#projects" },
    { icon: faBriefcase, label: "Work", href: "#workexperience" },
    { icon: faUniversity, label: "Education", href: "#education" },
    { icon: faEnvelope, label: "Contact", href: "#contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(false);  
    }
  };


  

  return (
    <nav className="navbar">
      <div className="navbar-container" ref={ref}>
        <a href="#hero" className="navbar-container-logo">
          Raman Mohammed
        </a>
        <div className="menu-container">
          <ul className={`navbar-container-menu ${active ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <li key={index} className="navbar-container-navbar-item" style={{ "--i": index }}>
                <a href={item.href} className="navbar-container-navbar-links" onClick={(e) => handleClick(e, item.href)}>
                  <FontAwesomeIcon icon={item.icon} /> {item.label}
                </a>
              </li>
            ))}
          </ul>
            <div className="hamburger-wrapper">
              <HamburgerMenu
                  isOpen={active}
                  menuClicked={() => setActive(!active)}
                  width={25}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color='orange'
                  borderRadius={0}
                  animationDuration={0.5}
              />
          </div>
        </div>
      </div>
    </nav>
);

};

export default Navbar;
