import React from "react";
import classes from "./NavBar.module.css"
import experience from "text/Experience.json"
import portfolio from "text/Portfolio.json"
import education from "text/Education.json"
import interests from "text/Interests.json"
import { Navbar, Nav } from "react-bootstrap";

const scrollTo = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const NavBar = ({ homeRef, experienceRef, portfolioRef, educationRef, interestRef }) => (
  <Navbar expand="xl" className={classes.navbar} variant="dark" collapseOnSelect>
    <Navbar.Toggle className="ml-auto" aria-controls="neotokyo-navbar"/>
    <Navbar.Collapse className={classes["nav-collapse"]} id="neotokyo-navbar">

      <Nav className={classes.nav}>
        <Nav.Link eventKey="1" onClick={() => scrollTo(homeRef)}><span>Home・ホーム</span></Nav.Link>
        <Nav.Link eventKey="2" onClick={() => scrollTo(experienceRef)}><span>{`${experience.header.en}・${experience.header.jp}`}</span></Nav.Link>
        <Nav.Link eventKey="3" onClick={() => scrollTo(portfolioRef)}><span>{`${portfolio.header.en}・${portfolio.header.jp}`}</span></Nav.Link>
        <Nav.Link eventKey="4" onClick={() => scrollTo(educationRef)}><span>{`${education.header.en}・${education.header.jp}`}</span></Nav.Link>
        <Nav.Link eventKey="5" onClick={() => scrollTo(interestRef)}><span>{`${interests.header.en}・${interests.header.jp}`}</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  // <nav className={classes.nav}>
  // </nav>
);

export default NavBar;
