import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";

const Education = () => (
  <Jumbotron>
    <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
      Education
    </h1>
    <h2 style={{ fontSize: "2.5rem", fontWeight: 600, textAlign: "left" }}>
      University of Ottawa
    </h2>
    <Row>
      <Col md={9} align="left">
        <h2>Bachelor of Applied Science, Software Engineering</h2>
        <p>cGPA: 9.7 / 10</p>
        <p>Relevant courses:</p>
        <ul>
          <li>Introduction to Computing I - ITI 1120 (Python)</li>
          <li>Professional Communication and Responsibility - SEG 2900</li>
          <li>Digital Systems I - ITI 1100</li>
          <li>Introduction to Computing II - ITI 1121 (Java)</li>
          <li>Discrete Mathematics for Computing - MAT 1348</li>
        </ul>
      </Col>
      <Col md={3} align="left">
        <p>September 2019 - December 2023</p>
      </Col>
    </Row>
  </Jumbotron>
);

export default Education;
