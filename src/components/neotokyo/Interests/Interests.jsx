import React from "react"
import Section from "../Section/Section"
import interests from "text/Interests.json"

class Interests extends React.Component {
    render() {
        const { reference } = this.props;
        
        return <Section
            reference={reference}
            id="interests"
            sectionHeader={interests.header}>
            {interests.interests.map((section, ix) => (
                <div key={ix}>
                    <p>{section.header}</p>
                    <ul>
                        {section.points.map((point, ix) => (
                            <li key={ix} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    }
}

export default Interests;