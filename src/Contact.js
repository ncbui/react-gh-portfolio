import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from 'reactstrap';
import './Contact.css';
import portfolioApi from './Api';

const contactInfo = [{
  site: "www.github.com/ncbui",
  icon: ['fab', 'github']
},
{
  site: "www.linkedin.com/in/cambui",
  icon: ['fab', 'linkedin']
},
  {
    name: "bui.nct@gmail.com",
    site: "mailto:bui.nct@gmail.com",
    icon: ['fas', 'envelope']
  }]

/**Renders Footer fixed to the bottom of the viewport */
export default function Contact() {
  return (
    <Container className="Contact ml-auto text-right">
    {
        contactInfo.map(point => <a href={point.site} target="_blank">
          <FontAwesomeIcon
            icon={point.icon}
            className="Contact-icon"
            size="2x"
            fixedWidth
          />
        </a>)
    }
    </Container>
  )
}