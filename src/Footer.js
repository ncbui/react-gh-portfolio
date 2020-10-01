import React, { useEffect, useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Footer.css'

import portfolioApi from "./Api";

/**Renders a collection of components */
export default function Footer() {

  const [info, setInfo] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    async function fetchData() {
      let res = await portfolioApi.getContactInfo();
      setInfo(res);
    };
    fetchData();
  }, []);

  const contactBoxes = () => {
    // console.log("contactBoxes,", info)
    const site = Object.keys(info);
    return site.map(site => {
      return (
        <p key={site} className="Footer-contact-info"><a href={info[site]}>{site}</a></p>
      )
    })
  }


  return (
    <div className="Footer fixed-bottom">
      <Container fluid className="Footer-container">
        <div className="Footer-contact col-12 col-md-4 mr-auto text-left">
          
        
        
        
        {!info &&
            <p> Fetching my latest contact info...</p>
          }
          {info && 
            contactBoxes()
          }
        </div>
        <div className="Footer-notes col-12 col-md-8 mr-auto text-right">
          <small className="Footer-notes-text">
            tiny text tiny text tiny text tiny text
          </small>

        </div>
      </Container>
    </div>
  )
}