import React, { Fragment } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import interests from "./Interests.json";

const Interests = () => (
  <Jumbotron>
    <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
      Interests
    </h1>
    <Container style={{ margin: 0, padding: 0 }} align="left">
      {interests.map((section) => (
        <Fragment>
          <p>{section.header}</p>
          <ul>
            {section.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </Container>
  </Jumbotron>
);

export default Interests;
