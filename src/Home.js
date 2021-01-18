import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Projects from './Projects';
import rainbowPoly from './rainbow-poly.jpg';

function Home({ data }) {
  const { about, projects } = data;
  // console.log(about, projects)
  
  /** Deciding whether to keep in section
   * <p> I was a research assistant with the <a href={about['lab']}>Action & Consciousness Lab</a> at SFSU. Check out my research on the nature of unintended thoughts published by the <a href={about['publication']}>Psychology of Consciousness</a>.</p>
   */
  return (<>
    <Jumbotron fluid className="Home">
      <Container>
        <Row>
          <Col className="Home-tag col-12 col-md-4 mr-auto">
            <p className="lead">
              <b>
                {about['tagline']}
              </b>
            </p>
          </Col>
          <Col className="Home-body col-12 col-md-7 ml-auto">
            <h6>Hi there,</h6>
            <p> My name is <b>{about['name']}</b>. {about['description']} </p>
            <p> {about['overview']}</p>
            <p> {about['values']}</p>
            <p> {about['hobbies']}</p>
          </Col>
        </Row>

        <Row style={{ height: '1vh', overflow: 'hidden', margin: '4vh 0' }}>
          <img
            src={rainbowPoly}
            alt="Divider"
            className="divider-img"
          />
        </Row>
        
        <Row>
          <Projects data={projects} />
        </Row>
      </Container>
    </Jumbotron>
  </>
  );
}

export default Home;