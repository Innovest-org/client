import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ field, value, onChange }) => {
  const { type, name, label, options, accept, placeholder, required, disabled } = field;

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      {type === 'select' ? (
        <select
          className="form-select"
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          required={required}
        >
          <option value="">Select {label}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <div>
          <input
            type="file"
            id={name}
            accept={accept}
            onChange={onChange}
            style={{ display: 'none' }}
          />
          <label htmlFor={name} className="custom-file-upload">
            Choose File
          </label>
        </div>
      ) : (
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    accept: PropTypes.string,
    disabled: PropTypes.bool,
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
