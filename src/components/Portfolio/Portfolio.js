import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import Project from "./Project/Project";
import projects from "./Portfolio.json";

const Portfolio = () => (
  <Jumbotron style={{ height: "100%", margin: 0 }}>
    <Container fluid>
      <Row style={{ width: "100%" }}>
        {projects.map((project) => (
          <Project
            img={require(`../../${project.img}`)}
            title={project.title}
            content={project.content}
          />
        ))}
      </Row>
    </Container>
  </Jumbotron>
);

export default Portfolio;
