import React from "react";
import classes from "./Home.module.css";
import { Jumbotron, Container } from "react-bootstrap";
import portrait from "../../../assets/garvinhui.jpg";
import github from "../../../assets/github-logo.png";
import linkedin from "../../../assets/linkedin-logo.png";
import Typed from "typed.js";
import NavBar from "components/regular/NavBar/NavBar";
import text from "text/home.json"

class Home extends React.Component {
  componentDidMount() {
    const strings = text.descriptors.map(pair => pair.en);
    const options = {
      strings: strings,
      typeSpeed: 40,
      loop: true,
      loopCount: Infinity,
      backDelay: 2000,
      backSpeed: 30,
    };

    if (!this.typed) {
      this.typed = new Typed("#typingEl", options);
    }
  }

  render() {
    return (
      <div className="regular">
        <NavBar />
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
                {text.resume.en}
              </a>
            </h5>
            <h5>{text.phone}</h5>
            <h5>{text.email}</h5>
            <button className={classes.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={text.github}
              >
                <img src={github} alt="github link" />
              </a>
            </button>
            <button className={classes.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={text.linkedin}
              >
                <img src={linkedin} alt="linkedin link" />
              </a>
            </button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
