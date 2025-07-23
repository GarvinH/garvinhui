import NavBar from "components/regular/NavBar/NavBar";
import React, { Fragment } from "react";
import { Jumbotron, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import interests from "text/Interests.json";

const Interests = () => (
  <div className="regular">
    <NavBar />
    <Jumbotron>
      <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
        {interests.header.en}
      </h1>
      <Container
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        align="left"
      >
        <div>
          {interests.interests.map((section) => (
            <Fragment>
              <p>{section.header}</p>
              <ul>
                {section.points.map((point) => (
                  <li dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
              <br />
            </Fragment>
          ))}
        </div>
      </Container>
    </Jumbotron>
    <footer>
      <Nav.Link as={NavLink} to="/">New Site・新しいサイト</Nav.Link>
    </footer>
  </div>
);

export default Interests;
