import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

export default function AdminForm({ onBackClick }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    adminEmail: '',
    adminPassword: '',
    adminPhone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Handle form data change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
        const isSuccessful = true;
        if (isSuccessful) {
            console.log('Form submitted successfully:', formData);
            console.log('Navigating to /admin-dashboard/admin/view-admins');
            navigate('/admin-dashboard/admin/view-admins');
        } else {
            setErrorMessage('Failed to submit form. Please try again.');
        }
        setIsSubmitting(false);
    }, 2000);
};


  return (
    <div className="container p-5">
      <div className="d-flex align-items-center mb-3">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="me-2 back-icon" 
          size="lg" 
          onClick={onBackClick || (() => navigate('/admin-dashboard/admin/view-admins'))} 
          style={{ cursor: 'pointer' }}
        />
        <h2>Add New Admin</h2>
      </div>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row g-1">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="firstName" 
              value={formData.firstName} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="lastName" 
              value={formData.lastName} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="row g-1">
          <div className="col-md-6 mb-3">
            <label htmlFor="adminEmail" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="adminEmail" 
              value={formData.adminEmail} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="adminPassword" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="adminPassword" 
              value={formData.adminPassword} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="adminPhone" className="form-label">Phone</label>
            <input 
              type="tel" 
              className="form-control" 
              id="adminPhone" 
              value={formData.adminPhone} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <CustomButton 
            text={isSubmitting ? "Submitting..." : "Save"} 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting} 
          />
          <CustomButton 
            text="Delete" 
            type="button" 
            className="btn btn-danger" 
            onClick={() => console.log('Delete clicked')} 
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
