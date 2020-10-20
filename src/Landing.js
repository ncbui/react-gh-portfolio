import React from "react";
import {
  Jumbotron,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardSubtitle,
  Button,
  CardText,
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headshot from './headshot-2020-Nov.png';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {

  return (
    <Jumbotron fluid className="Landing static-top text-center">
      <div className="section-container col-11 col-md-8 mx-auto">
        <Card className="Landing-card">
          <CardBody>
            <CardTitle tag="h1">
              Hello, I'm <div className="Landing-name">Cam Bui</div> 
            </CardTitle>
            <CardSubtitle tag="h1">I'm a full-stack web developer</CardSubtitle>
            <CardText>
            <br />
              <FontAwesomeIcon
                icon={['fab', 'react']}
                className="Landing-icon"
                size="2x"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={['fab', 'node']}
                className="Landing-icon"
                size="2x"
                fixedWidth
              />
              <FontAwesomeIcon
                icon={['fab', 'python']}
                className="Landing-icon"
                size="2x"
                fixedWidth
              > 3 </FontAwesomeIcon>
              <FontAwesomeIcon
                icon={['fas', 'database']}
                className="Landing-icon"
                size="2x"
                fixedWidth
              />
            </CardText>
            <br />
            <a className="btn" href="http://www.github.com/ncbui"><h5>See my work</h5></a>
          </CardBody>
        </Card>
      </div>
    </Jumbotron>
  )
}