import React from "react";
import classes from "./Home.module.css";
import { Jumbotron, Container } from "react-bootstrap";
import portrait from "../../../assets/garvinhui.jpg";
import github from "../../../assets/github-logo.png";
import linkedin from "../../../assets/linkedin-logo.png";
import Typed from "typed.js";

class Home extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "Software Engineering Student",
        "日本が好きな人です (Japan Enthusiast)",
        "Developer",
      ],
      typeSpeed: 40,
      loop: true,
      loopCount: Infinity,
      backDelay: 2000,
      backSpeed: 30,
    };

    this.typed = new Typed("#typingEl", options);
  }

  render() {
    return (
      <Jumbotron>
        <Container className={classes.home}>
          <img
            style={{
              width: "12rem",
              borderRadius: "50%",
              marginTop: "5rem",
            }}
            src={portrait}
            alt="Myself"
          />
          <h1 style={{ fontSize: "5rem" }}>Garvin Hui</h1>
          <h2>
            <span id="typingEl"></span>
          </h2>
          <h5>
            <a
              href="https://drive.google.com/file/d/1QOW_dkKfpCT_TsJds_hiv2pR7BTqBcmT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </h5>
          <h5>(647)-898-8793</h5>
          <h5>garvinhui@hotmail.com</h5>
          <button className={classes.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GarvinH"
            >
              <img src={github} alt="github link" />
            </a>
          </button>
          <button className={classes.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/garvinhui/"
            >
              <img src={linkedin} alt="linkedin link" />
            </a>
          </button>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
