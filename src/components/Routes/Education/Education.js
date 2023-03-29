import React, { Fragment } from "react";
import _ from "lodash";
import { Jumbotron } from "react-bootstrap";
import educations from "text/Education.json";
import TimedEvent from "components/regular/TimedEvent/TimedEvent";
import NavBar from "components/regular/NavBar/NavBar";

const EducationType = (education_type) => <div>
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
</div>

const Education = () => (
  <div className="regular">
    <NavBar />
    <Jumbotron>
      <EducationType {...educations.academia} />
      <EducationType {...educations.certificates} title={educations.certificates.title.en} />
    </Jumbotron>
  </div>
);

export default Education;
