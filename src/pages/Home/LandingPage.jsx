import React, { useRef } from "react";
import { Button, Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
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
import "./LandingPage.css";

export default function LandingPage() {
  const innovestRef = useRef(null);

  const scrollToInnovest = () => {
    if (innovestRef.current) {
      innovestRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const team = [
    {
      name: "Sophia Chan",
      role: "Innovative Entrepreneur",
      image: require("../../assets/a_user01_avatar.png"),
    },
    {
      name: "Michael Thompson",
      role: "Experienced Investor",
      image: require("../../assets/a_user02_avatar.png"),
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Mentor",
      image: require("../../assets/a_user03_avatar.png"),
    },
    {
      name: "James Kwan",
      role: "Tech Investor",
      image: require("../../assets/a_user04_avatar.png"),
    },
    {
      name: "Olivia Patel",
      role: "Venture Capitalist",
      image: require("../../assets/a_user05_avatar.png"),
    },
    {
      name: "Liam Johnson",
      role: "Finance Expert",
      image: require("../../assets/a_user06_avatar.png"),
    },
    {
      name: "Ava Smith",
      role: "Emerging Entrepreneur",
      image: require("../../assets/a_user07_avatar.png"),
    },
    {
      name: "Ethan Brown",
      role: "Angel Investor",
      image: require("../../assets/a_user08_avatar.png"),
    },
  ];
  const faqs = [
    {
      question: "What is the purpose of this platform?",
      answer:
        "We prioritize confidentiality by ensuring all project ideas and discussions are protected. Each user has secure profiles and private chat options to communicate freely.",
    },
    {
      question: "How does privacy work on the platform?",
      answer:
        "We prioritize confidentiality by ensuring that all project ideas and discussions are protected. Each user has secure profiles and private chat options to communicate freely.",
    },
    {
      question: "Can I browse projects as an investor?",
      answer:
        "Absolutely! Investors can explore various projects categorized by industry and interest, allowing for informed decisions about their investments.",
    },
    {
      question: "Are there community discussions available?",
      answer:
        "Yes, our platform features categorized communities for discussions, posts, and news about investments, fostering a collaborative environment for all members.",
    },
    {
      question: "Is there support for emerging ventures?",
      answer:
        "Definitely! Our platform supports the growth of emerging ventures by creating a space where entrepreneurs, investors, and mentors can interact, share knowledge, and offer guidance.",
    },
    {
      question: "How can I get started on the platform?",
      answer:
        "Getting started is easy! Sign up for free, create your profile, and begin connecting with potential investors or entrepreneurs to grow your network.",
    },
  ];

  return (
    <>
      <div className="hero-container">
        <div className="black-overlay">
          <div className="join-text">
            Join our innovative platform where entrepreneurs
            <br />
            <span>and investors unite in a secure environment.</span>
          </div>
        </div>
        <div className="text-container">
          <h1 className="top-text" style={{ fontSize: "5rem" }}>
            Empower Your
          </h1>

          <h1 className="bottom-text">
            <span className="highlight-text">Investment</span> Journey
          </h1>
        </div>
        <div className="scroll-text">Scroll Down to Explore!</div>
      </div>

      <section className="new-section d-flex">
        <Container>
          <Row>
            <Col
              md={6}
              className="left-half d-flex justify-content-center align-items-start flex-column"
            >
              <h2 className="text-position">Connecting</h2>
              <h2 className="text-position">Entrepreneurs and</h2>
              <h2 className="hl-text larger-text">Investors</h2>
              <p className="footer-text">
                Connecting Entrepreneurs and Investors
              </p>
            </Col>
            <Col
              md={6}
              className="right-half d-flex justify-content-center align-items-start flex-column"
            >
              <div>
                <h2>5.5 million</h2>
                <p>Over 500 million in investments secured.</p>
              </div>
              <div>
                <h2>24 billion</h2>
                <p>Facilitated connections worth over 3 billion dollars.</p>
              </div>
              <div>
                <h2>99%</h2>
                <p>Yearly value growth</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="third-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-left">
              <p className="text-muted top-muted">
                Unlock Your Investment Potential with a Secure Network
              </p>
              <h2 className="font-weight-bold top-text">
                Connecting Ambitious Entrepreneurs with Visionary Investors
              </h2>
            </div>
          </div>
          <div className="row">
            {/* First Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={require("../../assets/section3Image.png")}
                  className="card-img-top"
                  alt="Investment Opportunities"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Investment Opportunities</h5>
                  <p className="card-text text-muted">Venture Capital</p>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={require("../../assets/section3Image2.png")}
                  className="card-img-top"
                  alt="Entrepreneur Networking"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Entrepreneur Networking</h5>
                  <p className="card-text text-muted">Startup Discussions</p>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={require("../../assets/section3Image3.png")}
                  className="card-img-top"
                  alt="Secure Messaging"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Secure Messaging</h5>
                  <p className="card-text text-muted">Private Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
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
            <Col md={6} className="text-center">
              <img
                src={require("../../assets/section2Image.png")}
                alt="Investment Platform"
                className="img-fluid investment-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="innovest-section" ref={innovestRef}>
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
                src={require("../../assets/4th.png")}
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
              <FontAwesomeIcon
                icon={faCommentDots}
                size="3x"
                className="icon"
              />
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
              <FontAwesomeIcon
                icon={faExchangeAlt}
                size="3x"
                className="icon"
              />
              <h5 className="mt-3">Flexible Investments</h5>
              <p>Choose investment options that suit your goals.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-section">
        <Container className="text-center">
          <h2 className="font-weight-bold">
            Empowering Connections for Innovators
          </h2>
          <p className="mb-5">
            Join a vibrant ecosystem where ideas and investments converge.
          </p>
          <Row>
            {team.map((person, index) => (
              <Col key={index} md={3} sm={6} className="mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-circle img-fluid"
                />
                <h5 className="mt-3">{person.name}</h5>
                <p className="text-muted">{person.role}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="investment-area py-5">
        <Container>
          <h5 className="text-uppercase text-muted text-center">
            Empower Your Investment Journey
          </h5>
          <h2 className="fw-bold mb-5 text-center">
            Join Our Thriving Investment Community
          </h2>

          <Row className="g-4">
            {/* Card 1 */}
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm card-custom">
                <Card.Body className="d-flex align-items-start">
                  <div className="custom-icon mb-3 me-3">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div>
                    <Card.Title>Investor-Friendly</Card.Title>
                    <Card.Text>
                      Browse a wide range of projects tailored to your
                      investment preferences.
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
                    <i className="fas fa-lightbulb"></i>
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
                    <i className="fas fa-clock"></i>
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
                    <i className="fas fa-handshake"></i>
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

      <section className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-4">Investment Insights Hub</h2>
          <h5 className="text-uppercase text-muted text-center mb-5">
            Your Questions Answered
          </h5>

          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}
