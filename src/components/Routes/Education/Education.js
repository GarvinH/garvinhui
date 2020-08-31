import React from "react";
import { Jumbotron } from "react-bootstrap";
import educations from "./Education.json";
import TimedEvent from "../../TimedEvent/TimedEvent";

const Education = () => (
  <Jumbotron>
    <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
      Education
    </h1>
    {educations.map((education, index) => (
      <TimedEvent
        key={index}
        institution={education.institution}
        notes={education.notes}
        title={education.title}
        descs={education.descs}
        duration={education.duration}
      />
    ))}
  </Jumbotron>
);

export default Education;
