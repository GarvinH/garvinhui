import React from "react";
import classes from "./Home.module.css";
import { Jumbotron, Container } from "react-bootstrap";
import portrait from "../../assets/garvinhui.jpg";
import Typed from "typed.js";

class Home extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        "Software Engineering Student",
        "Japan Enthusiast",
        "Developer",
      ],
      typeSpeed: 40,
      loop: true,
      loopCount: Infinity,
      backDelay: 1100,
      backSpeed: 30,
    };

    this.typed = new Typed("#typingEl", options);
  }

  render() {
    return (
      <Jumbotron style={{ height: "100%", margin: 0 }}>
        <Container className={classes.home}>
          <img
            style={{
              width: "35%",
              height: "50%",
              borderRadius: "50%",
              marginTop: "5rem",
            }}
            src={portrait}
            alt="Myself"
          />
          <h1>Garvin Hui</h1>
          <h3>
            <span id="typingEl"></span>
          </h3>
          <h4>
            <span style={{ marginRight: "2rem" }}>(647)-898-8793</span>
            <span>garvinhui@hotmail.com</span>
          </h4>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
