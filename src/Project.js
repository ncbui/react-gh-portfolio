import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

/**Renders a project img with overlay text
 * 
 * Props
 * - project: details about the project
 * - position: sets component css-placement
 */
export default function Project({ project, position}) {

  const align = () => position ? 'Project col-5 ml-auto' : 'Project col-5 mr-auto';
  // props: position: left or right
  return (
    <div className={align()}>
      <Card inverse>
        <CardImg width="100%" src="https://allears.net/wp-content/uploads/2020/01/Mando-8-BabyYoda-998x677.jpg" alt="Project-FIXME" />
        <CardImgOverlay>
          <CardTitle>{project.name}</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            Libraries: {project.libraries}
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}