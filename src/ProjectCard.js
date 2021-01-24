import React from "react";

function ProjectCard(project) {


  return (
    <div className="lead">
      <p><b>{project.project.name}</b>
        <em>{project.project.description}</em>.
      <a href={project.project.demo_url}> Demo</a>.
      <a href={project.project.code_url}> GH</a>.
      </p>
      <p className="text-muted">

        <u> Built with</u>: {project.project.tech}</p>
    </div>
  )
}

export default ProjectCard;