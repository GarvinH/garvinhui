import React, { Fragment } from "react";
import {
  Jumbotron,
  Accordion,
  Card,
} from "react-bootstrap";
import jobs from "text/Experience.json";
import TimedEvent from "components/regular/TimedEvent/TimedEvent";
import { CustomToggle } from "components/regular/AccordionToggle/CustomToggle";

import classes from "./Experience.module.css"
import NavBar from "components/regular/NavBar/NavBar";

const Experience = () => (
  <div className="regular">
    <NavBar />
    <Jumbotron>
      <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
        {jobs.header.en} 
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
            <CustomToggle eventKey="0">{jobs["non-technical"].en}</CustomToggle>
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
  </div>
);

export default Experience;
