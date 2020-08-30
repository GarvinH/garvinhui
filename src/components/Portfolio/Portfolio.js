import React from "react";
import { Jumbotron, Container, Row} from "react-bootstrap";
import Project from "./Project/Project";
import memo from "../../assets/memo-io.png";
import forecast from "../../assets/forecast-io.png";

const Portfolio = () => (
  <Jumbotron style={{ height: "100%", margin: 0 }}>
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Project img={memo} title="Memo.io" />
        <Project img={forecast} title="Forecast.io" />
      </Row>
    </Container>
  </Jumbotron>
);

export default Portfolio;
