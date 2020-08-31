import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import Project from "./Project/Project";
import projects from "./Portfolio.json";

const Portfolio = () => (
  <Jumbotron>
      <h1 style={{margin: "2rem 0 5rem"}} className="heading">Portfolio</h1>
      <Row style={{ width: "100%", margin: 0 }}>
        {projects.map((project) => (
          <Project
            img={require(`../../../${project.img}`)}
            title={project.title}
            content={project.content}
          />
        ))}
      </Row>
  </Jumbotron>
);

export default Portfolio;
