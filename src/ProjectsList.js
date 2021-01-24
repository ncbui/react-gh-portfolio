import React from "react";
import { Container, Jumbotron, Card, CardBody, CardSubtitle, Col, CardImg } from "reactstrap";
import rainbowPoly from './rainbow-poly.jpg'; 
import ProjectCard from './ProjectCard';

function ProjectsList({ data }) {


  const projectList = (data) => {
    // console.log(`Sending to project`, data)
    return data.map((project, idx) => (
      <li>
      <ProjectCard
      className="Project col-12 col-md-6 mx-auto"
      project={project}
      key={project.name} />
      </li>
    ))}
  

  //   return data.map((project, idx) => (
  //     <Col className="col-10 col-md-6 mx-auto" key={project.name}>
  //       <Card className="Project-card" style={{ height: '10vh', overflow: 'hidden' }}>
  //         <CardBody className="col-5 mr-auto">
  //           <CardSubtitle className="text-muted">{idx}</CardSubtitle>
  //           <p style={{ 'font-size': '16px' }}> {project.name}</p>
  //           <p>FIXME descriptions</p>
  //           <p>Built with: {project['languages']}</p>
  //           <p><a href={project['github']}>Code </a> <a href={project['demo']}> Demo </a></p>
  //         </CardBody>
  //         <CardImg
  //           bottom width="100%"
  //           src={rainbowPoly}
  //           alt="Card image cap"
  //           className="col-7 ml-auto"
  //           styl={{ margin: '-25vh 0 -80vh 0;' }} />
  //       </Card>
  //     </Col>
  //   ))
  // }

  return (
    <Jumbotron className="ProjectsList col-12">
      <Container className="ProjectsList-deck mx-auto col-12 col-md-8">
      <h3 className="text-center">Projects</h3>
      <br />
      <ul>
      {projectList(data)}
      </ul>
      </Container>
    </Jumbotron>
  )
}

export default ProjectsList;