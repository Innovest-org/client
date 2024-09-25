import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

export default function AdminForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="adminName" className="form-label">Admin Name</label>
          <input type="text" className="form-control" id="adminName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="adminEmail" className="form-label">Admin Email</label>
          <input type="email" className="form-control" id="adminEmail" required />
        </div>
        <CustomButton text="Submit" type="submit" />
      </form>
    </div>
  );
}