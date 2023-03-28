import Experience from "components/neotokyo/Experience/Experience";
import Home from "components/neotokyo/Home/Home";
import NavBar from "components/neotokyo/NavBar/NavBar";
import Portfolio from "components/neotokyo/Portfolio/Portfolio";
import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NeoTokyo.module.css"

class NeoTokyo extends React.Component {
    render() {
        return <div className="neotokyo">
            <div className={classes.default}>
                <Container style={{ maxWidth: "100%" }}>
                    <Row>
                        <Col xl={2}>
                            <div className={classes["nav-col"]}>
                                <NavBar />
                            </div>
                        </Col>
                        <Col xl={10} >
                            <div className={classes["content-col"]}>
                                <Home />
                                <Experience />
                                <Portfolio />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    }
}

export default NeoTokyo;