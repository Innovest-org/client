import React, { useRef } from "react";
import { Container, Accordion } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/Home/LandingPage";

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

export default function InsightsSection() {
  const insightsRef = useRef(null);

  return (
    <section ref={insightsRef} id="insights" className="faq-section py-5">
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
  );
}
