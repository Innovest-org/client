import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/Home/LandingPage";

export default function HeroSection() {
  return (
    <div className="hero-container">
        <div className="black-overlay">
          <div className="join-text">
            Join our innovative platform where entrepreneurs
            <br />
            <span>and investors unite in a secure environment.</span>
          </div>
        </div>
        <div className="text-container">
          <h1 className="top-text" style={{ fontSize: "4rem" }}>
            Empower Your
          </h1>

          <h1 className="bottom-text">
            <span className="highlight-text">Investment</span> Journey
          </h1>
        </div>
        <div className="scroll-text">Scroll Down to Explore!</div>
      </div>
  )
}
