import React from "react";
import Fade from 'react-reveal/Fade';
import {
  Row,
  Container
} from 'reactstrap';
import './About.css';
import headshot from './0.jpeg';


/**Renders a collection of components */
export default function About() {

  return (
    <section className="About section section-filled jumbotron" id="About">
      <Container>
        <main className="col-12 col-md-8 mx-auto">
          <Fade delay={100}>
            <h2 className="section-title">About Me</h2>
          </Fade>
          <Row>
            <Fade bottom>
              <div className="col-lg-6 col-12">
                <img
                  src={headshot}
                  className="About-img"
                  alt="close up on Cam from the shoulders up, circa November 2019"
                />
              </div>
            </Fade>
            <Fade left delay={800}>
              <div className="About-details col-lg-6 col-12">
                <p>
                I'm a software developer based in San Jose, CA.
                </p>
                <p>
                I have a background in IT support and psychological research. I get a kick out of building tools to help us reshape our inner and outer worlds.
                </p>
                <p>
                In my spare time I paint and turn leftovers into gold with vermiculture.
                </p>
                <br />
                <a href="/" className="btn btn-lined">Resume</a>
              </div>
            </Fade>
          </Row>
        </main>
      </Container>
    </section>
  );
}