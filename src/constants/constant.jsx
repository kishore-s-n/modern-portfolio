const loadingScreenString = "<Hello World!/>";

const navContents = {
  logoMain: "ItsKishore.",
  logoSpan: "Dev",
  navItems: ["Home", "About", "Projects", "Contact"],
  navItemsHref: ["#home", "#about", "#projects", "#contact"],
};

const homeSectionContent = {
  Heading: "Hi, I'm Kishore SN",
  Content:
    "I'm a full-stack developer and coding enthusiast who loves to create clean and scalable web applications. My goal is to build solutions that offer both exceptional performance and great user experience.",
};
const aboutSectionContent = {
  Heading: "About Me",
  Content:
    "Passionate Software developer with expertise in tech stacks and clean code practices,I emphasise on doing anything the best way possible that can be done. This helps me to keep on learning great things as i develop.",
  Skills: [
    {
      title: "FrontEnd",
      items: ["ReactJS", "HTML", "CSS", "JavaScript", "TailwindCSS"],
    },
    {
      title: "BackEnd",
      items: [
        "NodeJS",
        "ExpressJS",
        "SpringBoot",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "DevOps",
      items: ["Docker", "Linux", "Git"],
    },
    {
      title: "Miscellaneous",
      items: ["SOLID Principles", "System Design", "LLD", "HLD"],
    },
  ],
  Boxes: [
    {
      title: "📚 Education",
      content: [
        "B.E ECE at PSNA College of Enginerring and Technology (2021-2025)",
        "Relevant Course Work: Data Structures, Full Stack Development",
      ],
    },
    {
      title: "💡 Project Experience",
      content: [
        "Developed several sites with responsive UI",
        "Designed and developed a microservice architectural backend and several monolithic backends",
      ],
    },
  ],
};

const projectSectionContent = [
  {
    id: 1,
    title: "Microservice Back-End",
    intro:
      "Developed a scalable backend system for a room booking platform using microservices architecture.",
    repo: "https://github.com/kishore-s-n/Room_Booking_Site",
    content: [
      "heading Project Overview",
      "para A modular backend was built with Spring Boot and Node.js to handle authentication, booking, payments, and other functionalities independently. Eureka Service Discovery facilitated inter-service communication, while API Gateway centralized authentication and request routing. The system is designed to ensure high availability, fault tolerance, and seamless scalability.",

      "heading Key Features",
      "list Modular microservices enable independent deployment and scalability, allowing teams to work on different services without affecting others.",
      "list Eureka ensures dynamic service discovery and seamless inter-service communication, reducing the complexity of managing multiple endpoints.",
      "list API Gateway provides secure centralized routing and authentication, ensuring that only authorized requests reach the appropriate services.",
      "list Dockerized services simplify containerized deployment and improve portability, making it easier to deploy across various environments such as development, staging, and production.",
    ],
    skills: ["Spring Boot", "Node.js", "Eureka", "API Gateway", "Docker"],
    initNodes: [
      {
        id: "1",
        type: "input",
        data: { label: "React Client" },
        position: { x: 400, y: 100 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },

      {
        id: "2",
        data: { label: "API Gateway" },
        position: { x: 600, y: 200 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "3",
        data: { label: "Booking Service (Spring Boot)" },
        position: { x: 50, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "4",
        data: { label: "Payment Service (Spring Boot)" },
        position: { x: 250, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "5",
        data: { label: "Customer/User Service (Spring Boot)" },
        position: { x: 450, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "6",
        data: { label: "Host Service (Node.js)" },
        position: { x: 650, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "7",
        data: { label: "Report Service (Node.js)" },
        position: { x: 850, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "8",
        data: { label: "Rooms Service (Node.js)" },
        position: { x: 1050, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "9",
        data: { label: "Review Service (Node.js)" },
        position: { x: 1250, y: 300 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
      {
        id: "10",
        data: { label: "Netflix Eureka (Spring Boot)" },
        position: { x: 800, y: 100 },
        style: {
          fontSize: "15px",
          backgroundColor: "#F0FFFF",
          color: "#0000FF",
          borderRadius: "10px",
        },
      },
    ],
    initEdges: [
      { id: "e1-3", source: "1", target: "2" },
      { id: "e1-4", source: "1", target: "2" },
      { id: "e1-5", source: "1", target: "2" },
      { id: "e1-6", source: "1", target: "2" },
      { id: "e1-7", source: "1", target: "2" },
      { id: "e1-8", source: "1", target: "2" },
      { id: "e1-9", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      { id: "e2-4", source: "2", target: "4" },
      { id: "e2-5", source: "2", target: "5" },
      { id: "e2-6", source: "2", target: "6" },
      { id: "e2-7", source: "2", target: "7" },
      { id: "e2-8", source: "2", target: "8" },
      { id: "e2-9", source: "2", target: "9" },
      { id: "e10-2", source: "10", target: "2" },
      { id: "e10-3", source: "10", target: "3" },
      { id: "e10-4", source: "10", target: "4" },
      { id: "e10-5", source: "10", target: "5" },
      { id: "e10-6", source: "10", target: "6" },
      { id: "e10-7", source: "10", target: "7" },
      { id: "e10-8", source: "10", target: "8" },
      { id: "e10-9", source: "10", target: "9" },
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    intro:
      "Created modern frontend applications focusing on responsive UI/UX design principles.",
    repo: "https://github.com/kishore-s-n/template_landing_page",
    content: [
      "heading Project Overview",
      "para Developed multiple frontend projects using React.js and Tailwind CSS, including e-commerce platforms, blogs, and landing pages. These emphasize dynamic interfaces, optimal user experience, and fast loading times. Each project adheres to modern design standards, ensuring accessibility and usability across devices.",

      "heading Key Features",
      "list Responsive UI designed with Tailwind CSS ensures compatibility across devices, providing users with a consistent experience on mobile, tablet, and desktop.",
      "list State management implemented using React hooks and Context API for efficient data handling, enabling real-time updates and seamless interactions.",
      "list Optimized performance achieved through lazy loading and modular component structures, reducing initial load times and improving overall application speed.",
      "list Integrated third-party libraries like Redux for complex state management and Axios for efficient API calls, enhancing the robustness of the applications.",
      "list Conducted thorough testing using Jest and React Testing Library to ensure all components function correctly and meet quality standards.",
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux",
      "Axios",
      "Jest",
      "React Testing Library",
    ],
    initNodes: [
      {
        id: "loadBalancer",
        data: { label: "Load Balancer" },
        position: { x: 400, y: 100 },
      },
      {
        id: "frontendApp",
        data: { label: "Frontend App (React/Vue)" },
        position: { x: 400, y: 250 },
      },
      {
        id: "cdn",
        data: { label: "CDN (Static Assets)" },
        position: { x: 700, y: 250 },
      },
      {
        id: "stateManagement",
        data: { label: "State Management (Redux/Zustand)" },
        position: { x: 250, y: 400 },
      },
      {
        id: "routing",
        data: { label: "Routing (React Router/Next.js)" },
        position: { x: 550, y: 400 },
      },
      {
        id: "componentLibrary",
        data: { label: "Component Library (Tailwind/MUI)" },
        position: { x: 400, y: 550 },
      },
      {
        id: "apiCalls",
        data: { label: "API Calls (Fetch/Axios)" },
        position: { x: 250, y: 700 },
      },
      {
        id: "errorHandling",
        data: { label: "Error Handling (Sentry/LogRocket)" },
        position: { x: 550, y: 700 },
      },
    ],
    initEdges: [
      {
        id: "loadBalancer-frontendApp",
        source: "loadBalancer",
        target: "frontendApp",
        label: "Routes Traffic To",
      },
      {
        id: "frontendApp-cdn",
        source: "frontendApp",
        target: "cdn",
        label: "Loads Assets From",
      },
      {
        id: "frontendApp-stateManagement",
        source: "frontendApp",
        target: "stateManagement",
        label: "Manages State",
      },
      {
        id: "frontendApp-routing",
        source: "frontendApp",
        target: "routing",
        label: "Handles Navigation",
      },
      {
        id: "frontendApp-componentLibrary",
        source: "frontendApp",
        target: "componentLibrary",
        label: "Uses UI Components",
      },
      {
        id: "frontendApp-apiCalls",
        source: "frontendApp",
        target: "apiCalls",
        label: "Fetches Data",
      },
      {
        id: "frontendApp-errorHandling",
        source: "frontendApp",
        target: "errorHandling",
        label: "Logs Errors",
      },
    ],
  },
  {
    id: 3,
    title: "Low-Level Design (LLD) Projects",
    intro:
      "Designed low-level systems for real-world applications following SOLID principles.",
    repo: "https://github.com/kishore-s-n/OLA_UBER_LLD_Project",
    content: [
      "heading Project Overview",
      "para Implemented LLD for applications like Ola/Uber and Swiggy/Zomato using Java. The designs ensure maintainability, scalability, and adherence to best practices in software engineering. Each project involved detailed planning and iterative refinement to create efficient and reliable systems.",

      "heading Key Features",
      "list Ride management system for Ola/Uber includes driver-rider allocation logic, real-time tracking, and fare calculation algorithms to enhance user experience.",
      "list Order processing system for Swiggy/Zomato handles restaurant orders and delivery workflows, ensuring timely deliveries and accurate order status updates.",
      "list SOLID principles and design patterns form the foundation of scalable and robust architecture, promoting code reusability and easier maintenance.",
      "list Utilized database optimization techniques such as indexing and query optimization to handle large volumes of data efficiently.",
      "list Incorporated unit testing frameworks like JUnit to validate functionality and prevent regressions during future updates.",
    ],
    skills: [
      "Java",
      "System Design",
      "SOLID Principles",
      "Design Patterns",
      "JUnit",
    ],

    initNodes: [
      { id: "trip", data: { label: "Trip" }, position: { x: 400, y: 100 } },
      {
        id: "tripMetaData",
        data: { label: "TripMetaData" },
        position: { x: 800, y: 100 },
      },

      {
        id: "tripMgr",
        data: { label: "TripMgr" },
        position: { x: 400, y: 250 },
      },
      {
        id: "strategyMgr",
        data: { label: "StrategyMgr" },
        position: { x: 1000, y: 250 },
      },

      {
        id: "riderMgr",
        data: { label: "RiderMgr" },
        position: { x: 200, y: 400 },
      },
      {
        id: "driverMgr",
        data: { label: "DriverMgr" },
        position: { x: 600, y: 400 },
      },

      { id: "rider", data: { label: "Rider" }, position: { x: 100, y: 550 } },
      { id: "driver", data: { label: "Driver" }, position: { x: 700, y: 550 } },

      {
        id: "pricingStrategy",
        data: { label: "<<PricingStrategy>>" },
        position: { x: 900, y: 400 },
      },
      {
        id: "matchingStrategy",
        data: { label: "<<DriverMatchingStrategy>>" },
        position: { x: 1100, y: 400 },
      },

      {
        id: "defaultPricing",
        data: { label: "DefaultPricingStrategy" },
        position: { x: 850, y: 550 },
      },
      {
        id: "ratingBasedPricing",
        data: { label: "RatingBasedPricingStrategy" },
        position: { x: 950, y: 550 },
      },
      {
        id: "leastTimeMatching",
        data: { label: "LeastTimeBasedMatchingStrategy" },
        position: { x: 1150, y: 550 },
      },
    ],
    initEdges: [
      {
        id: "trip-tripMgr",
        source: "trip",
        target: "tripMgr",
        label: "Manages",
      },
      {
        id: "trip-tripMetaData",
        source: "trip",
        target: "tripMetaData",
        label: "Has Meta Data",
      },

      {
        id: "tripMgr-riderMgr",
        source: "tripMgr",
        target: "riderMgr",
        label: "Uses",
      },
      {
        id: "tripMgr-driverMgr",
        source: "tripMgr",
        target: "driverMgr",
        label: "Uses",
      },

      {
        id: "riderMgr-rider",
        source: "riderMgr",
        target: "rider",
        label: "Manages",
      },
      {
        id: "driverMgr-driver",
        source: "driverMgr",
        target: "driver",
        label: "Manages",
      },

      {
        id: "tripMgr-strategyMgr",
        source: "tripMgr",
        target: "strategyMgr",
        label: "Uses",
      },

      {
        id: "strategyMgr-pricingStrategy",
        source: "strategyMgr",
        target: "pricingStrategy",
        label: "Determines",
      },
      {
        id: "strategyMgr-matchingStrategy",
        source: "strategyMgr",
        target: "matchingStrategy",
        label: "Determines",
      },

      {
        id: "pricingStrategy-defaultPricing",
        source: "pricingStrategy",
        target: "defaultPricing",
        label: "Implements",
      },
      {
        id: "pricingStrategy-ratingBasedPricing",
        source: "pricingStrategy",
        target: "ratingBasedPricing",
        label: "Implements",
      },

      {
        id: "matchingStrategy-leastTimeMatching",
        source: "matchingStrategy",
        target: "leastTimeMatching",
        label: "Implements",
      },
    ],
  },
];

export {
  aboutSectionContent,
  homeSectionContent,
  loadingScreenString,
  navContents,
  projectSectionContent,
};
