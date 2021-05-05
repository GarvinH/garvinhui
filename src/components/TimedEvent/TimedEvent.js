import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const TimedEvent = ({ institution, title, notes, descs, duration, key, className }) => (
  <div key={key} style={{ marginBottom: "64px" }} className={className}>
    <h2 style={{ fontSize: "2.5rem", fontWeight: 600, textAlign: "left" }}>
      {institution}
    </h2>
    <Row>
      <Col md={9} align="left">
        <h2>{title}</h2>
        {notes && <p dangerouslySetInnerHTML={{__html: notes}}></p>}
        {descs &&
          descs.map((desc) => (
            <Fragment>
              <p>{desc.title}</p>
              <ul>
                {desc.points.map((point) => (
                  <li dangerouslySetInnerHTML={{__html: point}} />
                ))}
              </ul>
            </Fragment>
          ))}
      </Col>
      <Col md={3} align="left">
        <p>{duration}</p>
      </Col>
    </Row>
  </div>
);

export default TimedEvent;
