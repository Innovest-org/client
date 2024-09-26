import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

export default function NoContent({
  onAddAdminClick,
  title = "No Admins at this time",
  description = "Admins will appear here",
  buttonText = "Add New Admin"
}) {
  return (
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body text-center py-5">
              <h2 className="card-title mb-3">{title}</h2>
              <p className="card-text mb-4">{description}</p>
              <div className='btn-class'>
                <CustomButton
                  text={buttonText}
                  onClick={onAddAdminClick}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
  );
}
