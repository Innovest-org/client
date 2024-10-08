import React from "react";
import "../../../pages/Home/LandingPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SecondSection() {
  return (
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
            className="right-half d-flex justify-content-center align-items-start flex-column "
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
  );
}
