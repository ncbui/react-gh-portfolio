import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from 'reactstrap';
import Project from "./Project";
import './ProjectsList.css'

/**Renders a collection of projects 
 * 
 * Given an array of project small details
 * Render a Project component for each
 * passing isIndexEven to Project to set placement
 * 
*/
export default function ProjectsList() {

  // TODO: set up simple json-server
  const tempProjects = [
    {name: "Jobly", libraries: "....", link:""},
    { name: "Microblog", libraries: "....", link:""},
    { name: "Portfolio", libraries: "React, JSX", link:""}
  ]

  const projects = () => { 
    return tempProjects.map((project, idx) => <Project 
          project={project} 
          position={idx % 2} 
          key={project.name}
    />) }

  return (
    <div className="ProjectsList">
      <Jumbotron fluid className="ProjectsList-jumbo">
        <h2 className="ProjectsList-header display-3 col-4 mx-auto"> Projects </h2>
        <h4 className="ProjectsList-sub lead">Selected projects</h4>
        <br />
        <Container className="ProjectsList-container">
          {projects()}
        </Container>
      </Jumbotron>
    </div>
  )
}