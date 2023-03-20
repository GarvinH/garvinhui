import React, { Fragment } from "react";
import { Jumbotron, Row, Accordion, Card } from "react-bootstrap";

import Project from "./Project/Project";
import { CustomToggle } from "components/regular/AccordionToggle/CustomToggle";

import projects from "./Portfolio.json";
import NavBar from "components/regular/NavBar/NavBar";

const RenderProject = (project_category) => (
  <Fragment>
    {project_category.heading ? (
      <h1 style={{ margin: "2rem 0" }} className="heading">
        {project_category.heading}
      </h1>
    ) : (
      <div style={{ marginTop: "5rem" }} />
    )}
    <Row style={{ width: "100%", margin: 0, marginBottom: "5rem" }}>
      {project_category.projects.map((project) => (
        <Project
          img={require(`../../../${project.img}`)}
          imgStyle={project.imgStyle}
          title={project.title}
          content={project.content}
        />
      ))}
    </Row>
  </Fragment>
);

const Portfolio = () => (
  <div className="regular">
    <NavBar />
    <Jumbotron>
      {projects.map((project_category) =>
        !project_category.accordion ? (
          <RenderProject {...project_category} />
        ) : (
          <Accordion>
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">
                  {project_category.accordion}
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <RenderProject {...project_category} />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        )
      )}
    </Jumbotron>
  </div>
);

export default Portfolio;
