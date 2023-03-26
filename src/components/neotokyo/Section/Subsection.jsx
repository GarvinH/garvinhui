import React from "react"
import classes from "./Section.module.css"
import { Accordion, AccordionToggle, Card } from "react-bootstrap"

class Subsection extends React.Component {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }), () => { setTimeout(() => { window.scrollBy(0, 1); window.scrollBy(0, -1) }, 300) })
    }

    render() {
        const { children, header, headingColor } = this.props

        return <Accordion className={headingColor} style={{ marginTop: 20 }}>
            <Card className={classes["extra-card"]}>
                <AccordionToggle as={Card.Header} eventKey="0" onClick={this.handleClick}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4 className={classes["extra-header"]}>
                            {header}
                        </h4>
                        <span>{this.state.isOpen ? "▲" : "▼"}</span>
                    </div>
                </AccordionToggle>
                <Accordion.Collapse eventKey="0">
                    <div style={{ padding: 10 }}>
                        {children}
                    </div>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    }
}

export default Subsection;