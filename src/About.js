import React, { useEffect, useState } from "react";
import { 
  Card,
  CardHeader,
  CardBody,
  CardFooter, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col } from 'reactstrap';

/**Renders a collection of components */
export default function About() {

  return (
  <div className="About">
      <Row>
        <Col sm="6" className="About-skills text-right">
          <Card body>
            <CardTitle><h3> Tech Stack </h3></CardTitle>
            <CardText>
              FIXME with list of skills</CardText>
          </Card>
        </Col>
        <Col sm="6" className="About-me text-left">
          <Card>
            <CardHeader><h4>About Me</h4> </CardHeader>
            <CardBody>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
                
              </CardText>
            </CardBody>
            <CardFooter>
              <Button>
                Resume
              </Button>
              <Button>
                CV
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
  </div>
  )
}