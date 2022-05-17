import React from "react";

const ProjectElement = ({ projectName, projectDesc }) => {
  return (
    <div className="project-element">
      <h3 className="project-element-heading">{projectName}</h3>
      <p className="project-element-text">{projectDesc}</p>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <h2 className="section-heading">I have worked on</h2>
      <div className="project-element-holder">
        {projects.map((project) => (
          <ProjectElement
            key={project.projectName}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
