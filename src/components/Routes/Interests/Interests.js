import NavBar from "components/regular/NavBar/NavBar";
import React, { Fragment } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import interests from "./Interests.json";

const Interests = () => (
  <div className="regular">
    <NavBar />
    <Jumbotron>
      <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
        Interests
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
          {interests.map((section) => (
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
  </div>
);

export default Interests;
