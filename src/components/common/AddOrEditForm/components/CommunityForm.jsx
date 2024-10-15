import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../CustomButton/CustomButton';
import InputField from './InputField';
import AvatarUpload from './AvatarUpload';
import { createCommunity, updateCommunity } from '../../../../Api/Endpoints/CommunityEndpoints';

const CommunityForm = ({ initialData, mode, onCancel, setCommunities }) => {
  const [formData, setFormData] = useState(initialData || {
    community_name: '',
    description: '',
    image_url: '',
    tags: [],
  });

  const [tagInput, setTagInput] = useState('');
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    if (mode === 'edit') {
      if (tagInput && !formData.tags.includes(tagInput)) {
        setFormData({ ...formData, tags: formData.tags + "," + tagInput });
        setTagInput('');
      }
    } else {
      if (tagInput && !formData.tags.includes(tagInput)) {
        setFormData({ ...formData, tags: [...formData.tags, tagInput] });
        setTagInput('');
      }
    }

  };

  const handleTagRemove = (tagToRemove) => {
    if (mode === 'edit') {
      const tagsArray = formData.tags.split(",");
      const newTags = tagsArray.filter((tag) => tag !== tagToRemove);
      setFormData({ ...formData, tags: newTags.join(",") });
    } else {
      const newTags = formData.tags.filter((tag) => tag !== tagToRemove);
      setFormData({ ...formData, tags: newTags });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hi');
    try {
      if (mode === 'edit') {
        const updatedData = { ...formData };
        updatedData.tags = updatedData.tags.split(",").map((tag) => tag.trim());

        const updatedCommunity = await updateCommunity(formData.community_id, updatedData);

        console.log(updatedCommunity);
        console.log('Community updated successfully');

        setCommunities?.(prev => {
          if (prev) {
            const newArray = [...prev];
            const index = prev.findIndex(c => c.community_id === formData.community_id);
            if (index !== -1) {
              newArray[index] = updatedCommunity;
            }
            return newArray;
          }
          return prev;
        });

        onCancel();
      } else {
        const newCommunity = await createCommunity(formData);
        setCommunities?.(prev => (prev ? [...prev, newCommunity] : [newCommunity]));
        console.log('New community created successfully');
        onCancel();
      }

    } catch (error) {
      console.error('Error handling community:', error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image_url: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const inputFields = [
    {
      type: 'text',
      name: 'community_name',
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
            onClick={() => onCancel()}
          />
        </div>

        <AvatarUpload
          avatar={formData.image_url}
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

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <div className="d-flex">
            <input
              type="text"
              id="tags"
              value={tagInput}
              onChange={handleTagInputChange}
              className="form-control"
              placeholder="Enter a tag and press Enter"
            />
            <button
              type="button"
              className="btn btn-outline-secondary ms-2"
              onClick={handleTagSubmit}
            >
              Add Tag
            </button>
          </div>
          <div className="mt-2">
            {mode === 'edit' ? formData?.tags?.split(",")?.map((tag, index) => (
              <span
                key={index}
                className="badge bg-primary me-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTagRemove(tag)}
              >
                {tag} <span className="ms-1 text-danger">x</span>
              </span>
            )) : formData?.tags?.map((tag, index) => (
              <span
                key={index}
                className="badge bg-primary me-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTagRemove(tag)}
              >
                {tag} <span className="ms-1 text-danger">x</span>
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <CustomButton
            type="submit"
            text={mode === 'edit' ? 'Edit Community' : 'Add New Community'}
            className="btn btn-primary"
            onClick={handleSubmit}
          />
          <CustomButton
            type="cancel"
            text="Cancel"
            className="btn btn-primary"
            onClick={() => onCancel()}
          />
        </div>
      </form>
    </div>
  );
};

export default CommunityForm;
