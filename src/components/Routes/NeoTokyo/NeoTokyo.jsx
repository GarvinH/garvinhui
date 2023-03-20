import Home from "components/neotokyo/Home/Home";
import NavBar from "components/neotokyo/NavBar/NavBar";
import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NeoTokyo.module.css"

class NeoTokyo extends React.Component {
    render() {
        return <div className={classes.default}>
            <Container>
                <Row>
                    <Col xl={3} className={classes["nav-col"]}>
                        <NavBar />
                    </Col>
                    <Col xl={9} className={classes["content-col"]}>
                        <Home />
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default NeoTokyo;