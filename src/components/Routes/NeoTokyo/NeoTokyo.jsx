import Education from "components/neotokyo/Education/Education";
import Experience from "components/neotokyo/Experience/Experience";
import Home from "components/neotokyo/Home/Home";
import Interests from "components/neotokyo/Interests/Interests";
import NavBar from "components/neotokyo/NavBar/NavBar";
import Portfolio from "components/neotokyo/Portfolio/Portfolio";
import React from "react"
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
                            <NavBar
                                homeRef={this.homeRef}
                                experienceRef={this.experienceRef}
                                portfolioRef={this.portfolioRef}
                                educationRef={this.educationRef}
                                interestRef={this.interestRef}
                            />
                        </Col>
                        <Col xl={9} style={{ display: "flex", justifyContent: "center" }}>
                            <div className={classes["content-col"]} ref={this.homeRef}>
                                <Home />
                                <Experience reference={this.experienceRef} />
                                <Portfolio reference={this.portfolioRef} />
                                <Education reference={this.educationRef} />
                                <Interests reference={this.interestRef} />
                            </div>
                        </Col>
                    </Row>
                    <footer>
                        <Nav.Link as={NavLink} to="/home">Regular Site・普通サイト</Nav.Link>
                    </footer>
                </Container>
            </div>
        </div>
    }
}

export default NeoTokyo;