import React, { Fragment } from "react";
import {
  Jumbotron,
  Accordion,
  Card,
  Button,
  useAccordionToggle,
} from "react-bootstrap";
import jobs from "./Experience.json";
import TimedEvent from "../../TimedEvent/TimedEvent";

import classes from "./Experience.module.css"

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <Button variant="dark" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
};

const Experience = () => (
  <Jumbotron>
    <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
      Experience
    </h1>
    {jobs.required.map((job) => (
      <TimedEvent
        institution={job.institution}
        title={job.title}
        descs={job.descs}
        notes={job.notes}
        duration={job.duration}
      />
    ))}
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Non-Technical Experience</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Fragment>
            {jobs.optional.map((job) => (
              <TimedEvent
                className={classes["non-technical"]}
                institution={job.institution}
                title={job.title}
                descs={job.descs}
                notes={job.notes}
                duration={job.duration}
              />
            ))}
          </Fragment>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Jumbotron>
);

export default Experience;
