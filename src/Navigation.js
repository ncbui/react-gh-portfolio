import React, { useEffect, useState } from "react";
import './Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

/**Renders a collection of components */
export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">Cam Bui</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>

          <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/about">FIXME 1</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about">FIXME 2</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  FIXME with divider
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem>
            <NavLink href="/about">
              About
            </NavLink>
          </NavItem>

        </Nav>

        <NavbarText>
          <UncontrolledDropdown >
            <DropdownToggle nav caret>
              FIXME theme
              </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/about">FIXME misty rose</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/about">FIXME high contrast</NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                FIXME with divider
                </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavbarText>
      </Collapse>
    </Navbar>
  )
}
