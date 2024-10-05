import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

export default function AdminForm({ entityType, mode, fields, onSubmit, onBackClick, initialData }) {
  const [formData, setFormData] = useState();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {}));
    }
  }, [initialData, fields]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  return (
    <div className="admin-form container">
      <form action="" onSubmit={handleSubmit}>
        <h3>{mode === 'edit' ? `Edit ${entityType}` : `Add New ${entityType}`}</h3>
        <div className="row g-1">
          {fields.map(field => (
            <div key={field.id} className="col-md-6 mb-3">
              <label htmlFor={field.id} className='form-label'>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          {mode === 'edit' &&
            <CustomButton
              text="delete"
              type="button"
              className="btn btn-secondary"
              onClick={onBackClick}
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
            />
          }
          <CustomButton
            text={mode === 'submitting' ? "Submitting..." : "Save"}
            type="submit"
            className="btn btn-primary"
          />
          <CustomButton
            text="Cancel"
            type="button"
            className="btn btn-secondary"
            onClick={onBackClick}
          />
        </div>
      </form>
    </div>
  );
}
