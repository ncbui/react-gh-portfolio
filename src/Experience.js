import React from "react";
import { Jumbotron, Container } from "reactstrap";
import './Experience.css';

/**Renders a collection of components */
export default function Experience() {
  return (
    <Jumbotron fluid className="Experience">
      <Container className="Experience-container col-md-6 mx-auto">
        <div className="Experience-body">
          <header className="Experience-header text-center">
            <h2>RESUME </h2>
          </header>
          Not sure if I want this page to be honest. Might just put a buttom to download resume pdf in menu.
        <br />
          <br />
          <ul> Job <i>one lifetime - another</i>
            <li> job duty</li>
            <li> job duty</li>
            <li> job duty</li>
          </ul>
          <ul> Job <i>one lifetime - another</i>
            <li> job duty</li>
            <li> job duty</li>
            <li> job duty</li>
          </ul>
          <ul> Job <i>one lifetime - another</i>
            <li> job duty</li>
            <li> job duty</li>
            <li> job duty</li>
          </ul>
          <ul> Education
        <li> school <i>too long</i></li>
            <li> school <i>too long</i></li>
            <li> school <i>too long</i></li>
          </ul>

        </div>
      </Container>
    </Jumbotron>
  );
}
