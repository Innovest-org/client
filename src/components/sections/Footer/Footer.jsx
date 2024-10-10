import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Footer.css';

const ContactInfo = () => (
  <div className="col-md-3 contact-info">
    <h5 className="innovest-logo">INNOVEST</h5>
    <p>
      <i className="fas fa-envelope contact-icon"></i>
      <a href="mailto:innovest@hello.com" className="contact-link">innovest@hello.com</a>
    </p>
    <p>
      <i className="fas fa-phone contact-icon"></i>
      <a href="tel:+13866883295" className="contact-link">+1 386-688-3295</a>
    </p>
  </div>
);

const FooterSection = ({ title, links }) => (
  <div className="col-md-3">
    <h5 className="section-title">{title}</h5>
    <ul className="list-unstyled">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} className="footer-link">{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialMediaLinks = () => (
  <div className="col-md-3 social-media">
    <h5 className="section-title">Our Social Media</h5>
    <ul className="list-unstyled">
      {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((platform) => (
        <li key={platform}>
          <Link to="#" className="footer-link">
            <i className={`fab fa-${platform.toLowerCase()} contact-icon`}></i> {platform}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterSection = () => (
  <div className="col-md-3 newsletter">
    <h5 className="section-title">Join a Newsletter</h5>
    <div className="btn-send-container">
      <div className="email-label">Your Email</div>
      <input
        type="email"
        className="newsletter-input"
        placeholder="Enter Your Email"
      />
      <button type="submit" className="btn-newsletter">
        Send
      </button>
    </div>
  </div>
); 

const Footer = () => {
  const services = [
    { label: 'Innovest', path: '/investor-dashboard' },
    { label: 'Consulting', path: '/consulting' },
    { label: 'Investment', path: '/investment' },
    { label: 'Strategy', path: '/strategy' },
    { label: 'Research', path: '/research' },
    { label: 'Reports', path: '/reports' },
  ];

  const companyLinks = [
    { label: 'Service', path: '/service' },
    { label: 'Features', path: '/features' },
    { label: 'Our Team', path: '/our-team' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="container">
          <div className="row align-items-start">
            <ContactInfo />
            <div className="col-md-9 service-social-media">
              <FooterSection title="Service" links={services} />
              <FooterSection title="Company" links={companyLinks} />
              <SocialMediaLinks />
              <NewsletterSection />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
