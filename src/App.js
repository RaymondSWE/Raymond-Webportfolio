import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
import HeroSection from "./component/HeroSection/Herosection";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import SkillsSection from "./component/SkillsSection/SkillsSection";
import WorkExperience from "./component/WorkExperience/WorkExperience";
import Loader from "./component/Loader/Loader.jsx";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(process.env.REACT_APP_PUBLIC_GOOGLE_ANALYTICS);
    // Record an initial pageview
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
    
    
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <>
      <Navbar />
      <div className="hero-section-container">
        <HeroSection />
      </div>
      <div className="section-container">
        <About />
      </div>
      <div className="section-container">
        <SkillsSection />
      </div>
      <div className="section-container">
        <Projects />
      </div>
      <div className="section-container">
        <WorkExperience />
      </div>
      <div className="section-container">
        <Education />
      </div>
      <div className="navbar-section-container">
        <Contact />
      </div>
    </>
  );
}

export default App;
