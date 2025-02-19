
import { useParams, useNavigate } from "react-router-dom";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { projectSectionContent as projects } from "../constants/constant";

const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from URL
  const navigate = useNavigate(); // For navigating back

  // Find the project by ID
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) return <h2 className="text-center text-red-500">Project Not Found</h2>;

  return (
    <section className="container mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Projects
      </button>

      {/* Project Title & GitHub Link */}
      <h1 className="text-4xl font-bold text-gray-200">{project.title}</h1>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Repository
      </a>

      {/* Content Rendering */}
      <div className="mt-6 space-y-4">
        {project.content.map((item, index) => {
          const [type, text] = item.split(" ", 2); // Extract type and text
          const restText = item.slice(type.length).trim();

          if (type === "heading") return <h2 key={index} className="text-2xl font-semibold text-gray-300">{restText}</h2>;
          if (type === "para") return <p key={index} className="text-gray-400">{restText}</p>;
          if (type === "list") return <li key={index} className="text-gray-400 list-disc list-inside">{restText}</li>;
        })}
      </div>

      {/* Skills Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm">
            {skill}
          </span>
        ))}
      </div>

      {/* React Flow Diagram */}
      <div className="mt-10 h-[400px] border border-gray-700 rounded-lg">
        <ReactFlow nodes={project.initNodes} edges={project.initEdges} fitView />
      </div>
    </section>
  );
};

export default ProjectDetail;

