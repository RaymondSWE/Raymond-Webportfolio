import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./HeroSection.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const openGithubProfile = () => {
    window.open("https://github.com/RaymondSWE", "_blank");
  };

  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/raman-mohammed/", "_blank");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.closest("a").getAttribute("href");
    const location = document.querySelector(target);
    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container" id="hero">
      <h1 className="hero-container-title" data-aos="zoom-in-up">
        Welcome
      </h1>

      <div
        className="hero-container-subtitle"
        data-aos-delay="700"
        data-aos="zoom-in"
      >
        <Typewriter
          options={{
            strings: [
              "Hey there, I'm Raman Mohammed✋",
              "I'm an enthusiast Full-Stack developer💻",
              "You can contact me through Linkedin or email📧",
            ],
            delay: 150,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
      </div>
      <div className="hero-container-social-icons">
        <FontAwesomeIcon
          icon={faGithub}
          className="hero-container-icon"
          onClick={openGithubProfile}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="hero-container-icon"
          onClick={openLinkedInProfile}
        />
      </div>
      <button
        className="hero-container-button"
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="#contact" onClick={handleClick}>
          Contact Me
        </a>
      </button>

      <div
        className="hero-icon-container"
        data-aos="flip-up"
        data-aos-offset="20"
        data-aos-delay="2000"
      >
        <a href="#about" className="hero-icon-svg" onClick={handleClick}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="currentColor"
            className="icon-bounce"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
