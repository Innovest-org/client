import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';

const MemberForm = ({ onSubmit, onBackClick, initialData, mode }) => {
  const [formData, setFormData] = useState(initialData || {
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    id: '',
    nationalId: '',
    avatar: '',
    username: '',
    role: 'Investor',
    language: '',
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
      type: 'text',
      name: 'role',
      label: 'Role',
      value: 'Investor',
      disabled: true,
    },
  ];

  return (
    <div className="position-relative container">
      <h3 className="mb-4 ">{mode === 'edit' ? 'Edit Member' : 'Add New Member'}</h3>
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
          <CustomButton
            type="submit"
            text={mode === 'edit' ? 'Update Member' : 'Add Member'}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
