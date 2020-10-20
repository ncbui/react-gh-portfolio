import React, { useEffect, useState } from "react";
import { Jumbotron, Container } from 'reactstrap';
import Project from "./Project";
import portfolioApi from "./Api";
import './ProjectsList.css'

/**Renders a collection of projects 
 * 
 * State
 * - isLoading
 * - projects: data from backend
 * 
 * App -> ProjectsList -> Project
 * 
*/
export default function ProjectsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getDetails() {
      let res = await portfolioApi.mockGetProjects();
      setProjects(res)
      setIsLoading(false);
    };
    getDetails();
  }, [isLoading]);

  // given an array of project objects, returns Project components
  const createProjects = () => {
    return projects.map((project, idx) => <Project
      className="Project"
      project={project}
      position={idx % 2 ? 'left' : 'right'}
      key={project.name}
    />
    )
  }

  return (
      <Jumbotron fluid className="ProjectsList">
        <Container className="ProjectsList-container">
        <div className="ProjectsList-title row col-12 col-md-4 mx-auto text-right text-md-center">
              <h3 className="ProjectsList-header display-4"> Projects </h3>
              <br />
              <p className="ProjectsList-sub">Selected projects</p>
              <p className="ProjectsList-note">Might turn into timeline</p>
            </div>
            {createProjects()}
          </Container>
      </Jumbotron>
  )
}