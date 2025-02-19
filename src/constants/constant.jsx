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

const projectSectionContent =
  [


    {
      "id": 1,
      "title": "Microservice Back-End",
      "intro": "Developed a scalable backend system for a room booking platform using microservices architecture.",
      "repo": "https://github.com/kishore-s-n/Room_Booking_Site",
      "content": [
        "heading Project Overview",
        "para A modular backend was built with Spring Boot and Node.js to handle authentication, booking, payments, and other functionalities independently. Eureka Service Discovery facilitated inter-service communication, while API Gateway centralized authentication and request routing. The system is designed to ensure high availability, fault tolerance, and seamless scalability.",

        "heading Key Features",
        "list Modular microservices enable independent deployment and scalability, allowing teams to work on different services without affecting others.",
        "list Eureka ensures dynamic service discovery and seamless inter-service communication, reducing the complexity of managing multiple endpoints.",
        "list API Gateway provides secure centralized routing and authentication, ensuring that only authorized requests reach the appropriate services.",
        "list Dockerized services simplify containerized deployment and improve portability, making it easier to deploy across various environments such as development, staging, and production.",
        "list Implemented logging and monitoring with tools like ELK Stack and Prometheus to track service health and troubleshoot issues efficiently."
      ],
      "skills": ["Spring Boot", "Node.js", "Eureka", "API Gateway", "Docker"],
      "initNodes": [
        { "id": "1", "type": "input", "data": { "label": "<div class='bg-blue-700 text-white p-3 rounded-lg shadow-md'>Client Request</div>" }, "position": { "x": 100, "y": 100 } },
        { "id": "2", "data": { "label": "<div class='bg-black text-white p-3 rounded-lg shadow-md'>API Gateway</div>" }, "position": { "x": 200, "y": 200 } },
        { "id": "3", "data": { "label": "<div class='bg-blue-600 text-white p-3 rounded-lg shadow-md'>Booking Service (Spring Boot 8081)</div>" }, "position": { "x": 100, "y": 300 } },
        { "id": "4", "data": { "label": "<div class='bg-blue-600 text-white p-3 rounded-lg shadow-md'>Payment Service (Spring Boot 8082)</div>" }, "position": { "x": 200, "y": 300 } },
        { "id": "5", "data": { "label": "<div class='bg-blue-600 text-white p-3 rounded-lg shadow-md'>Customer/User Service (Spring Boot 8083)</div>" }, "position": { "x": 300, "y": 300 } },
        { "id": "6", "data": { "label": "<div class='bg-black text-white p-3 rounded-lg shadow-md'>Host Service (Node.js 8084)</div>" }, "position": { "x": 400, "y": 300 } },
        { "id": "7", "data": { "label": "<div class='bg-black text-white p-3 rounded-lg shadow-md'>Report Service (Node.js 8085)</div>" }, "position": { "x": 500, "y": 300 } },
        { "id": "8", "data": { "label": "<div class='bg-black text-white p-3 rounded-lg shadow-md'>Rooms Service (Node.js 8086)</div>" }, "position": { "x": 600, "y": 300 } },
        { "id": "9", "data": { "label": "<div class='bg-black text-white p-3 rounded-lg shadow-md'>Review Service (Node.js 8087)</div>" }, "position": { "x": 700, "y": 300 } },
        { "id": "10", "data": { "label": "<div class='bg-blue-700 text-white p-3 rounded-lg shadow-md'>Netflix Eureka (Spring Boot 8761)</div>" }, "position": { "x": 800, "y": 400 } }
      ],
      "initEdges": [
        { "id": "e1-2", "source": "1", "target": "2", "className": "stroke-blue-500" },
        { "id": "e2-3", "source": "2", "target": "3", "className": "stroke-blue-500" },
        { "id": "e2-4", "source": "2", "target": "4", "className": "stroke-blue-500" },
        { "id": "e2-5", "source": "2", "target": "5", "className": "stroke-blue-500" },
        { "id": "e2-6", "source": "2", "target": "6", "className": "stroke-gray-500" },
        { "id": "e2-7", "source": "2", "target": "7", "className": "stroke-gray-500" },
        { "id": "e2-8", "source": "2", "target": "8", "className": "stroke-gray-500" },
        { "id": "e2-9", "source": "2", "target": "9", "className": "stroke-gray-500" },
        { "id": "e3-10", "source": "3", "target": "10", "className": "stroke-blue-500" },
        { "id": "e4-10", "source": "4", "target": "10", "className": "stroke-blue-500" },
        { "id": "e5-10", "source": "5", "target": "10", "className": "stroke-blue-500" },
        { "id": "e6-10", "source": "6", "target": "10", "className": "stroke-gray-500" },
        { "id": "e7-10", "source": "7", "target": "10", "className": "stroke-gray-500" },
        { "id": "e8-10", "source": "8", "target": "10", "className": "stroke-gray-500" },
        { "id": "e9-10", "source": "9", "target": "10", "className": "stroke-gray-500" }
      ]
    }
    ,
    {
      "id": 2,
      "title": "Frontend Development",
      "intro": "Created modern frontend applications focusing on responsive UI/UX design principles.",
      "repo": "https://github.com/kishore-s-n/template_landing_page",
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
      "skills": ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Redux", "Axios", "Jest", "React Testing Library"],
      "initNodes": [
        { "id": "1", "type": "input", "data": { "label": "User Interaction" }, "position": { "x": 250, "y": 25 } },
        { "id": "2", "data": { "label": "React Component" }, "position": { "x": 250, "y": 100 } },
        { "id": "3", "data": { "label": "State Management" }, "position": { "x": 250, "y": 200 } }
      ],
      "initEdges": [
        { "id": "e1-2", "source": "1", "target": "2" },
        { "id": "e2-3", "source": "2", "target": "3" }
      ]
    },
    {
      "id": 3,
      "title": "Low-Level Design (LLD) Projects",
      "intro": "Designed low-level systems for real-world applications following SOLID principles.",
      "repo": "https://github.com/kishore-s-n/OLA_UBER_LLD_Project",
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
      "skills": ["Java", "System Design", "SOLID Principles", "Design Patterns", "JUnit"],
      "initNodes": [
        { "id": "1", "type": "input", "data": { "label": "User Request" }, "position": { "x": 250, "y": 25 } },
        { "id": "2", "data": { "label": "Ride Management" }, "position": { "x": 250, "y": 100 } },
        { "id": "3", "data": { "label": "Payment Processing" }, "position": { "x": 250, "y": 200 } }
      ],
      "initEdges": [
        { "id": "e1-2", "source": "1", "target": "2" },
        { "id": "e2-3", "source": "2", "target": "3" }
      ]
    }]

export { navContents, loadingScreenString, homeSectionContent, aboutSectionContent, projectSectionContent };
