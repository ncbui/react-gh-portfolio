import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from 'reactstrap';
import './About.css';
import headshot from './headshot-2020-Nov.png';


/**Renders a collection of components */
export default function About() {

  return (
    <div className="About" id="About">
      <div className="section-container col-11 col-md-8 col-lg-6 mx-auto">
        <Card className="About-top section-top-left ">
          <CardImg
            src={headshot}
            className="About-img"
            alt="close up on Cam from the shoulders up, circa November 2019"
          />
        </Card>
        <br/ >
        <Card className="About-bottom section-bottom-right">
          <CardBody>
            <CardTitle> <h2>About Me</h2> </CardTitle>
            <CardSubtitle> <h4>I'm a process-oriented person who enjoys building little helpers </h4></CardSubtitle>
            <CardText> 
            <p>
            I have a background in IT support and psychological research. 
            </p>
            <p>
            In my spare time I paint and turn leftovers into gold with vermiculture.
            </p>
              <Button>Resume</Button>
              <Button>CV</Button>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}