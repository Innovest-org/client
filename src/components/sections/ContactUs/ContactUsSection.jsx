import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import "../../../pages/Home/LandingPage";

export default function ContactUsSection() {
  return (
    <section className="contact-us-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="contact-heading mb-2">Get in touch with us</h2>
            <p className="contact-description mb-5">
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
          
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col md={6} className="mb-4 form-container">
            <form>
              <Row>
                <Col md={6} className="mb-4">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Name" />
                </Col>
                <Col md={6} className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </Col>
              </Row>
              <div className="mb-4">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
              </div>
              <Button className="btn-orange-send" type="submit">Send Message</Button>

            </form>
          </Col>
          
          <Col md={4}>
            <div className="image-container">
              <img
                src={require("../../../assets/section2Image.png")}
                alt="Window with vines"
                className="img-ContactUs"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
