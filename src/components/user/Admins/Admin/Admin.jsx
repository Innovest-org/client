import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTable from '../../../common/UserTable/AdminsData';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar'; 
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import { adminsData as initialAdminsData, countries, languages } from './userData';
import AdminForm from '../../../common/AddOrEditForm/components/AdminForm';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [admins, setAdmins] = useState(initialAdminsData);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAddAdminClick = () => {
    setIsAddingAdmin(true);
    setSelectedAdmin(null);
    navigate('/admin-dashboard/admin/add-admin');
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted", formData);
    setAdmins([...admins, { id: `${admins.length + 1}`, ...formData }]);
    navigate('/admin-dashboard/admin/view-admins');
    setIsAddingAdmin(false);
  };

  const handleBackClick = () => {
    setIsAddingAdmin(false);
    navigate('/admin-dashboard/admin/view-admins');
  };

  const handleSearchChange = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);
  };

  const filteredAdmins = admins.filter(admin =>
    `${admin.username}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Admins:", filteredAdmins);

  return (
    <div className="container admin-page custom-m">
      {!isAddingAdmin ? (
        <div className="row d-flex align-items-center justify-content-between g-0">
          <div className="col-md-9">
            <SearchAndFilterBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-md-3">
            <CustomButton text="Add New Admin" onClick={handleAddAdminClick} />
          </div>
        </div>
      ) : (
        <AdminForm 
          onSubmit={handleFormSubmit} 
          onBackClick={handleBackClick} 
          initialData={selectedAdmin}
          languages={languages}
          countries={countries}
        />
      )}
      <div className="row justify-content-center ms-1">
        {!isAddingAdmin && (
          <div className="col-12 m-sm-4">
            {filteredAdmins.length > 0 ? (
              <AdminTable admins={filteredAdmins} />
            ) : (
              <div className="card shadow-sm">
                <div className="card-body text-center py-5">
                  <h2 className="card-title mb-3">No Admins Found</h2>
                  <p className="card-text mb-4">Admins will be listed here once added.</p>
                  <CustomButton
                    text="Add New Admin"
                    onClick={handleAddAdminClick}
                    className="btn btn-primary"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
