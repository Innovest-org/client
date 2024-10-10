import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/Home/LandingPage";
import Navbar from "../Navbar/Navbar";

export default function TeamSection() {
  const expertsRef = useRef(null);

  const team = [
    {
      name: "Sophia Chan",
      role: "Innovative Entrepreneur",
      image: require("../../../assets/a_user01_avatar.png"),
    },
    {
      name: "Michael Thompson",
      role: "Experienced Investor",
      image: require("../../../assets/a_user02_avatar.png"),
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Mentor",
      image: require("../../../assets/a_user03_avatar.png"),
    },
    {
      name: "James Kwan",
      role: "Tech Investor",
      image: require("../../../assets/a_user04_avatar.png"),
    },
    {
      name: "Olivia Patel",
      role: "Venture Capitalist",
      image: require("../../../assets/a_user05_avatar.png"),
    },
    {
      name: "Liam Johnson",
      role: "Finance Expert",
      image: require("../../../assets/a_user06_avatar.png"),
    },
    {
      name: "Ava Smith",
      role: "Emerging Entrepreneur",
      image: require("../../../assets/a_user07_avatar.png"),
    },
    {
      name: "Ethan Brown",
      role: "Angel Investor",
      image: require("../../../assets/a_user08_avatar.png"),
    },
  ];
  

  return (
    <section ref={expertsRef} id="experts" className="team-section">
      <Container className="text-center all-title">
        <h2 className="font-weight-bold">
          Empowering Connections for{" "}
          <span className="inno-text"> Innovators</span>
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
  );
}
