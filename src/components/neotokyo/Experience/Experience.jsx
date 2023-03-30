import React from "react"
import Section from "../Section/Section"
import jobs from "text/Experience.json"
import TimedEvent from "components/regular/TimedEvent/TimedEvent";

class Experience extends React.Component {
    render() {
        return <Section
            id="experience"
            sectionHeader={jobs.header}
            extraContent={[jobs.optional.map((job) => (
                <TimedEvent
                    className="neotokyo-timed-event-extra"
                    institution={job.institution}
                    title={job.title}
                    descs={job.descs}
                    notes={job.notes}
                    duration={job.duration}
                />
            ))]} extraContentHeader={[`${jobs["non-technical"].en}・${jobs["non-technical"].jp}`]}>
            {jobs.required.map((job, ix) => (
                <TimedEvent
                    institution={job.institution}
                    title={job.title}
                    descs={job.descs}
                    notes={job.notes}
                    duration={job.duration}
                    className="neotokyo-timed-event"
                    key={ix}
                />
            ))}
        </Section>
    }
}

export default Experience;