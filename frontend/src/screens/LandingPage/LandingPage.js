import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to Note Watcher</h1>
                <p className="subtitle">One safe place for all your notes.</p>
              </div>
              <div className="buttonContainer">
                <a href="/login">
                  <Button className="landingButton" size="lg">
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    className="landingButton"
                    size="lg"
                    variant="outline-primary"
                  >
                    Sign up
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
