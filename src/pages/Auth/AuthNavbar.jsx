import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/AuthNavbar.css";

const AuthNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          INNOVEST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/invest">
                Invest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">
                How It Works
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/discover"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Discover
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/discover/item1">
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/discover/item2">
                    Item 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/discover/item3">
                    Item 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-get-started" to="/sign-up">
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
