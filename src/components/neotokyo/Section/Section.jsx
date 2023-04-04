import React, { Fragment } from "react"
import { Col, Row } from "react-bootstrap"
import classes from "./Section.module.css"
import classNames from "classnames";
import Subsection from "./Subsection";
import Sticky from "react-stickynode";

const signColors = ["blue-sign", "red-sign", "pink-sign", "purple-sign"];
const contentColors = [classes["black-on-white"], classes["black-on-blue"], classes["black-on-pink"]];
const stickyMargin = 70;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

class Section extends React.Component {
    stickyRef = React.createRef()

    updateSticky = () => {
        const stickyInstance = this.stickyRef.current
        if (stickyInstance) {
            stickyInstance.updateInitialDimension()
            stickyInstance.update()
        }
    }

    render() {
        const { reference, id, sectionHeader, children, extraContent, extraContentHeader } = this.props;

        const headingColor = signColors[getRandomInt(signColors.length)];
        const contentColor = contentColors[getRandomInt(contentColors.length)];

        return <div id={id} style={{position: "relative", marginTop: 32}}>
            <div id={`${id}1`} ref={reference} style={{position: "absolute", top: -stickyMargin, height: stickyMargin}}/>
            <Row style={{ flexDirection: "row" }}>
                <Col xs={3} md={2} lg={1}>
                    <Sticky top={`#${id}1`} bottomBoundary={`#${id}`} ref={this.stickyRef}>
                        <div className={classNames(classes.heading, headingColor)}>
                            <span className="english" style={{ letterSpacing: -8 }}>
                                {sectionHeader.en.toUpperCase()}
                            </span>
                            {"　"}
                            <span className="japanese">
                                {sectionHeader.jp}
                            </span>
                        </div>
                    </Sticky>
                </Col>
                <Col xs={9} md={10} lg={11} style={{ paddingLeft: 0 }}>
                    {children.map((child, ix) =>
                        <div style={ix !== 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                            {child}
                        </div>

                    )}
                    {extraContent && extraContent.map((content, ix) => <Subsection updateSticky={this.updateSticky} key={ix} header={extraContentHeader[ix]} headingColor={headingColor}>
                        <Fragment>
                            {content.map((child, ix) =>
                                <div style={ix !== 0 ? { marginTop: 32 } : {}} key={ix} className={classNames(classes.content, contentColor)}>
                                    {child}
                                </div>
                            )}
                        </Fragment>
                    </Subsection>)}
                </Col>
            </Row>
        </div>
    }
}

export default Section;