import React from "react"; // Import React

function ProjectItem({ name, about, technologies }) { // ProjectItem component with props
  return (
    <div className="project-item"> {/* Outer container */}
      <h3>{name}</h3> {/* Project name */}
      <p>{about}</p> {/* Project description */}
      <div className="technologies"> {/* Container for tech list */}
        {technologies.map((tech) => ( // Loop through technologies
          <span key={tech}>{tech}</span> // One <span> per technology
        ))}
      </div>
    </div>
  );
}

export default ProjectItem; // Export ProjectItem