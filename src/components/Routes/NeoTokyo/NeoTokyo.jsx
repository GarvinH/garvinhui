import Education from "components/neotokyo/Education/Education";
import Experience from "components/neotokyo/Experience/Experience";
import Home from "components/neotokyo/Home/Home";
import Interests from "components/neotokyo/Interests/Interests";
import NavBar from "components/neotokyo/NavBar/NavBar";
import Portfolio from "components/neotokyo/Portfolio/Portfolio";
import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NeoTokyo.module.css"

class NeoTokyo extends React.Component {
    homeRef = React.createRef();
    experienceRef = React.createRef();
    portfolioRef = React.createRef();
    educationRef = React.createRef();
    interestRef = React.createRef();

    render() {
        return <div className="neotokyo">
            <div className={classes.default}>
                <Container style={{ maxWidth: "100%" }}>
                    <Row>
                        <Col xl={3} className={classes["nav-col"]}>
                            <div className={classes["nav-col-div"]}>
                                <NavBar
                                    homeRef={this.homeRef}
                                    experienceRef={this.experienceRef}
                                    portfolioRef={this.portfolioRef}
                                    educationRef={this.educationRef}
                                    interestRef={this.interestRef}
                                />

                            </div>
                        </Col>
                        <Col xl={9} >
                            <div className={classes["content-col"]} ref={this.homeRef}>
                                <Home />
                                <Experience reference={this.experienceRef} />
                                <Portfolio reference={this.portfolioRef} />
                                <Education reference={this.educationRef} />
                                <Interests reference={this.interestRef} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    }
}

export default NeoTokyo;