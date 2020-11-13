import React from "react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Container } from 'reactstrap';
import './Contact.css';




/**Renders Footer fixed to the bottom of the viewport */
export default function Contact() {
  return (
    <section id="contact" className="Contact section-filled">
      <Container>
        <main className="text-center">
          <Fade>
            <h2 className="section-title">Contact</h2>
          </Fade>
          <Flip bottom cascade duration={800}>
            <div>
              <h3>
                Would you like to work with me? 
              </h3>
              <h3> Wonderful!</h3>
              <div>
                <a className="btn btn-lined" href="https://www.linkedin.com/in/cambui/">Let's Talk</a>
              </div>
            </div>
          </Flip>
        </main>
      </Container>
    </section>
  )
}