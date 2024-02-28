import "./About.css";
import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import AOS from "aos";

export default function About() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("https://assets10.lottiefiles.com/packages/lf20_w98qte06.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="about" className="about-container">
      <h2 className="about-container-title" data-aos="zoom-out-down">
        About Me
      </h2>
      <div className="about-body">
        <div className="about-text">
          <h3 className="about-name" data-aos={"fade-left"}>
            I'm <span className="highlight-text">Raman Mohammed,</span> a
            technology enthusiast
          </h3>
          <p className="about-description" data-aos={"fade-left"}>
          I am a Software Developer with over three years of experience, 
          nearing completion of my Bachelor's in System Development in Computer Science.
          My expertise spans multiple languages, such as Java, React.js, TypeScript, Node.js, MySQL, AWS, and more.
           I am interested in creating distributed systems, ensuring scalability and reliability. 
           My projects showcase my ability in both frontend and backend development, 
           utilizing DevOps methodologies for infrastructures within distributed systems.
          </p>
          <p className="about-description" data-aos={"fade-right"}>
          I am committed to continuous learning and eager to apply my technical knowledge to various challenges, with the goal of creating impactful software infrastructure.
          </p>
        </div>

        <div className="about-image" data-aos={"slide-left"}>
          <div className="image-animation">
            {animationData && (
              <Lottie
                animationData={animationData}
                autoplay
                loop
                style={{ width: "350px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
