import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
const AdminForm = ({ onSubmit, onBackClick, initialData, countries, communities}) => {
  const [formData, setFormData] = useState(initialData || {
    firstName: '',
    lastName: '',
    community: '',
    country: '',
    email: '',
    id: '',
    nationality: '',
    avatar: '',
    username: '',
    role: 'Admin',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="position-relative container">
      <h3 className="mb-4 ">Add New Admin</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: 'pointer', fontSize: '24px', zIndex: 100 }}
            onClick={onBackClick}
          />
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="avatarUpload">
            <img
              src={formData.avatar || 'https://via.placeholder.com/150'} // Placeholder if no image
              alt="Profile"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
            />
          </label>
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            style={{ display: 'none' }} // Hidden input
            onChange={handleImageUpload}
          />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter Last Name"
              required
            />
          </div>
        </div>

        <div className="row">
        <div className="mb-3 col-md-6">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Username"
              required
            />
          </div>
        
          <div className="mb-3 col-md-6">
            <label htmlFor="id" className="form-label">ID Nationality</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              placeholder="Enter ID"
              required
            />
          </div>
          </div>

        <div className="row">
        <div className="mb-3 col-md-6">
            <label htmlFor="role" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              placeholder="Enter Email"
              value={formData.email}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="community" className="form-label">Community</label>
            <select
              className="form-select"
              id="community"
              name="community"
              value={formData.community}
              onChange={handleInputChange}
              required
            >
              <option value="">Select community</option>
              {communities.map(community => (
                <option key={community.value} value={community.value}>
                  {community.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="role" className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              value={formData.role}
              disabled
            />
          </div>
         
          <div className="mb-3 col-md-6">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              className="form-select"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <CustomButton
            text="Add New Admin"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
