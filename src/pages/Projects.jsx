import { projectSectionContent as projects } from '../constants/constant';
const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-4">
      <h1 className="md:text-5xl text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-8">Projects</h1>
      <div className="flex flex-col gap-10  mx-[10%]">
        {projects.map((project, index) => (
          <div id={index} className='border border-white/10 rounded-lg p-5 ' >
            <h2 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>{project.title}</h2>
            <h3>{project.intro}</h3>
            <div className='flex flex-wrap gap-2.5 mt-5'>
              {project.skills.map((skill, key) => (
                <span className='text-sm px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500'>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
