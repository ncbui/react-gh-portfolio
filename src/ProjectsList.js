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
      let res = await portfolioApi.getProjects();
      setProjects(res)
      setIsLoading(false);
    };
    getDetails();
  }, [isLoading]);

  const createProjects = () => { 
    return projects.map((project, idx) => <Project 
          className="Project"
          project={project} 
          position={idx % 2} 
          key={project.name}
    />
    )
   }

  return (
    
    <div className="ProjectsList">
      {isLoading &&
        <h1> Loading...</h1>
      }

      {!isLoading && 
        <Jumbotron className="ProjectsList-jumbo col-md-8 mx-auto">
        <div className="ProjectsList-title row">
          <h3 className="ProjectsList-header display-4 col-4 mx-auto"> Projects </h3>
        </div>
          {/* <h4 className="ProjectsList-sub lead*-">Selected projects</h4> */}
          <h4 className="ProjectsList-sub">Selected projects</h4>
          <br />
          <Container className="ProjectsList-container">
          {createProjects()}
          </Container>
        </Jumbotron>
      }
    </div>
  )
}