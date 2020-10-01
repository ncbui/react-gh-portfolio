import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Spinner
} from 'reactstrap';
import portfolioApi from "./Api";

/**Renders a collection of components */
export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutMe, setAboutMe] = useState({});
  const [stack, setStack] = useState({});

  useEffect(() => {
    async function fetchData() {
      let me = await portfolioApi.mockGetAboutMe();
      setAboutMe(me);

      let stack = await portfolioApi.getStack();
      setStack(stack);

      setIsLoading(false);
    };
    fetchData();
  }, [isLoading]);

  console.log(stack)

  return (
    <div className="About" id="About">
      <Container className="About col-12 col-md-6 mx-auto">
        {isLoading && (
          <Row className="About-spinner col-2 mx-auto">
            <Spinner style={{ width: "4rem", height: "4rem" }} />
          </Row>
        )}
        {!isLoading && (
          <Row>
            <Col className="About-skills col-12 col-lg-4">
              <Card>
                <CardHeader className="text-right">
                  <h3> Skills </h3>
                </CardHeader>
                <CardBody>
                <CardText>
                FIXME not sure about this section. open to moving it
                <ul>
                <li>my toolkit</li>
                <li>libraries</li>
                <li>frameworks</li>
                <li>concepts</li>
                </ul>
                </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col className="About-me text-left col-12 col-lg-8">
              <Card>
                <CardHeader>
                  <h3>About Me</h3>
                </CardHeader>
                <CardBody>
                  <CardTitle>{aboutMe.subtitle}</CardTitle>
                  <CardText>{aboutMe.long}</CardText>
                </CardBody>
                <CardFooter>
                  <Button>Resume</Button>
                  <Button>CV</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}