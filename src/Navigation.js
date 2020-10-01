import React, { useState } from "react";
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
      // <Navbar light expand="lg" className="Navigation fixed-top col-12">
      <Navbar light className="Navigation fixed-top col-12">
        <NavbarBrand href="/">Cam Bui</NavbarBrand>
        <NavbarToggler onClick={toggle} /> 

        <Collapse isOpen={isOpen} navbar >
          <Nav className="Navigation-navbar text-right mr-auto" navbar>
          <NavItem>
            <NavLink href="/about">
              About
          </NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="/projects">
                Projects
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/exp">
                Experience
            </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
  )
}
