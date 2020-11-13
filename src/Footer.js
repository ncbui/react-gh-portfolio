import React from "react";
import Fade from 'react-reveal/Fade';
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'


/**Renders a collection of components */
export default function Footer() {

  return (
    <section className="Footer align-bottom text-center">
      <Container>
        <main>
          <Fade bottom cascade duration={300}>
            <div>
              <h2>
                <button
                  id="back-to-top"
                  className="btn btn-empty"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  title="Go to top">
                  ︿
              </button>
              </h2>

              <h2 className="Footer-contact col-3 mx-auto">
                <br />
                <a href="https://github.com/ncbui">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="Landing-icon"
                    size="1x"
                    fixedWidth
                  />
                </a>

                <a href="https://www.linkedin.com/in/cambui/">
                  <FontAwesomeIcon
                    icon={['fab', 'codepen']}
                    className="Landing-icon"
                    size="1x"
                    fixedWidth
                  > 3 </FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/cambui/">

                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    className="Landing-icon"
                    size="1x"
                    fixedWidth
                  />
                </a>
              </h2>
              <hr />
              <h4>
                <small className="Footer-notes-text">
                  © Cam Bui, 2020
        </small>
              </h4>
            </div>
          </Fade>
        </main>
      </Container>
    </section>
  )
}