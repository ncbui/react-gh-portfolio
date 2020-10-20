import React from "react";
import { Row, Col } from "reactstrap";
import './Footer.css'

const contactInfo = [{
  name: "GitHub",
  site: "www.github.com/ncbui",
  icon: ['fab', 'github']
},
{
  name: "LinkedIn",
  site: "www.linkedin.com/in/cambui",
  icon: ['fab', 'linkedin']
},
  {
    name: "bui.nct@gmail.com",
    site: "mailto:bui.nct@gmail.com",
    icon: ['fas', 'envelope']
  }
]

/**Renders a collection of components */
export default function Footer() {

  return (
    <div fluid className="Footer col-12 align-bottom">
      <Row>
        <Col className="Footer-col col-6 text-left">
            
          <small className="Footer-notes-text">
            © Cam Bui, 2020 <br />
            Based on design by <a href="FIXME"> Mad X </a>
          </small>
        </Col>
        <Col className="Footer-col col-6 text-right">
          <h5><b>Contact Me</b></h5>
          <small className="Footer-notes-text">
            Based on design by <a href="FIXME"> Mad X </a>
          </small>
        </Col>
      </Row>

    </div>
  )
}