import React from "react";
import {useParams} from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";

function Project() {


  const {project} = useParams();

  console.table(project)

  return (
    <Jumbotron>
      <Container>
      </Container>
    </Jumbotron>
  )
}

export default Project;