import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Projects.css";
import "./ProjectModal.css";
import csgoImage from "../../img/csgo.png";
import blackjackImage from "../../img/blackjack.png";
import taskmanagementImage from "../../img/Todo-javaswing.png";
import raydeployImage from "../../img/RayDeploy.png";
import webportfolioImage from "../../img/webportfolio.png";
import massageAppImage from "../../img/massageapp.png";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CSFairTrade",
      startDate: "2021-12-25",
      endDate: "Ongoing",
      description:
        "A full-stack trading platform providing a secure and user friendly environment for trading in-game skins in the CS:GO market, estimated over 1 billion euros.",
      detailedDescription: `
          🛠️ Technology Stack: CSFairTrade utilizes a modern web tech stack with React.js for an interactive frontend, Node.js and Express.js for the backend, and MySQL for data management in an MVC architecture. I've also integrated Socket.IO for real time bidirectional communication between users and bots, complemented with HTTPS requests for data display and manipulation. 

          💼 User Authentication: I've integrated the Steam API's OAuth 2.0 for a smooth user registration process. Upon signing in via Steam, user data is stored in a session and saved to the database, ensuring a smooth user experience.

          🎮 Platform: CSFairTrade provides an interface that enables users to directly manage their inventories. It retrieves user inventory data, aggregates data from all bots, and accesses the current price list. Despite the limitations of Steam's API requests, I've developed a solution that stores and displays data using MySQL. Currently, this database is hosted on Azure. The platform's design is an event-driven and REST API architecture.
          🧪 Testing and Coverage: The project has undergone testing using React Testing Library and Jest. The current focus is on refactoring and writing proper tests for each component. The project has achieved a test coverage of 45% for statements and 48% for lines. The coverage report provides insights into which files and lines are not covered by the tests, helping in identifying areas that require additional testing. Please take into consideration that I'm still a junior and I am working on increasing the test coverage. 

          🚀 Deployment: CSFairTrade is deployed on DigitalOcean droplets using PM2, with unique IPs allocated for both frontend and backend. We manage the CI/CD pipeline through GitHub Actions. All traffic is SSL-secured and directed via Nginx. Both unit- and functional tests are in place for stability. Firewalls has also been implemented to enhance security. 

          🏆CSFairTrade represents a personal achievement for me, involving numerous hours of learning and understanding various technologies outside of my formal education. The project required me to tackle challenges including working with APIs, implementing a user authentication process, integrating payment gateways, business logic and even setting up a fully functional CI/CD pipeline.

        `,

      image: csgoImage,
      technologyStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Socket.IO",
        "HTTPS",
        "Nginx",
        "Digital Ocean",
        "Azure",
        "React testing library",
        "Jest",
      ],
      liveDemo: "https://csfairtrade.com/",
      githubRepo: null,
      demoVideo: "https://www.youtube.com/watch?v=fYdAn0O2g0Q",
    },
    {
      id: 2,
      title: "Blackjack game",
      startDate: "2022-03-04",
      endDate: "2022-04-20",
      description:
        "A desktop version of the Blackjack card game, developed in collaboration with a classmate. It was a challenging yet exciting process to transform the game rules into logic and implementing it in Java.",
      detailedDescription: `

        🎲 Game Basics: The game blackjack requires the player and dealer to have two cards each. One of the dealer's cards remains concealed from the player. Players have options to either stand or hit, which are displayed as buttons. The game's primary goal is to ensure the player's score does not exceed 21.

        📜 Game Rules: If the player's score is above 21, they lose. Otherwise, when the player stands, it's the dealer's turn to hit. The dealer continues hitting until they reach a score of 17 or more. Once the dealer's turn is over and their score is under 21, both player and dealer scores are compared. Depending on the comparison, the player can either win, lose, or tie. Players also have an option to place bets, but they can't bet beyond their current balance.

        🛠️ MVC Design: The design follows the model-view-controller (MVC) pattern, ensuring clear code structure. The model manages data, the view is responsible for displaying the game, and the controller handles the game logic.

        🌐 Design Choice: The MVC pattern was chosen because of its robustness in maintaining a clean separation between the frontend and backend. One alternative was to let the graphical user interface handle both game logic and display, but this would complicate code management.
      `,
      image: blackjackImage,
      technologyStack: ["Java", "Java Swing"],
      liveDemo: null,
      githubRepo: "https://github.com/RaymondSWE/Blackjack-game",
    },
    {
      id: 3,
      title: "Web Portfolio",
      startDate: "2023-06-25",
      endDate: "Ongoing",
      description: "My personal web portfolio is designed to be a comprehensive showcase of my skills, experiences, and projects. As a developer, I understand the importance of presenting oneself in a digital format that is both user friendly and informative.",
      detailedDescription: `
          🌐 The website's frontend is developed using React.js, one of the most popular JavaScript libraries for building interactive user interfaces. For enhanced animations and page transitions, I integrated Framer Motion and AOS (Animate on Scroll) library. Icons from Font Awesome library add visual appeal and better representation of various sections. 
    
          📝 The 'Skills' section provides a graphical representation of my technical expertise, while the 'Work Experience' and 'Education' sections chronologically showcasing my professional and academic journey. My project works, including live demo links and GitHub repositories, are detailed under the 'Projects' section.
    
          🚀 Deployment: The website is hosted and deployed using hostinger. For form submissions in the 'Contact' section, I integrated EmailJS for sending direct emails without the need for a backend server.
    
          🛠️ The site's responsive design ensures optimal viewing across various device sizes. The 'Typewriter effect' on the landing page, implemented using the 'typewriter-effect' library, offers a dynamic introduction to visitors.
    
          🔍 SEO Enhancements: I've integrated a variety of SEO techniques to optimize the site's visibility on search engines. This includes the use of meta tags, schema markup, canonical links, and Open Graph tags for better display on various social media platforms. The inclusion of relevant keywords and alt attributes for images, further boost the site's search engine rankings.
    
          📊 Google Analytics: To gain insights into user behavior, site traffic, and other vital metrics, I've incorporated Google Analytics into the website. I can monitor real-time user interactions, assess traffic sources etc.
    
          Overall, this portfolio stands as a testament to my dedication to the field of web development and my continuous eagerness for learning.
      `,

      image: webportfolioImage,
      technologyStack: [
        "React.js",
        "CSS",
        "HTML",
        "Hostinger",
        " Google Analytics",
      ],
      liveDemo: "http://ramanmohammedportfolio.me/",
      githubRepo: "https://github.com/RaymondSWE/Raymond-Webportfolio",
    },
    {
      id: 4,
      title: "Massage Application for Company Employees",
      startDate: "2022-06-05",
      endDate: "2022-07-12",
      description:
      "Developed a CMS-based massage booking system for Bally's employees during my internship.",
      detailedDescription: `
    
      🤝 Collaboration: I collaborated with other students in a team to develop a Massage application for Bally's employees. My primary responsibility involved designing the database and implementing the backend logic for the application.

      🛠️ Tech Stack: We utilized MySQL, React, and Spring Boot to create the application.
      
      📚 Features & Reflection: The application enabled users to book, and if necessary, rebook a single massage appointment. After the appointment ends, they could then book another for the upcoming weeks. Administrators had the capacity to manage appointments, as in creating, modifying, or deleting them as needed. Although this was my first full-stack project, I would say the outcome was good and not a disaster.
      
      🔐 Authentication: While Okta was integrated user authentication, we encountered challenges. These were later resolved by a senior developer. I was informed later on that the issues was from Okta's end.
      
      🚀 Growth: This project emphasized the value of teamwork and improved my problem solving skills. Reflecting on it, I recognized the significance of clean coding and the need to prioritize its principles. While I did maintain good naming conventions, some parts of the codebase could benefit from refactoring to better follow with clean code principles like DRY (Don't Repeat Yourself), KISS (Keep It Simple), and SRP (Single Responsibility Principle).      `,
      image: massageAppImage, // Replace null with an appropriate image link if available
      technologyStack: [
        "MySQL",
        "React",
        "Material UI",
        "Spring Boot",
        "Liquibase",
      ],
      liveDemo: "https://massage.silverspin.com/",
      githubRepo: null,
    },     
    {
      id: 5,
      title: "Simple Website",
      startDate: "2021-10-26",
      endDate: "2021-10-26",
      description:
        "The project was developed while following a YouTube tutorial to grasp the fundamentals of web development.",
      detailedDescription: `
  🌐 Overview: The website is designed as a fictitious cloud hosting platform. The design inspiration is drawn from Heroku, and the website comprises three main pages: home, features, and docs.

  🛠️ Modern Techniques: The tutorial emphasizes the use of modern web techniques such as CSS Grid for layout design, Flexbox for alignment, and animations for enhanced user experience.

  📝 Content Layout: The home page contains a navbar, a form for demo requests, stats with Font Awesome icons, a mock npm install section, supported programming languages, and a footer.

  📱 Responsiveness: The website is built with responsiveness in mind, ensuring it looks and functions seamlessly across devices of varying screen sizes. The design adjusts for tablet and mobile views, changing the direction of animations and optimizing the menu for smaller screens.

  🎨 Styling: The tutorial delves deep into styling, starting with the navbar. It introduces a container class to constrain content width, ensuring a clean and organized look on larger screens. The instructor also touches upon the importance of a consistent color scheme, typography, and more.

  📚 Learning Outcome: This project is beginner frinedly for those seeking to get into web development. It goes through the basics of  HTML, CSS, and JavaScript. It offers a practical approach to learning, ensuring that learners not only understand the theory but also know how to implement it in real-world scenarios.
`,

      image: raydeployImage,
      technologyStack: ["HTML", "Javascript", "CSS"],
      liveDemo: "https://clever-pasca-d05919.netlify.app/",
      githubRepo: "https://github.com/RaymondSWE/RayDeploy",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-down-right">Projects</h2>
      <div className="projects-carousel" data-aos="fade-down-left">
        <Carousel
          showIndicators={true} // Disable the dots navigation
          autoPlay={false}
          interval={8000}
          infiniteLoop={false}
          stopOnHover={true}
          swipeable={true}
          showStatus={false}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (link) => {
    if (!link) {
      alert("This link is not available.");
    }
  };

  const { title, description, image, liveDemo, githubRepo, technologyStack } =
    project;

  return (
    <div ref={ref} className={`project-card ${inView ? "in-view" : ""}`}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <h3>Technology</h3>
        <div className="project-technology">
          {technologyStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-buttons">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(liveDemo)}>
                <FontAwesomeIcon icon={faGlobe} /> Live Demo
              </button>
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleButtonClick(githubRepo)}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
            </a>
          )}
        </div>
        <div className="more-info-button">
          <button onClick={() => setModalOpen(true)}>
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        project={project}
      />
    </div>
  );
};

export default Projects;
