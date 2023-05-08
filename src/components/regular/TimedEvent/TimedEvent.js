import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const TimedEvent = ({ institution, title, notes, descs, duration, className }) => (
  <div style={{ marginBottom: "64px" }} className={className}>
    <h2 style={{ fontSize: "2.5rem", fontWeight: 600, textAlign: "left" }}>
      {institution}
    </h2>
    <Row>
      <Col lg={9} align="left">
        <h2>{title}</h2>
        {notes && <p dangerouslySetInnerHTML={{__html: notes}}></p>}
        {descs &&
          descs.map((desc, index) => (
            <Fragment key={index}>
              <p>{desc.title}</p>
              <ul>
                {desc.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{__html: point}} />
                ))}
              </ul>
            </Fragment>
          ))}
      </Col>
      <Col lg={3} align="left">
        <p>{duration}</p>
      </Col>
    </Row>
  </div>
);

export default TimedEvent;
