import React from 'react';
import './style.css';
import CustomButton from '../CustomButton/CustomButton';

export default function NoContent({ onAddAdminClick }) {
  return (
    <div className="row shadow-sm">
      <div className="col-12 content-back d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center">No Admins at this time</h2>
        <p className="text-center">Admins will appear here</p>
        <div>
          <CustomButton text="Add New Admin" onClick={onAddAdminClick} />
        </div>
      </div>
    </div>
  );
}
