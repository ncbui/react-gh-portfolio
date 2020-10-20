import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
  CardHeader,
  CardBody
} from 'reactstrap';
import './ProjectFloat.css';


/**Renders a project img with overlay text
 * 
 * Props
 * - project: details about the project
 * - position: sets component placement with bootstrap
 * 
 * App -> ProjectsList -> Project
 */
export default function ProjectFloat({ project }) {

  return (
    <Card className="ProjectFloat-card section-bottom-center col-12 col-lg-3" >
      <CardHeader> 
      <h4> {project.name} </h4>
          </CardHeader>
        <CardBody className="text-left">
        <CardTitle> FIXME {project.description}</CardTitle>
        <CardText>
            <p>
              {project.frontend &&
                <>Frontend: {project.frontend}</>}
              <br />
              {project.backend &&
                <>Backend: {project.backend}</>}
            </p>
          </CardText>
        </CardBody>
      <CardFooter>
        {project.demo &&
          <a href={project.demo}>Demo</a>
        }
        {project.github &&
          <>
            | <a href={project.github}>Github</a>
          </>}
      </CardFooter>
      </Card>
  );
}