import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = ({ refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">INNOVEST</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(refs.investments)}
                style={{ cursor: 'pointer', background: 'none' }}
                aria-label="Go to Investments section"
              >
                Investments
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(refs.howItWorks)}
                style={{ cursor: 'pointer', background: 'none' }}
                aria-label="Go to How It Works section"
              >
                How It Works
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(refs.experts)}
                style={{ cursor: 'pointer', background: 'none' }}
                aria-label="Go to Experts section"
              >
                Experts
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(refs.joinUs)}
                style={{ cursor: 'pointer', background: 'none' }}
                aria-label="Go to Join Us section"
              >
                Join Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(refs.insights)}
                style={{ cursor: 'pointer', background: 'none'}}
                aria-label="Go to Insights section"
              >
                Insights
              </button>
            </li>
            <li className="nav-item">
              <Link className="btn btn-get-started" to="/sign-up">Get Started</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
