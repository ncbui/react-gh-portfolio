import React from "react";
import { Navbar, NavLink } from 'reactstrap';
import "./NavBar.css"

function NavBar() {
  
  return (
    <Navbar className="col-12 col-sm-8 col-lg-6 mx-auto">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/resume">Resume</NavLink>
    </Navbar>

  );
}

export default NavBar;