const loadingScreenString = "<Hello World!/>"

const navContents = {
  logoMain: "ItsKishore.",
  logoSpan: "Dev",
  navItems: ["Home", "About", "Projects", "Contact"],
  navItemsHref: ["#home", "#about", "#projects", "#contact"]

}

const homeSectionContent = {
  Heading: "Hi, I'm Kishore SN",
  Content: "I'm a full-stack developer and coding enthusiast who loves to create clean and scalable web applications. My goal is to build solutions that offer both exceptional performance and great user experience."
}
const aboutSectionContent = {
  Heading: "About Me",
  Content: "Passionate Software developer with expertise in tech stacks and clean code practices,I emphasise on doing anything the best way possible that can be done. This helps me to keep on learning great things as i develop.",
  Skills: [
    {
      title: "FrontEnd",
      items: ["ReactJS", "HTML", "CSS", "JavaScript", "TailwindCSS"]
    },
    {
      title: "BackEnd",
      items: ["NodeJS", "ExpressJS", "SpringBoot", "PostgreSQL", "MongoDB", "Redis"]
    }, {
      title: "DevOps",
      items: ["Docker", "Linux", "Git"]
    }, {
      title: "Miscellaneous",
      items: ["SOLID Principles", "System Design", "LLD", "HLD"]
    }
  ],
  Boxes: [
    {
      title: "📚 Education",
      content: ["B.E ECE at PSNA College of Enginerring and Technology (2021-2025)", "Relevant Course Work: Data Structures, Full Stack Development"]
    },
    {
      title: "💡 Project Experience",
      content: ["Developed several sites with responsive UI", "Designed and developed a microservice architectural backend and several monolithic backends"]
    }
  ]
}

const projectSectionContent = [{
  "id": 1,
  "title": "Microservice Back-End",
  "intro": "Developed a scalable backend system for a room booking platform using microservices architecture.",
  "content": [
    "heading Project Overview",
    "para A modular backend was built with Spring Boot and Node.js to handle authentication, booking, and payments independently. Eureka Service Discovery facilitated inter-service communication, while API Gateway centralized authentication and request routing. The system is designed to ensure high availability, fault tolerance, and seamless scalability.",

    "heading Key Features",
    "list Modular microservices enable independent deployment and scalability, allowing teams to work on different services without affecting others.",
    "list Eureka ensures dynamic service discovery and seamless inter-service communication, reducing the complexity of managing multiple endpoints.",
    "list API Gateway provides secure centralized routing and authentication, ensuring that only authorized requests reach the appropriate services.",
    "list Dockerized services simplify containerized deployment and improve portability, making it easier to deploy across various environments such as development, staging, and production.",
    "list Implemented logging and monitoring with tools like ELK Stack and Prometheus to track service health and troubleshoot issues efficiently."
  ],
  "skills": ["Spring Boot", "Node.js", "Eureka", "API Gateway", "Docker", "ELK Stack", "Prometheus"]
},
{
  "id": 2,
  "title": "Frontend Development",
  "intro": "Created modern frontend applications focusing on responsive UI/UX design principles.",
  "content": [
    "heading Project Overview",
    "para Developed multiple frontend projects using React.js and Tailwind CSS, including e-commerce platforms, blogs, and landing pages. These emphasize dynamic interfaces, optimal user experience, and fast loading times. Each project adheres to modern design standards, ensuring accessibility and usability across devices.",

    "heading Key Features",
    "list Responsive UI designed with Tailwind CSS ensures compatibility across devices, providing users with a consistent experience on mobile, tablet, and desktop.",
    "list State management implemented using React hooks and Context API for efficient data handling, enabling real-time updates and seamless interactions.",
    "list Optimized performance achieved through lazy loading and modular component structures, reducing initial load times and improving overall application speed.",
    "list Integrated third-party libraries like Redux for complex state management and Axios for efficient API calls, enhancing the robustness of the applications.",
    "list Conducted thorough testing using Jest and React Testing Library to ensure all components function correctly and meet quality standards."
  ],
  "skills": ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Redux", "Axios", "Jest", "React Testing Library"]
},
{
  "id": 3,
  "title": "Low-Level Design (LLD) Projects",
  "intro": "Designed low-level systems for real-world applications following SOLID principles.",
  "content": [
    "heading Project Overview",
    "para Implemented LLD for applications like Ola/Uber and Swiggy/Zomato using Java. The designs ensure maintainability, scalability, and adherence to best practices in software engineering. Each project involved detailed planning and iterative refinement to create efficient and reliable systems.",

    "heading Key Features",
    "list Ride management system for Ola/Uber includes driver-rider allocation logic, real-time tracking, and fare calculation algorithms to enhance user experience.",
    "list Order processing system for Swiggy/Zomato handles restaurant orders and delivery workflows, ensuring timely deliveries and accurate order status updates.",
    "list SOLID principles and design patterns form the foundation of scalable and robust architecture, promoting code reusability and easier maintenance.",
    "list Utilized database optimization techniques such as indexing and query optimization to handle large volumes of data efficiently.",
    "list Incorporated unit testing frameworks like JUnit to validate functionality and prevent regressions during future updates."
  ],
  "skills": ["Java", "System Design", "SOLID Principles", "Design Patterns", "JUnit"]
}]


export { navContents, loadingScreenString, homeSectionContent, aboutSectionContent, projectSectionContent };
