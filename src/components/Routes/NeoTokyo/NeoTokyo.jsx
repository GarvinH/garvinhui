import Home from "components/neotokyo/Home/Home";
import NavBar from "components/neotokyo/NavBar/NavBar";
import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NeoTokyo.module.css"

class NeoTokyo extends React.Component {
    render() {
        return <div className={classes.default}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default NeoTokyo;