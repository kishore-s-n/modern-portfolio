import React, { useState } from 'react';

const ProjectPage = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-[70%] border rounded-lg shadow-md overflow-hidden bg-white transition-transform transform hover:scale-105">
      {/* Card Header */}
      <div
        className="p-4 cursor-pointer bg-blue-500"
        onClick={toggleDetails}
      >
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.intro}</p>
      </div>

      {/* Card Content (Hidden by Default) */}
      {isOpen && (
        <div className="p-4 bg-white">
          {project.content.map((item, index) => {
            if (item.startsWith("heading")) {
              return (
                <h3 key={index} className="text-lg font-semibold mt-4">
                  {item.replace("heading ", "")}
                </h3>
              );
            } else if (item.startsWith("para")) {
              return (
                <p key={index} className="text-gray-700 mt-2">
                  {item.replace("para ", "")}
                </p>
              );
            } else if (item.startsWith("list")) {
              return (
                <li key={index} className="list-disc list-inside text-gray-700 mt-1">
                  {item.replace("list ", "")}
                </li>
              );
            }
            return null;
          })}
          <div className="mt-4">
            <h4 className="font-semibold">Skills:</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProjectPage;
