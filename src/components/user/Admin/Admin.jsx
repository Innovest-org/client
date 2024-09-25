import React, { useState } from 'react';
import SearchAndFilterBar from '../../common/SearchAndFilterBar/SerachAndFilterBar';
import './style.css';
import NoContent from '../../common/NoContent/NoContent';
import AddOrEditForm from '../../common/AddOrEditForm/AddOrEditForm';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false); // State to track if the form is shown

  // Handler to switch from "NoContent" to the form
  const handleAddAdminClick = () => {
    setIsAddingAdmin(true);
  };

  return (
    <div className="container-fluid admin-page">
      <div className="row d-flex align-items-center justify-content-between">
        <SearchAndFilterBar />
      </div>

      <div className="row g-0">
        <div className="col-md-0 col-lg-12">
          {isAddingAdmin ? (
            <div className="row justify-content-center ms-sm-3 ms-md-0">
              <AddOrEditForm />
            </div>
          ) : (
            <NoContent onAddAdminClick={handleAddAdminClick} />
          )}
        </div>
      </div>
    </div>
  );
}
