import React from "react"
import Section from "../Section/Section"
import portfolio from "text/Portfolio.json"
import classes from "./Portfolio.module.css"

const Project = ({ title, content, classNames }) => <div>
    <div className={classNames}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: content.tech.join(", ") }} />
        {content.desc && <p>{content.desc}</p>}
    </div>
    <div className={classes.links}>
        {content.links.map((link, ix) => <span key={ix}>
            {ix > 0 && "・"}
            <a href={link.href}>{link.text}</a>
        </span>)}
    </div>
</div>

class Portfolio extends React.Component {
    render() {
        const { reference } = this.props;

        return <Section
            reference={reference}
            id="portfolio"
            sectionHeader={portfolio.header}
            extraContent={portfolio.optional.map((project_category) => project_category.projects.map((project, ix) => <Project key={ix} classNames={classes.header} {...project} />))}
            extraContentHeader={portfolio.optional.map((project_category) => `${project_category.heading.en}・${project_category.heading.jp}`)}>
            {portfolio.mandatory.projects.map((project, ix) => <Project key={ix} {...project} />)}
        </Section>
    }
}

export default Portfolio;