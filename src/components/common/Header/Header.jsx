import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

export default function Header() {
  return (
    <div className="row header-container">
      <div className="col-12 col-sm-4 col-md-12">
        <CustomButton text="Add Admin" />
      </div>
    </div>
  );
}
