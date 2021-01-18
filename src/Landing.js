import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Jumbotron } from "reactstrap";
import './Landing.css'

function Landing({data}) {

  // console.log({data})
  const links = data.map(c => (
      <a key={c.site} href={c.url}>
        <FontAwesomeIcon
          icon={c.icon}
          className="Landing-icon"
          size="2x"
          fixedWidth
        />
      </a>
  )); // TODO: Add note between () and {} rendering

  return (
    <Jumbotron fluid id="Landing" className="text-center">
        <Container className="Landing-text">
        <h1 className="display-4">Cam Bui</h1>
        {links}
        </Container>
      </Jumbotron>
  );
}

export default Landing;