import "./About.css";
import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import AOS from "aos";

export default function About() {
  const [animationData, setAnimationData] = useState(null);

  const getDate = () => {
    var dob = new Date("03/05/1999");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

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
      <h2 className="about-container-title" data-aos={"slide-down"}>
        About Me
      </h2>
      <div className="about-body">
        <div className="about-text">
          <h3 className="about-name" data-aos={"fade-left"}>
            I'm <span className="highlight-text">Raman Mohammed,</span> a
            technology enthusiast
          </h3>
          <p className="about-description" data-aos={"fade-left"}>
            Software Developer with 2 years of experience across various
            platforms and languages. I gained experience in Java, React.js,
            TypeScript, Node.js, MySQL and AWS during school and bootcamp, which
            I also applied in real world projects.
          </p>
          <p className="about-description" data-aos={"fade-right"}>
            I've shown competence in both self managed and team enviroment,
            using the modern tools to create good software systems. With a
            foundation in computer science and experience, I excel in frontend,
            backend development, database design, and cloud services. Always
            open to learn more.
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
