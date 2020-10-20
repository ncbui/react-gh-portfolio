import React, { useEffect, useState } from "react";
import { Jumbotron, Container, CardHeader } from 'reactstrap';
import Project from "./Project";
import ProjectFloat from './ProjectFloat';
import portfolioApi from "./Api";
import './ProjectsShort.css'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
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

  // <h2>Projects</h2>
  //     <Container className="ProjectsShort-container col-12">
  //     {projects &&
  //       projects.map((project, idx) => <ProjectFloat

  //       project={project}
  //       key={project.name}
  //       />
  //       )}
  //       </Container>

  return (
    <Jumbotron fluid className="ProjectsShort text-center">


      <div className="About" id="About">
        <div className="section-container col-11 col-md-8 col-lg-6 mx-auto">
          <Card className="About-bottom section-bottom-center text-left">
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