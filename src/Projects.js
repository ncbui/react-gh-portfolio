import React from "react"
import { Container, Jumbotron, Card, CardBody, CardSubtitle } from "reactstrap"

function Projects({ data }) {
  // console.log(data)
  return (
    <Jumbotron fluid className="Projects col-12">
      <Container className="Projects-carddeck mx-auto" style={{ display: 'flex', flexDirection: 'row' }}>
            {data.map((project, idx) => (
              <Card key={project.name} className="Project-card col-5">
              <CardBody>
                  <CardSubtitle className="text-muted">{idx}</CardSubtitle>
              <p style={{'font-size':'16px'}}> {project.name}</p>
              <p>FIXME descriptions</p>
              <p>Built with: {project['languages']}</p>
              <p><a href={project['github']}>Code </a> <a href={project['demo']}> Demo </a></p>
                </CardBody>
              </Card>
            ))}
      </Container>
    </Jumbotron>
  );
}

export default Projects;