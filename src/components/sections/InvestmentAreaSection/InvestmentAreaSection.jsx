import React from "react";
import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/Home/LandingPage";
import Navbar from "../Navbar/Navbar";

export default function InvestmentAreaSection() {
  const joinUsRef = useRef(null);

  return (
    <section ref={joinUsRef} id="join-us" className="investment-area py-5">
      <Container>
        <h5 className="text-uppercase text-muted text-center investment-subtitle">
          Empower Your Investment Journey
        </h5>
        <h2 className="fw-bold mb-5 text-center investment-title">
          Join Our Thriving Investment Community
        </h2>

        <Row className="g-4">
          {/* Card 1 */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm card-custom">
              <Card.Body className="d-flex align-items-start">
                <div className="custom-icon mb-3 me-3">
                  <i className="fas fa-bolt icon-large"></i>
                </div>
                <div>
                  <Card.Title>Investor-Friendly</Card.Title>
                  <Card.Text>
                    Browse a wide range of projects tailored to your investment
                    preferences.
                  </Card.Text>
                  <Link to="/discover-more" className="text-primary">
                    Discover More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm card-custom">
              <Card.Body className="d-flex align-items-start">
                <div className="custom-icon mb-3 me-3">
                  <i className="fas fa-lightbulb icon-large"></i>
                </div>
                <div>
                  <Card.Title>Entrepreneur Access</Card.Title>
                  <Card.Text>
                    Showcase your innovative ideas to a network of potential
                    investors.
                  </Card.Text>
                  <Link to="/explore-opportunities" className="text-primary">
                    Explore Opportunities
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          {/* Card 3 */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm card-custom">
              <Card.Body className="d-flex align-items-start">
                <div className="custom-icon mb-3 me-3">
                  <i className="fas fa-clock icon-large"></i>
                </div>
                <div>
                  <Card.Title>Real-Time Updates</Card.Title>
                  <Card.Text>
                    Stay informed with the latest news and discussions in the
                    investment world.
                  </Card.Text>
                  <Link to="/stay-updated" className="text-primary">
                    Stay Updated
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm card-custom">
              <Card.Body className="d-flex align-items-start">
                <div className="custom-icon mb-3 me-3">
                  <i className="fas fa-handshake icon-large"></i>
                </div>
                <div>
                  <Card.Title>Growth Partnerships</Card.Title>
                  <Card.Text>
                    Foster meaningful connections that can lead to successful
                    collaborations.
                  </Card.Text>
                  <Link to="/build-relationships" className="text-primary">
                    Build Relationships
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
