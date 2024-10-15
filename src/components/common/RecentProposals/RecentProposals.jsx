import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/Proposals_Logo.png'

const RecentProposals = () => {

  const navigate = useNavigate();

  const proposals = [
    {
      id: 1,
      logo: 'https://via.placeholder.com/50', 
      title: 'AI-Driven Cybersecurity',
      description: 'We are looking for an investor for $60,000 in our project...',
      rating: 5,
      verified: true,
      documents: 2
    },
    {
      id: 2,
      logo: 'https://via.placeholder.com/50',
      title: 'AI-Driven Cybersecurity',
      description: 'We are looking for an investor for $60,000 in our project...',
      rating: 5,
      verified: true,
      documents: 2
    },
    {
      id: 3,
      logo: 'https://via.placeholder.com/50',
      title: 'AI-Driven Cybersecurity',
      description: 'We are looking for an investor for $60,000 in our project...',
      rating: 5,
      verified: true,
      documents: 2
    },
    {
      id: 4,
      logo: 'https://via.placeholder.com/50',
      title: 'AI-Driven Cybersecurity',
      description: 'We are looking for an investor for $60,000 in our project...',
      rating: 5,
      verified: true,
      documents: 2
    },
  ];

  const handleProposalClick = (id) => {
    navigate(`/investor-dashboard/proposals/${id}`);
  }

  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold" style={{fontSize: 22}}>Recent Proposals</h3>
        <Button variant="link" style={{color: '#F47920'}}>Last 30 days <span>&#9660;</span></Button>
      </div>
      
      <Row>
        {proposals.map((proposal, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="mb-5">
            <Card className="border-2 shadow-sm" onClick={() => handleProposalClick(proposal.id)} style={{border: '1px solid #F47920'}}>
              <Card.Body className="d-flex" style={{cursor: 'pointer'}}>
                {/* Left: Logo */}
                <div className="me-3">
                  <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </div>
                
                {/* Middle: Title and Description */}
                <div className="flex-grow-1">
                  <Card.Title className="d-flex justify-content-between">
                    <span>{proposal.title}</span>
                    <FontAwesomeIcon icon={faBookmark} className="text-muted" />
                  </Card.Title>
                  <Card.Text>{proposal.description}</Card.Text>
                  
                  {/* Bottom: Status and Details */}
                  <div className="d-flex justify-content-between align-items-center mt-5 ">
                    <div className="text-warning">
                      {Array.from({ length: proposal.rating }).map((_, idx) => (
                        <FontAwesomeIcon key={idx} icon={faStar} />
                      ))}
                    </div>
                    <div className="text-muted">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary  me-2" />Project Verified
                    </div>
                    <div className="text-muted">
                      Documents: {proposal.documents}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentProposals;
