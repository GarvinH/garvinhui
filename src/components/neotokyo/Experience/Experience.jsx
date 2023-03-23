import React from "react"
import Section from "../Section/Section"
import jobs from "text/Experience.json"
import TimedEvent from "components/regular/TimedEvent/TimedEvent";
import classes from "./Experience.module.css"

class Experience extends React.Component {
    render() {
        return <div style={{marginTop: 32}}>
            <Section>
                {jobs.required.map((job, ix) => (
                    <TimedEvent
                        institution={job.institution}
                        title={job.title}
                        descs={job.descs}
                        notes={job.notes}
                        duration={job.duration}
                        className={classes["no-bottom-margin"]}
                        key={ix}
                    />
                ))}
            </Section>
        </div>
    }
}

export default Experience;