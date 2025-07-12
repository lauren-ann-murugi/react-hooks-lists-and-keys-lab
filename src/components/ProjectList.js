import React from "react"; // Import React
import ProjectItem from "./ProjectItem"; // Import ProjectItem component

function ProjectList({ projects }) { // ProjectList component with projects prop
  return (
    <div id="projects"> {/* Outer container */}
      <h2>My Projects</h2> {/* Section heading */}
      <div id="project-list"> {/* Container for list of ProjectItems */}
        {projects.map((project) => ( // Loop through projects
          <ProjectItem
            key={project.id} // Unique key for each item
            name={project.name} // Pass name prop
            about={project.about} // Pass about prop
            technologies={project.technologies} // Pass technologies prop
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList; // Export ProjectList