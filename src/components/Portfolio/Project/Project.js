import React from "react";
import { Popover, OverlayTrigger, Card, Col } from "react-bootstrap";

const Details = (
  <Popover>
    <Popover.Content>test</Popover.Content>
  </Popover>
);

const Project = ({ img, title }) => (
  <OverlayTrigger trigger="hover" overlay={Details} placement="bottom">
    <Col align="center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body style={{borderTop: "1px black solid"}}>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  </OverlayTrigger>
);

export default Project;
