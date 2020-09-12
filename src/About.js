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
import portfolioApi from "./Api";

/**Renders a collection of components */
export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutMe, setAboutMe] = useState({});
  const [stack, setStack] = useState({});

  useEffect(() => {
    async function fetchData () {
      let me = await portfolioApi.getAboutMe();
      setAboutMe(me);

      let stack = await portfolioApi.getStack();
      setStack(stack);

      setIsLoading(false);
    };
    fetchData();
  }, [isLoading]);

  const stacklist = () => {
    for (let key in stack){
      return <li> {key} </li>
    }
  }

  return (
  <div className="About">
      {isLoading &&
        <h1> Loading...</h1>
    }

    {!isLoading &&
      <Row>
        <Col sm="6" className="About-skills text-right">
          <Card body>
            <CardTitle><h3> Tech Stack </h3></CardTitle>
            <CardText>
              FIXME with list of {stacklist()}
              </CardText>
          </Card>
        </Col>
        <Col sm="6" className="About-me text-left">
          <Card>
            <CardHeader><h4>About Me</h4> </CardHeader>
            <CardBody>
              <CardTitle>{aboutMe.subtitle}</CardTitle>
              <CardText>
                {aboutMe.long}
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
      }
  </div>
  )
}