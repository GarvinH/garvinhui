import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import Project from "./Project/Project";
import projects from "./Portfolio.json";
import { Fragment } from "react";

const Portfolio = () => (
  <Jumbotron>
    {projects.map((project_category) => (
      <Fragment>
        <h1 style={{ margin: "2rem 0" }} className="heading">
          {project_category.heading}
        </h1>
        <Row style={{ width: "100%", margin: 0, marginBottom: "5rem" }}>
          {project_category.projects.map((project) => (
            <Project
              img={require(`../../../${project.img}`)}
              title={project.title}
              content={project.content}
            />
          ))}
        </Row>
      </Fragment>
    ))}
  </Jumbotron>
);

export default Portfolio;
