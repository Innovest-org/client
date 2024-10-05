import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';

const AdminForm = ({ onSubmit, onBackClick, initialData, countries, communities, mode }) => {
  const [formData, setFormData] = useState(initialData || {
    firstName: '',
    lastName: '',
    community: '',
    country: '',
    email: '',
    id: '',
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

  const inputFields = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Enter First Name',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter Last Name',
      required: true,
    },
    {
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Enter Username',
      required: true,
    },
    {
      type: 'text',
      name: 'id',
      label: 'ID Nationality',
      placeholder: 'Enter ID',
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      required: true,
    },
    {
      type: 'select',
      name: 'community',
      label: 'Community',
      options: communities,
      required: true,
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      options: countries,
      required: true,
    },
    {
      type: 'text',
      name: 'role',
      label: 'Role',
      value: 'Admin',
      disabled: true,
    },
  ];

  return (
    <div className="position-relative container">
      <h3 className="mb-4 ">{mode === 'edit' ? 'Edit Admin' : 'Add New Admin'}</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="position-absolute top-0 end-0 p-3">
          <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: 'pointer', fontSize: '24px', zIndex: 100 }}
            onClick={onBackClick}
          />
        </div>
        <AvatarUpload
          avatar={formData.avatar}
          onImageUpload={handleImageUpload}
        />

        <div className="row">
          {inputFields.map((field) => (
            <div className="mb-3 col-md-6" key={field.name}>
              <InputField
                field={field}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-3">
          <CustomButton text={mode === 'edit' ? 'Edit Admin' : 'Add New Admin'} className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
