import React, { useState } from "react";
import Contact from './Contact'
import './Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


/**Renders a collection of components */
export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fluid light className="Navigation col-12" expand="xl">
      <NavbarBrand href="/">
      </NavbarBrand>
        <NavbarToggler onClick={toggle} className="Nav-toggler"/> 

        <Collapse isOpen={isOpen} navbar >
          <Nav className="Navigation-navbar text-center mx-auto" navbar>
          <NavItem>
            <NavLink href="/">
              HOME
          </NavLink>
          </NavItem>
            <NavItem>
            <NavLink href="/#About">
              ABOUT
            </NavLink>
            </NavItem>
            <NavItem>
            <Contact />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}
