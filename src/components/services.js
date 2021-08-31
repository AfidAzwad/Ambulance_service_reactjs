import React from "react";
import "./style.css";
import nonac from "../images/nonac.png";
import ac from "../images/ac.png";
import freeze from "../images/freezer.png";
import icu from "../images/icu.png";
import { Col, Container, Figure, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div class="services" id="service" style={{ background: "ash" }}>
      <h1 style={{ fontWeight: "bold", padding: "50px" }}>Our Services</h1>
      <Container className="col-8">
        <Row xs={1} md={2} lg={2} xl={2}>
          <Col>
            <Card.Img className="img-fluid" alt="image" src={nonac} />
            <Card.Title>
              <Link to="/nonac">
                <p style={{ fontSize: "15px" }}>Non-AC Ambulance</p>
              </Link>
            </Card.Title>
          </Col>
          <Col>
            <Card.Img className="img-fluid" alt="image" src={ac} />
            <Card.Title>
              <Link to="/nonac">
                <p style={{ fontSize: "15px" }}>AC Ambulance</p>
              </Link>
            </Card.Title>
          </Col>
          <Col>
            <Card.Img className="img-fluid" alt="image" src={icu} />
            <Card.Title>
              <Link to="/nonac">
                <p style={{ fontSize: "15px" }}>ICU Ambulance</p>
              </Link>
            </Card.Title>
          </Col>

          <Col>
            <Card style={{ border: "none" }}>
              <Card.Img className="img-fluid" alt="image" src={freeze} />
              <Card.Title>
                <Link to="/nonac">
                  <p style={{ fontSize: "15px" }}>Freezer Ambulance</p>
                </Link>
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
