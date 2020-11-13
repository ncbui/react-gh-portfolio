import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import { Container, Row } from "reactstrap";
import portfolioApi from "./Api";
import './Projects.css'


/**Renders a collection of projects 
 * 
 * State
 * - isLoading
 * - projects: data from backend
 * 
 * App -> ProjectsList -> Project
 * 
*/
export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   async function getDetails() {
  //     let res = await portfolioApi.mockGetProjects();
  //     setProjects(res)
  //     setIsLoading(false);
  //   };
  //   getDetails();
  // }, [isLoading]);

  return (
    <section className="Projects section-cover">
      <Container className="col-10">
        <main>
          <Fade>
            <h2 className="section-title">
            <a href="http://www.github.com/ncbui">Projects
            </a></h2>
          </Fade>
          { projects && 
            projects.map((project, idx) =>
              <Row className="Project text-left" key={project.name}>
                <div className="Project-details col-lg-5 col-sm-12">
                  <Fade left cascade delay={120}>
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <Row>
                        <a className="btn btn-covered" href="http://www.github.com/ncbui">See Live</a>
                        <a className="btn btn-empty" href={project.github}>Source Code </a>
                      </Row>
                    </div>
                  </Fade>
                </div>
                <div className="Project-img col-lg-7 col-sm-12">
                  <Fade right cascade>
                    <div>
                      <img src="/" alt={project.name} />
                    </div>
                  </Fade>
                </div>
              </Row>
            )
          }
        </main>
      </Container>
    </section>

  )
}