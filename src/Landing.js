import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {

  return (
    <Jumbotron fluid className="Landing text-center">
      <Container className="Landing-container col-md-6 mx-auto">
      <header className="Landing-header">
        <h2>Hello, I am Cam Bui. </h2>
          <h3>I am a fullstack developer working with</h3> 
          <p> FIXME
          React, Node/Express, Flask, Python3 
          </p>

      </header>
      </Container>
    </Jumbotron>
  )
}