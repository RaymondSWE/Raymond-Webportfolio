import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Projects.css";
import "./ProjectModal.css";
import csgoImage from "../../img/csgo.png";
import blackjackImage from "../../img/blackjack.png";
import codemateImage from "../../img/codemate.png";
import taskmanagementImage from "../../img/Todo-javaswing.png";
import raydeployImage from "../../img/RayDeploy.png";
import webportfolioImage from "../../img/webportfolio.png";
import massageAppImage from "../../img/massageapp.png";
import snipeskinsImage from "../../img/snipeskins.jpg";
import queueStudentImage from "../../img/queue-student.png"
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import ProjectModal from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CSFairTrade",
      startDate: "2021-12-25",
      endDate: "Ongoing",
      description:
        "A full-stack trading platform providing a secure and user friendly environment for trading ingame skins in the CS:GO market, estimated over 1 billion euros.",
      detailedDescription: `
      
          📈 Market Comparison: Similar platforms like SkinBaron and DMarket have shown the potential of digital asset trading platforms, each generating revenues of $10 million and upwards. CSFairTrade is aimed at capturing a share of this market by offering an enhanced user experience.
  
          🛠️ Technology Stack: CSFairTrade utilizes a modern web tech stack with React.js for an interactive frontend, Node.js and Express.js for the backend, and MySQL for data management in an MVC architecture. I've also integrated Socket.IO for real time bidirectional communication between users and bots, complemented with HTTPS requests for data display and manipulation. Sequelize for ORM

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
        "Socket.io",
        "HTTPS",
        "Nginx",
        "Digital Ocean",
        "Azure",
        "Jest",
        "Postman",
        "Steam Modules",
        "Sequelize",
        "Linux (Ubuntu)",
        "Event-driven architecture",
        "Github",
        "Prettier",
      ],
      liveDemo: "https://csfairtrade-frontend.vercel.app/",
      githubRepo: null,
      demoVideo: "https://www.youtube.com/watch?v=fYdAn0O2g0Q",
    },
    {
      "id": 2,
      "title": "CodeMate",
      "startDate": "2023-11-23",
      "endDate": "Ongoing",
      "description": 
        "A dynamic platform designed to enhance collaboration among students in the tech field, facilitating the sharing of ideas, project development, and networking opportunities.",
      "detailedDescription": `
        🤝 Collaboration Hub: CodeMate acts as a bridge connecting students from various technical backgrounds. It offers a space for finding co-founders, sharing innovative project ideas, and networking.
    
        🛠️ Technology Stack: Using a combination of Next.js for front-end development, and Spring Boot for back-end architecture, CodeMate integrates modern web technologies. It also utilizes useContext for state management and React/Tan Query for efficient data fetching.
    
        🎓 Skill Showcase: Students can exhibit their technical knowledge to attract potential co-founders and investors. The platform provides a portfolio feature to display projects and skills.
    
        🚀 Attracting Investors: By showcasing compelling projects, students can draw the attention of potential investors, aiding in kickstarting their entrepreneurial journey.
    
        🌐 Full Stack Development: The server side, managed by Spring Boot which provides features like AMQP for messaging, and Data JPA for database interactions. It also includes integrated OAuth2 and JWT for secure authentication. To ensure a good development and production environment, CI/CD was implemented at the beginning of the project.

        🐳 Docker Integration: Utilizes Docker containers for essential services. MySQL container handles the database needs, and RabbitMQ container facilitates message oriented middleware for the platform.
    
        🧪 Testing and Quality Assurance: Emphasis on testing with Jest for the front end, and dedicated Spring Boot testing tools for the back end. I'd like to implement Cypress for the end to end testing in the future.
        
      `,
      "image": codemateImage,
      "technologyStack": [
        "Java",
        "Typescript",
        "Nextjs",
        "NextUI",
        "Spring Boot",
        "Redux",
        "React/Tan Query",
        "Axios",
        "Data JPA",
        "OAuth2",
        "JWT",
        "Jest",
        "MySQL",
        "RabbitMQ",
        "AMQP",
        "HTTPS",
        "Lombok",
        "Liquibase",
        "Docker",
        "Github",
        "Github Actions",
        "Sonarlint",
        "Postman",
        "Linux",
        "IntelliJ",
        "VSCode",
        "TailwindCSS",
        "React",
      ],
      "liveDemo": "https://codecomrades.vercel.app/",
      "githubRepo": null,
    },    
    {
      id: 3,
      title: "SnipeSkins",
      startDate: "2023-08-12",
      endDate: "Ongoing",
      description:
        "A comprehensive trading platform designed for Rust ingame skins.  SnipeSkins aims to provide a seamless experience for trading digital assets in the expanding Rust market.",

      detailedDescription: `
      📈 Market Positioning: Drawing inspiration from platforms such as RustSkins.com, the site aspires to offer an enhanced user experience, ensuring an easy way of trading for the game enthusiast community.

      🏅 Recognition & Teamwork: My work on CSFairTrade led to me being approached for SnipeSkins, a testament to my technical skills and contribution to the gaming community. Throughout the development process of SnipeSkins, I had the privilege of collaborating with two senior developers with over 6+ years of experience.

      🛠️ Technology Stack: The platform consist of latest technologies. Node.js powers backend operations, while Next.js, enhanced with server side rendering, ensures a dynamic frontend experience. Prisma handles data, and real time interactions are driven by Socket.io. Furthermore, the entire project is dockerized, ensuring consistency across various environments. Additionally, we utilize a monorepo structure with NextJS, which simplifies the management of the codebase and promotes code reusability.
      
      💼 User Interaction: Players can log in using their Steam accounts, seamlessly integrating their ingame inventories with the marketplace. Once onboarded, they can list items for sale, set pricing strategies, or browse and purchase skins listed by others.

      🎮 Features: Beyond integrating Steam API, SnipeSkins showcases an expansive marketplace, different payment methods and cashout options.  

      `,
      image: snipeskinsImage,
      technologyStack: [
        "Next.js",
        "Node.js",
        "Prisma",
        "Socket.io",
        "Redis",
        "TailwindCSS",
        "Zen",
        "Sumsub",
        "Docker",
        "Steam Modules",
        "Postman",
        "Web3",
        "HTTPS",
        "Github",
      ],
      liveDemo: "https://snipeskins.com/",
      githubRepo: null,
    },
    {
      id: 4,
      title: "Distributed Queue System For Students",
      startDate: "2023-09-05",
      endDate: "2023-09-29",
      description:
        "Developed an Event-driven queue system for students and supervisors with Zeromq, Springboot and Python",
      detailedDescription: `
    
      🤝 Collaboration: I teamed up with another student to develop a Distributed Queue System for students supervisor in the course "Distributed system". Both of us focused on creating a structured workflow, implementing server and client side functionalities, and maintaining project documentation.

      🛠️ Tech Stack: The project using technologies such as Java 17, Python 3.12, Maven, Spring Boot, ZeroMQ, and Tkinter, showcasing a blend of technologies with a good user design desktop interface.

      📚 Features & Reflection: The Distributed Queue System is built with an event-driven architecture, featuring a Pub/Sub and Request/Respond pattern through ZeroMQ sockets. It incorporates mechanisms like heartbeats for maintaining client presence in the queue and used in communication between students, supervisors, and the server. The system can even connect with external API if wished by user.

      🚀 Growth: The experience of developing this project showcases the workflows, code reviews, and a well organized codebase. I have learned the how to build properly event-driven architecture and balancing between different technologies. This is my second event-driven project, first one was with Socket.IO with NodeJS (CSFairTrade). CSfairtrade event driven strucutre  was a bit more complicated which included communication between external API (having accounts as bots in Steam API) communicating with users, such as trading etc. But it was fun seeing the difference of implementation of these two different sockets in different langauges. Looking forward, I want to implement more advanced concepts and tools, like implementing CI/CD pipelines and evaluating another libraries for GUI development (such as PySide).

      📘 Documentation & Architecture: The documentation provides a readme file that consist overview of the project, covering aspects from installation to API endpoints. The system adopts an event-driven architecture, with detailed explanations of the components, such as Event Object, Event Listener, Service Folder, Config Files, and Workers.

    `,
      image: queueStudentImage,
      technologyStack: [
        "Sonarlint",
        "Github",
        "Linux",
        "Spring Boot",
        "Java",
        "ZeroMQ",
        "Python",
        "Lombok",
        "Tkinter",
        "Sockets",
        "Event-driven architecture",
      ],
      liveDemo: "https://www.youtube.com/watch?v=m-omLSKbUtc",
      githubRepo: "https://github.com/RaymondSWE/Queue-system---Event-Driven-Architecture",
      demoVideo: "https://www.youtube.com/watch?v=m-omLSKbUtc",
    },
    {
      id: 5,
      title: "Booking Application For Company Employees",
      startDate: "2022-06-05",
      endDate: "2022-07-12",
      description:
        "Developed a appointment management system for Bally's employees during my internship with other interns. Providing a system for the workers for their daily massage.",
      detailedDescription: `
    
      🤝 Collaboration: I collaborated with other students in a team to develop a Massage application for Bally's employees. My primary responsibility involved designing the database and implementing the backend logic for the application.

      🛠️ Tech Stack: We utilized MySQL, React, and Spring Boot to create the application.
      
      📚 Features & Reflection: The application enabled users to book, and if necessary, rebook a single massage appointment. After the appointment ends, they could then book another for the upcoming weeks. Administrators had the capacity to manage appointments, as in creating, modifying, or deleting them as needed. Although this was my first full-stack project, I would say the outcome was good and not a disaster.
      
      🔐 Authentication: While Okta was integrated user authentication, we encountered challenges. These were later resolved by a senior developer. I was informed later on that the issues was from Okta's end.
      
      🚀 Growth: This project emphasized the value of teamwork and improved my problem solving skills. Reflecting on it, I recognized the significance of clean coding and the need to prioritize its principles. While I did maintain good naming conventions, some parts of the codebase could benefit from refactoring to better follow with clean code principles like DRY (Don't Repeat Yourself), KISS (Keep It Simple), and SRP (Single Responsibility Principle).      `,
      image: massageAppImage,
      technologyStack: [
        "MySQL",
        "React",
        "Material UI",
        "Spring Boot",
        "Liquibase",
        "Scrum",
        "HTTP",
        "Gitlab",
        "VsCode",
        "IntellJ",
      ],
      liveDemo: "https://massage.silverspin.com/",
      githubRepo: null,
    },
    {
      id: 6,
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
      technologyStack: ["Java", "Java Swing", "Github", "Eclipse"],
      liveDemo: null,
      githubRepo: "https://github.com/RaymondSWE/Blackjack-game",
    },
    {
      id: 7,
      title: "Web Portfolio",
      startDate: "2023-06-25",
      endDate: "Ongoing",
      description:
        "My personal web portfolio is designed to be a comprehensive showcase of my skills, experiences, and projects. As a developer, I understand the importance of presenting oneself in a digital format that is both user friendly and informative.",
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
      id: 8,
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
      <div className="projects-grid" data-aos="fade-down-left">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
      toast.error("This link is not available.");
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
        <div className="project-technology">
          {technologyStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <div>
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleButtonClick(githubRepo)}
          >
            <button className="link-button">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </button>
          </a>
        </div>
        <div>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleButtonClick(liveDemo)}
          >
            <button className="link-button">
              <FontAwesomeIcon icon={faGlobe} /> Live Preview
            </button>
          </a>
        </div>
      </div>
      <div className="more-info-button">
        <button onClick={() => setModalOpen(true)}>
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
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
