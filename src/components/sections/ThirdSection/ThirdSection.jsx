import React from 'react'
import "../../../pages/Home/LandingPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ThirdSection() {
  return (
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
              src={require("../../../assets/section3Image.png")}
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
              src={require("../../../assets/section3Image2.png")}
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
              src={require("../../../assets/section3Image3.png")}
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
  )
}
