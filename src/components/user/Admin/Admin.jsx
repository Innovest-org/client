import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../common/SearchAndFilterBar/SerachAndFilterBar';
import AddOrEditForm from '../../common/AddOrEditForm/AddOrEditForm';
import CustomButton from '../../common/CustomButton/CustomButton';
import './style.css';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const navigate = useNavigate();

  const handleAddAdminClick = () => {
    console.log("Add Admin Clicked");
    setIsAddingAdmin(true);
    setSelectedAdmin(null);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted", formData);
    navigate('/admin-dashboard/admin/view-admins');
    setIsAddingAdmin(false);
  };

  const handleBackClick = () => {
    setIsAddingAdmin(false);
  };

  return (
    <div className="container admin-page custom-m">
      {!isAddingAdmin && (
        <div className="row d-flex align-items-center justify-content-between custom-m">
          <SearchAndFilterBar />
        </div>
      )}
      <div className="row justify-content-center custom-m">
        {isAddingAdmin ? (
          <AddOrEditForm
            adminData={selectedAdmin}
            onSubmit={handleFormSubmit}
            onBackClick={handleBackClick}
          />
        ) : (
          <div className="col-12 m-sm-4">
            <div className="card shadow-sm">
              <div className="card-body text-center py-5">
                <h2 className="card-title mb-3">No Admins Found</h2>
                <p className="card-text mb-4">Admins will be listed here once added.</p>
                <div className='btn-class'>
                  <CustomButton
                    text="Add New Admin"
                    onClick={handleAddAdminClick}
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}