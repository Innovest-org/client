import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faLock,
  faUsers,
  faCommentDots,
  faChartBar,
  faUserTie,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../../pages/Home/LandingPage";
import Navbar from "../Navbar/Navbar"

export default function HowItWorks() {
  const howItWorksRef = useRef(null);

  return (
    <section ref={howItWorksRef} id="how-it-works" className="how-it-works">
      <Container>
        <div className="text-center mb-4">
          <h3 className="sub-heading">Invest Securely, Connect Privately</h3>
          <h2 className="fw-bold">
            How <span className="highlighted-text">INNOVEST</span> Works?
          </h2>
        </div>
        <Row className="justify-content-center mb-4">
          <Col md={12} className="text-center">
            <img
              src={require("../../../assets/4th.png")}
              alt="Innovest Process"
              className="process-image"
            />
          </Col>
        </Row>
        <Row className="text-center icon-row mb-5">
          <Col md={4}>
            <FontAwesomeIcon icon={faLock} size="3x" className="icon" />
            <h5 className="mt-3">Secure Transactions</h5>
            <p>Your data is protected with top-notch security protocols.</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faUsers} size="3x" className="icon" />
            <h5 className="mt-3">Community Driven</h5>
            <p>Join a network of like-minded investors and entrepreneurs.</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faCommentDots} size="3x" className="icon" />
            <h5 className="mt-3">Expert Guidance</h5>
            <p>Get advice from experienced mentors in the field.</p>
          </Col>
        </Row>
        <Row className="text-center icon-row mb-5">
          <Col md={4}>
            <FontAwesomeIcon icon={faChartBar} size="3x" className="icon" />
            <h5 className="mt-3">Data-Driven Insights</h5>
            <p>Leverage data to make informed investment decisions.</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faUserTie} size="3x" className="icon" />
            <h5 className="mt-3">Professional Network</h5>
            <p>Connect with industry leaders and potential partners.</p>
          </Col>
          <Col md={4}>
            <FontAwesomeIcon icon={faExchangeAlt} size="3x" className="icon" />
            <h5 className="mt-3">Flexible Investments</h5>
            <p>Choose investment options that suit your goals.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
