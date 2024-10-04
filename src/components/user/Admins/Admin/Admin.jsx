import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTable from '../../../common/UserTable/AdminsData';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar'; 
import AddOrEditForm from '../../../common/AddOrEditForm/AddOrEditForm';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [admins, setAdmins] = useState([
    {
      id: '1',
      name: 'Anna Nekrashevich',
      community: 'General Community',
      email: 'anna.nekrashevich@example.com',
      dateJoined: '2023-02-15',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'John Doe',
      community: 'Tech Community',
      email: 'john.doe@example.com',
      dateJoined: '2023-03-10',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Emily Smith',
      community: 'Health Community',
      email: 'emily.smith@example.com',
      dateJoined: '2023-04-22',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '4',
      name: 'Michael Johnson',
      community: 'Business Community',
      email: 'michael.johnson@example.com',
      dateJoined: '2023-05-30',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '5',
      name: 'Sophia Davis',
      community: 'Education Community',
      email: 'sophia.davis@example.com',
      dateJoined: '2023-06-18',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '6',
      name: 'David Brown',
      community: 'Sports Community',
      email: 'david.brown@example.com',
      dateJoined: '2023-07-08',
      avatar: 'https://via.placeholder.com/50',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAddAdminClick = () => {
    console.log("Add Admin Clicked");
    setIsAddingAdmin(true);
    setSelectedAdmin(null);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted", formData);
    setAdmins([...admins, formData]);
    navigate('/admin-dashboard/admin/view-admins');
    setIsAddingAdmin(false);
  };

  const handleBackClick = () => {
    setIsAddingAdmin(false);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container admin-page custom-m">
      {!isAddingAdmin && (
        <div className="row d-flex align-items-center justify-content-between g-0">
          <div className="col-md-9">
            <SearchAndFilterBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-md-3">
            <CustomButton text="Add New Admin" onClick={handleAddAdminClick} />
          </div>
        </div>
      )}
      <div className="row justify-content-center ms-1">
        {isAddingAdmin ? (
          <AddOrEditForm
            adminData={selectedAdmin}
            onSubmit={handleFormSubmit}
            onBackClick={handleBackClick}
          />
        ) : (
          <div className="col-12 m-sm-4">
            {filteredAdmins.length > 0 ? (
              <AdminTable admins={filteredAdmins}/>
            ) : (
              <div className="card shadow-sm">
                <div className="card-body text-center py-5">
                  <h2 className="card-title mb-3">No Admins Found</h2>
                  <p className="card-text mb-4">Admins will be listed here once added.</p>
                  <div className="btn-class">
                    <CustomButton
                      text="Add New Admin"
                      onClick={handleAddAdminClick}
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
