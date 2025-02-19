
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { projectSectionContent as projects } from '../constants/constant';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-4">
      <RevealOnScroll>
        <h1 className="md:text-5xl text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-8">
          Projects
        </h1>
        <div className="flex flex-col gap-10 mx-[10%]">
          {projects.map((project, index) => (
            <div key={index} id={`project-${index}`} className="border border-white/10 rounded-lg p-5 hover:-translate-y-2 transition-all duration-200">
              <Link to={`/project/${index + 1}`} ><h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{project.title}</h2>
                <h3>{project.intro}</h3>
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {project.skills.map((skill, skillIndex) => (

                    <span key={skillIndex} className="text-sm px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500">{skill}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </RevealOnScroll >
    </section >
  );
};

export default Projects;

