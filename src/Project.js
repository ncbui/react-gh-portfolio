import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


/**Renders a project img with overlay text
 * 
 * Props
 * - project: details about the project
 * - position: sets component css-placement
 * 
 * App -> ProjectsList -> Project
 */
export default function Project({ project, position }) {

  const align = () => position ? 'ml-auto' : 'mr-auto';

  return (
    <div className={'Project col-10 col-lg-5 ' + align()}>
      <Card inverse>
        <CardImg width="100%" src="https://allears.net/wp-content/uploads/2020/01/Mando-8-BabyYoda-998x677.jpg" alt="Project-FIXME" />
        <CardImgOverlay>
          <CardTitle>{project.name}</CardTitle>
          <CardText>
            {project.details} made with {project.libraries}
          </CardText>
          <CardText>
            <small className="text-muted">Last updated {project.updated}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}