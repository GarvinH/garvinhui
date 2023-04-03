import React from "react";
import classes from "./NavBar.module.css"
import experience from "text/Experience.json"
import portfolio from "text/Portfolio.json"
import education from "text/Education.json"
import interests from "text/Interests.json"

const scrollTo = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const NavBar = ({ homeRef, experienceRef, portfolioRef, educationRef, interestRef }) => (
  <nav className={classes.nav}>
    <button onClick={() => scrollTo(homeRef)}>Home・ホーム</button>
    <button onClick={() => scrollTo(experienceRef)}>{`${experience.header.en}・${experience.header.jp}`}</button>
    <button onClick={() => scrollTo(portfolioRef)}>{`${portfolio.header.en}・${portfolio.header.jp}`}</button>
    <button onClick={() => scrollTo(educationRef)}>{`${education.header.en}・${education.header.jp}`}</button>
    <button onClick={() => scrollTo(interestRef)}>{`${interests.header.en}・${interests.header.jp}`}</button>
  </nav>
);

export default NavBar;
