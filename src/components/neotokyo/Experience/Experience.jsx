import React from "react"
import Section from "../Section/Section"
import jobs from "text/Experience.json"
import TimedEvent from "components/regular/TimedEvent/TimedEvent";
import classes from "./Experience.module.css"

class Experience extends React.Component {
    render() {
        return <div style={{ marginTop: 32 }}>
            <Section extraContent={jobs.optional.map((job) => (
                <TimedEvent
                    className={classes["experience-neotokyo"]}
                    institution={job.institution}
                    title={job.title}
                    descs={job.descs}
                    notes={job.notes}
                    duration={job.duration}
                />
            ))} extraContentHeader={`${jobs["non-technical"].en}・${jobs["non-technical"].jp}`}>
                {jobs.required.map((job, ix) => (
                    <TimedEvent
                        institution={job.institution}
                        title={job.title}
                        descs={job.descs}
                        notes={job.notes}
                        duration={job.duration}
                        className={classes["experience-neotokyo"]}
                        key={ix}
                    />
                ))}
            </Section>
        </div>
    }
}

export default Experience;