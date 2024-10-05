import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';

const CommunityForm = ({ onSubmit, onBackClick, initialData, mode }) => {
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

  const inputFields = [
    {
      type: 'text',
      name: 'name',
      label: 'Community Name',
      placeholder: 'Enter Community Name',
      required: true,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
      placeholder: 'Enter Community Description',
      required: true,
    },
  ];

  return (
    <div className="position-relative container">
      <h3 className="mb-4">{mode === 'edit' ? 'Edit Community' : 'Add New Community'}</h3>
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
            text={mode === 'edit' ? 'Edit Community' : 'Add New Community'}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CommunityForm;
