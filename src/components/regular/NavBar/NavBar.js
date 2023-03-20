import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"

const NavBar = () => (
  <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={NavLink} to="/">Garvin Hui</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/home" exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
          <Nav.Link as={NavLink} to="/interests">Interests</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
