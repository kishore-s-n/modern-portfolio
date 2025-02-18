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
      title: "Education",
      items: ["B.E ECE at PSNA College of Enginerring and Technology (2021-2025)", "Relevant Course Work: Data Structures, Full Stack Development, Web Design, React JS Course, JavaScript Complete Course"]
    },
    {
      title: "Work Experience",
      items: ["IITM Hackathon: ", "ExpressJS"]
    }
  ]
}
export { navContents, loadingScreenString, homeSectionContent, aboutSectionContent };
