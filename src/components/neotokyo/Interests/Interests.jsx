import React from "react"
import Section from "../Section/Section"
import interests from "text/Interests.json"

class Interests extends React.Component {
    render() {
        return <Section
            id="interests"
            sectionHeader={interests.header}>
            {interests.interests.map((section, ix) => (
                <div>
                    <p>{section.header}</p>
                    <ul>
                        {section.points.map((point) => (
                            <li dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    }
}

export default Interests;