import React, { Fragment } from "react"
import { Accordion, AccordionToggle, Card, Col, Row } from "react-bootstrap"
import classes from "./Section.module.css"
import classNames from "classnames";

const signColors = ["blue-sign", "red-sign", "pink-sign", "purple-sign"];
const contentColors = [classes["black-on-white"], classes["black-on-blue"], classes["black-on-pink"]];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

class Section extends React.Component {
    render() {
        const { children, extraContent, extraContentHeader } = this.props;

        const headingColor = signColors[getRandomInt(signColors.length)];
        const contentColor = contentColors[getRandomInt(contentColors.length)];

        return <div>
            <Row style={{ flexDirection: "row" }}>
                <Col xs={3} md={1}>
                    <div className={classNames(classes.heading, headingColor)}>
                        <span className="english" style={{ letterSpacing: -8 }}>
                            EXPERIENCE
                        </span>
                        {"　"}
                        <span className="japanese">
                            職歴
                        </span>
                    </div>
                </Col>
                <Col xs={9} md={11} style={{ paddingLeft: 0 }}>
                    {children.map((child, ix) =>
                        <div style={ix != 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                            {child}
                        </div>

                    )}
                    {extraContent && <Accordion>
                        <Card className={classNames(headingColor, classes["extra-card"])}>
                            <AccordionToggle as={Card.Header} eventKey="0">
                                <h4 className={classes["extra-header"]}>
                                    {extraContentHeader}
                                </h4>
                            </AccordionToggle>
                            <Accordion.Collapse eventKey="0">
                                <Fragment>
                                    {extraContent.map((child, ix) =>
                                        <div style={ix != 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                                            {child}
                                        </div>
                                    )}
                                </Fragment>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>}
                </Col>
            </Row>
        </div>
    }
}

export default Section;