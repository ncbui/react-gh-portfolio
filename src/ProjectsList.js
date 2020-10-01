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
      {!isLoading &&
        <Container className="ProjectsList-container col-md-6 mx-auto">
        <div className="ProjectsList-title row col-12 col-md-4  mr-auto">
              <h3 className="ProjectsList-header display-4 "> Projects </h3>
            </div>
            <p className="ProjectsList-sub">Selected projects</p>
            {createProjects()}
          </Container>
      }
      </Jumbotron>
  )
}