
import { aboutSectionContent } from "../../constants/constant"
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {aboutSectionContent.Heading}
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{aboutSectionContent.Content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutSectionContent.Skills.map((skill, index) => (
                <div key={index} className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2"> {skill.items.map((item, ind) => (
                    <span key={ind} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                      {item}
                    </span>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {aboutSectionContent.Boxes.map((box, index) => (
              <div key={index} className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h2 className="text-xl font-bold mb-4">{box.title}</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {box.content.map((content, ind) => <li>{content}</li>)}
                </ul>
              </div>
            ))}
          </div>


        </div>
      </RevealOnScroll>

    </section>
  )
}

export default About;
