import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';

const CommunityForm = ({ onSubmit, onBackClick, initialData, countries = [], languages = [] }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    description: '',
    avatar: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

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
      <h3 className="mb-4">Add New Community</h3>
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
              src={formData.avatar || 'https://via.placeholder.com/150'}
              alt="Community"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
            />
          </label>
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="name" className="form-label">Community Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Community Name"
              required
            />
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter Community Description"
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <CustomButton
            type="submit"
            text="Add New Community"
            className="btn btn-primary"
          />
        </div>

      </form>
    </div>
  );
};

export default CommunityForm;
