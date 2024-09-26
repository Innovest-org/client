import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

export default function AdminForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/admins');
  };

  return (
    <div className="container p-5">
      <div className="d-flex align-items-center mb-3">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="me-2 back-icon" 
          size="lg" 
          onClick={handleBackClick} 
          style={{ cursor: 'pointer' }}
        />
        <h2>Add New Admin</h2>
      </div>

      <div className="row align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="row g-1">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
          </div>

          <div className="row g-1">
            <div className="col-md-6 mb-3">
              <label htmlFor="adminEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="adminEmail" required />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="adminPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="adminPassword" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="adminPhone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="adminPhone" required />
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <CustomButton text="Save" type="submit" className="btn btn-primary" />
            <CustomButton text="Delete" type="button" className="btn btn-danger" onClick={() => console.log('Delete clicked')} />
          </div>
        </form>
      </div>
    </div>
  );
}
