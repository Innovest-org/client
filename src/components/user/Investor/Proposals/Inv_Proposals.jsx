import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Proposals_Logo from '../../../../assets/Proposals_Logo.png'
import Search_icon from '../../../../assets/serach_Icon.png'
import './Inv_Proposals.css'
import { useNavigate } from 'react-router-dom';

export default function Inv_Proposals() {

  const navigate = useNavigate();
  const cardsData = Array(12).fill({
    id: 1,
    logo: 'https://via.placeholder.com/50', 
    title: 'AI-Driven Cybersecurity',
    type: 'Technology',
    field: 'Cybersecurity, AI',
    seeking: '$2M Seed Funding',
    offer: '30%',
    received: 'July 1, 2023'
  });

  const handleCardClick = (id) => {
    navigate(`/investor-dashboard/proposals/${id}`);
  };

  return (
      <Container fluid>
      <div className='Proposals_Dashboard'>
      {/* Top Navigation Bar */}
      <div className="d-flex justify-content-between align-items-center p-3 bg-orange rounded-top" style={{height: 85}}>
        <div>
          <Button variant="light" className="me-2 bg-orange" style={{padding: '8px 30px'}}>
            <FontAwesomeIcon icon={faFilter} /> Filter
          </Button>
          <Button variant="light" className='bg-orange' style={{padding: '8px 30px'}}>
            <FontAwesomeIcon icon={faCalendar} /> Today
          </Button>
        </div>
        <Form className="d-flex" style={{ maxWidth: '600px', position: 'relative' }}>
          <Form.Control type="search" placeholder="Search proposals, budgets, fields..." className='serach_bar'/>
          <img src={Search_icon} alt="Search Icon" className="me-2 search_icon" />
          {/* <Button variant="light" className="ms-2">🔍</Button> */}
        </Form>
      </div>

      {/* Gsrid Layout for Card */}
      <Row className="mt-5 cards_container">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100 Proposals_Card" onClick={() => handleCardClick(card.id)} style={{ cursor: 'pointer' }}>
              <Card.Header className="bg-orange text-white">
              <div className="Proposals_Img">
                <img src={Proposals_Logo} alt="Logo" className="me-2" style={{ height: '30px' }} />
              </div>
                <div className="card_title">
                  <h5>{card.title}</h5>
                  <p>{card.type}</p>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong className='orange'>Field:</strong> {card.field} <br />
                  <strong className='orange'>Seeking:</strong> {card.seeking} <br />
                  <strong className='orange'>Offer:</strong> {card.offer} <br />
                  <strong className='orange'>Received:</strong> {card.received}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </Container>

  );
}
