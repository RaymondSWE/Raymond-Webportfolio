import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
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

  useEffect(() => {
    const listItems = ref.current.querySelectorAll(".navbar-container-navbar-item");
    listItems.forEach((item, index) => {
      item.style.setProperty("--i", index);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container" ref={ref}>
        <a href="#hero" className="navbar-container-navbar-logo">
          Raman Mohammed
        </a>
        <ul className={`navbar-container-navbar-menu ${active ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index} className="navbar-container-navbar-item" style={{ "--i": index }}>
              <a href={item.href} className="navbar-container-navbar-links" onClick={(e) => handleClick(e, item.href)}>
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setActive(!active)} className="hamburger" aria-label="Menu Toggle">
          <div />
          <div />
          <div />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
