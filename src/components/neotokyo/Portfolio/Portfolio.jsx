import React from "react"
import Section from "../Section/Section"
import portfolio from "text/Portfolio.json"
import classes from "./Portfolio.module.css"

const Project = ({ title, content, classNames }) => <div className={classNames}>
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: content.tech.join(", ") }} />
    {content.desc && <p>{content.desc}</p>}
</div>

class Portfolio extends React.Component {
    render() {
        return <Section
            id="portfolio"
            sectionHeader={portfolio.title}
            extraContent={portfolio.optional.map((project_category) => project_category.projects.map((project) => <Project classNames={classes.header} {...project} />))}
            extraContentHeader={portfolio.optional.map((project_category) => `${project_category.heading.en}・${project_category.heading.jp}`)}>
            {portfolio.mandatory.projects.map((project) => <Project {...project} />)}
        </Section>
    }
}

export default Portfolio;