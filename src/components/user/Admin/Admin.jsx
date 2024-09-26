import React, { useState } from 'react';
import SearchAndFilterBar from '../../common/SearchAndFilterBar/SerachAndFilterBar';
import './style.css';
import NoContent from '../../common/NoContent/NoContent';
import AddOrEditForm from '../../common/AddOrEditForm/AddOrEditForm';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false); // State to track if the form is shown

  // Handler to toggle between NoContent and the form
  const handleAddAdminClick = () => {
    console.log("Add Admin Clicked");  // Debugging
    setIsAddingAdmin(true);  // Update state to show the form
  };
  
  return (
    <div className="container-fluid admin-page">
      {!isAddingAdmin && (
        <div className="row d-flex align-items-center justify-content-between">
          <SearchAndFilterBar />
        </div>
      )}
      <div className="row justify-content-center ms-sm-3 ms-md-0">
        {isAddingAdmin ? (
          <AddOrEditForm />
        ) : (
          <NoContent 
            onAddAdminClick={handleAddAdminClick}
            title="No Admins Found" 
            description="Admins will be listed here once added." 
            buttonText="Add New Admin" 
          />
        )}
      </div>
    </div>
  );
}
