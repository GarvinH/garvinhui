import React, { Fragment } from "react";
import _ from "lodash";
import { Jumbotron } from "react-bootstrap";
import educations from "./Education.json";
import TimedEvent from "../../TimedEvent/TimedEvent";

const Education = () => (
  <Jumbotron>
    {educations.map((education_type, index) => (
      <Fragment key={index}>
        <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
          {education_type.title}
        </h1>
        {education_type.educations.map((education) => (
          <Fragment key={_.uniqueId("education")}>
            <TimedEvent
              institution={education.institution}
              notes={education.notes}
              title={education.title}
              descs={education.descs}
              duration={education.duration}
            />
          </Fragment>
        ))}
      </Fragment>
    ))}
  </Jumbotron>
);

export default Education;
