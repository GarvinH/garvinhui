import React from "react"
import Section from "../Section/Section"
import portfolio from "text/Portfolio.json"

const Project = ({ title, content }) => <div>
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: content.tech.join(", ") }} />
    {content.desc && <p>{content.desc}</p>}
</div>

class Portfolio extends React.Component {
    render() {
        return <div style={{ marginTop: 32 }}>
            <Section
                id="portfolio"
                sectionHeader={portfolio.title}
                extraContent={portfolio.optional.map((project_category) => project_category.projects.map((project) => <Project {...project} />))}
                extraContentHeader={portfolio.optional.map((project_category) => project_category.heading)}>
                {portfolio.mandatory.projects.map((project) => <Project {...project} />)}
            </Section>
        </div>
    }
}

export default Portfolio;