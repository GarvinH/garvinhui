import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const TimedEvent = ({ institution, title, notes, desc, duration, key }) => (
  <Fragment key={key}>
    <h2 style={{ fontSize: "2.5rem", fontWeight: 600, textAlign: "left" }}>
      {institution}
    </h2>
    <Row>
      <Col md={9} align="left">
        <h2>{title}</h2>
        <p>{notes}</p>
        <p>{desc.title}</p>
        <ul>
          {desc.points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </Col>
      <Col md={3} align="left">
        <p>{duration}</p>
      </Col>
    </Row>
  </Fragment>
);

export default TimedEvent;
