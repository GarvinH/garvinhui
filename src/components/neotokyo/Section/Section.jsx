import React, { Fragment } from "react"
import { Accordion, AccordionToggle, Card, Col, Row } from "react-bootstrap"
import classes from "./Section.module.css"
import classNames from "classnames";
import { Sticky, StickyContainer } from "react-sticky";

const signColors = ["blue-sign", "red-sign", "pink-sign", "purple-sign"];
const contentColors = [classes["black-on-white"], classes["black-on-blue"], classes["black-on-pink"]];
const stickyMargin = 64;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

class Section extends React.Component {
    render() {
        const { sectionHeader, children, extraContent, extraContentHeader } = this.props;

        const headingColor = signColors[getRandomInt(signColors.length)];
        const contentColor = contentColors[getRandomInt(contentColors.length)];

        return <div>
            <StickyContainer>
                <Row style={{ flexDirection: "row" }}>
                    <Col xs={3} md={1}>
                        <Sticky topOffset={-stickyMargin} bottomOffset={stickyMargin}>
                            {({ style, isSticky }) =>
                                <div style={{...style, marginTop: isSticky ? stickyMargin : 0}} className={classNames(classes.heading, headingColor)}>
                                    <span className="english" style={{ letterSpacing: -8 }}>
                                        {sectionHeader.en.toUpperCase()}
                                    </span>
                                    {"　"}
                                    <span className="japanese">
                                        {sectionHeader.jp}
                                    </span>
                                </div>
                            }
                        </Sticky>
                    </Col>
                    <Col xs={9} md={11} style={{ paddingLeft: 0 }}>
                        {children.map((child, ix) =>
                            <div style={ix != 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                                {child}
                            </div>

                        )}
                        {extraContent && extraContent.map((content, ix) => <Accordion key={ix}>
                            <Card className={classNames(headingColor, classes["extra-card"])}>
                                <AccordionToggle as={Card.Header} eventKey="0">
                                    <h4 className={classes["extra-header"]}>
                                        {extraContentHeader[ix]}
                                    </h4>
                                </AccordionToggle>
                                <Accordion.Collapse eventKey="0">
                                    <Fragment>
                                        {content.map((child, ix) =>
                                            <div style={ix != 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                                                {child}
                                            </div>
                                        )}
                                    </Fragment>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>)}
                    </Col>
                </Row>
            </StickyContainer>
        </div>
    }
}

export default Section;