import React from "react"
import Section from "../Section/Section"
import educations from "text/Education.json"
import TimedEvent from "components/regular/TimedEvent/TimedEvent"

class Education extends React.Component {
    render() {
        return <Section
            id="educations"
            sectionHeader={educations.header}
            extraContent={[educations.certificates.educations.map(education => <TimedEvent
                className="neotokyo-timed-event-extra"
                institution={education.institution}
                notes={education.notes}
                title={education.title}
                descs={education.descs}
                duration={education.duration}
            />)]}
            extraContentHeader={[`${educations.certificates.title.en}・${educations.certificates.title.jp}`]}
        >
            {educations.academia.educations.map(education =>
                <TimedEvent
                    className="neotokyo-timed-event"
                    institution={education.institution}
                    notes={education.notes}
                    title={education.title}
                    descs={education.descs}
                    duration={education.duration}
                />
            )}
        </Section>

    }
}

export default Education;