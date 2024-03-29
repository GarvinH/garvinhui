import React, { Fragment } from "react";
import { Jumbotron, Row, Accordion, Card, Nav } from "react-bootstrap";

import Project from "./Project/Project";
import { CustomToggle } from "components/regular/AccordionToggle/CustomToggle";

import projects from "text/Portfolio.json";
import NavBar from "components/regular/NavBar/NavBar";
import { NavLink } from "react-router-dom";

const RenderProject = (project_category) => (
  <Fragment>
    {project_category.heading ? (
      <h1 style={{ margin: "2rem 0" }} className="heading">
        {project_category.heading.en}
      </h1>
    ) : (
      <div style={{ marginTop: "5rem" }} />
    )}
    <Row style={{ width: "100%", margin: 0, marginBottom: "5rem" }}>
      {project_category.projects.map((project, ix) => (
        <Project
          key={ix}
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
      <RenderProject {...projects.mandatory} />
      {projects.optional.map((project_category, ix) =>
        <Accordion key={ix}>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0">
                {project_category.heading.en}
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <RenderProject {...project_category} />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )
      }
    </Jumbotron>
    <footer>
      <Nav.Link as={NavLink} to="/">New Site・新しいサイト</Nav.Link>
    </footer>
  </div>
);

export default Portfolio;
