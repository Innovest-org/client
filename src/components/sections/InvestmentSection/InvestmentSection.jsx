import React from "react";
import React, { useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/Home/LandingPage";
import Navbar from "../Navbar/Navbar";

export default function InvestmentSection() {
  const investmentsRef = useRef(null);

  const scrollToInnovest = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
        ref={investmentsRef}
        id="investments"
        className="investment-section"
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-left slide-in-left">
              <div className="badge-label">
                Connecting Ideas, Securing Futures
              </div>
              <h3 className="investment-heading">
                Join Our Exclusive Investment Network
              </h3>
              <p className="investment-description">
                Discover a platform designed to bring together entrepreneurs and
                investors, creating a secure and prosperous future for both.
              </p>
              <div className="button-group">
                <Link to="/sign-up">
                  <Button
                    variant="warning"
                    className="btn-orange"
                    onClick={scrollToInnovest}
                  >
                    Start Your Journey Today
                  </Button>
                </Link>
                <Button
                  variant="outline-secondary"
                  className="btn-outline"
                  onClick={scrollToInnovest}
                >
                  <i className="fas fa-play-circle"></i> See How It Works
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center slide-in-right">
              <img
                src={require("../../assets/section2Image.png")}
                alt="Investment Platform"
                className="img-fluid investment-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
  );
}
