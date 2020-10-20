import React, { useEffect, useState } from "react";
import portfolioApi from "./Api";
import './ProjectsShort.css'
import {
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

/**Renders a collection of projects 
 * 
 * State
 * - isLoading
 * - projects: data from backend
 * 
 * App -> ProjectsList -> Project
 * 
*/
export default function ProjectsShort() {
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

  return (
    <Jumbotron fluid className="ProjectsShort text-center">


      <div className="ProjectsShort">
        <div className="section-container col-11 col-md-8 col-lg-6 mx-auto">
          <Card className="ProjectsShort-card section-bottom-center text-left">
            <CardBody>
              <CardTitle> <h2>Projects</h2> </CardTitle>
              <CardText>
                <ul className="Projects-List">
                  {
                    projects.map((project, idx) => 
                      <li><b><a href={project.github}>{project.name}</a></b> <em>{project.description}</em></li>)
                  }
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>

    </Jumbotron>

  )
}