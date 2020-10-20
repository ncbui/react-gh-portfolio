import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardBody
} from 'reactstrap';


/**Renders a project img with overlay text
 * 
 * Props
 * - project: details about the project
 * - position: sets component placement with bootstrap
 * 
 * App -> ProjectsList -> Project
 */
export default function Project({ project, position }) {

  const align = () => position === 'left' ? 'ml-auto' : 'mr-auto';

  return (
    <div className={'Project col-12 col-xl-6 ' + align()}>
      <Card inverse>
        <CardImg width="100%" src="https://allears.net/wp-content/uploads/2020/01/Mando-8-BabyYoda-998x677.jpg" alt="Project-FIXME" />
        <CardImgOverlay className="col-12 text-center">
          <CardTitle>FIXME {project.name}</CardTitle>
          <br />
          <br />
          <p>
            { project.demo && 
              <a href={project.demo}>Demo</a> 
            }
            { project.github && 
              <>
              | <a href={project.github}>Github</a>
              </> }
          </p>
        </CardImgOverlay>
        <CardBody className="text-left">
          <CardText>
            <p>
              FIXME {project.description}
            </p>
              <p>
                {project.frontend &&
                  <>Frontend: {project.frontend}</>}
                <br />
                {project.backend &&
                  <>Backend: {project.backend}</>}
              </p>
            <small className="text-muted">FIXME Last updated  {project.updated}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}