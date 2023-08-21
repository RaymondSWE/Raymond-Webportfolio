import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="text-container">
        <h1 className="loader-name">Raman Mohammed</h1>
        <div className="typing-container">
          <span className="typing-text">Full Stack Developer</span>
          <span className="cursor">...</span>
        </div>
      </div>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
