import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTable from '../../../common/tables/AdminsTable';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import AdminForm from '../../../common/AddOrEditForm/components/AdminForm';
import { getAdmins } from '../../../../Api/Endpoints/AdminEndpoints';
import { AppContext } from '../../../../context/AppContext';
import { ClipLoader } from 'react-spinners';

export default function Admin() {
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [isEditingAdmin, setIsEditingAdmin] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user,admins, setAdmins } = useContext(AppContext);

  const formMode = isEditingAdmin ? 'edit' : 'add';

  useEffect(() => {
    getAdmins()
      .then((response) => {
        if (Array.isArray(response)) {
          setAdmins(response);
        } else {
          console.error('Unexpected response format:', response);
          setAdmins([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error);
        setAdmins([]);
        setLoading(false);
      });
  }, [setAdmins]);

  const filteredAdmins = admins.filter(admin =>
    `${admin.username}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAdminClick = () => {
    setIsAddingAdmin(true);
    setSelectedAdmin(null);
  };

  const handleFormSubmit = (formData) => {
    if (isEditingAdmin) {
      const updatedAdmins = admins.map(admin =>
        admin.id === selectedAdmin.id ? { ...admin, ...formData } : admin
      );
      setAdmins(updatedAdmins);
      setIsEditingAdmin(false);
    } else {
      const newAdmin = { id: Date.now(), ...formData };
      setAdmins([...admins, newAdmin]);
    }
  };

  const handleBackClick = () => {
    setIsAddingAdmin(false);
    setIsEditingAdmin(false);
    setSelectedAdmin(null);
    navigate('/admin-dashboard/admin/view-admins');
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleEditAdminClick = (admin) => {
    setSelectedAdmin(admin);
    setIsEditingAdmin(true);
    navigate(`/admin-dashboard/admin/edit-admin/${admin.admin_id}`);
  };

  return (
    <div className="container admin-page">
      {!isAddingAdmin && !isEditingAdmin ? (
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
          initialData={isEditingAdmin ? selectedAdmin : {}}
          mode={formMode}
          setIsAddingAdmin={setIsAddingAdmin}
        />
      )}
      <div className="row justify-content-center">
        {loading ? (
          <div className="text-center">
            <ClipLoader size={50} color="#007bff" loading={loading} />
          </div>
        ) : (
          !isAddingAdmin && !isEditingAdmin && (
            <div className="col-12 m-sm-4">
              {filteredAdmins.length > 0 ? (
                <AdminTable admins={filteredAdmins} onEditClick={handleEditAdminClick} />
              ) : (
                <div className="card shadow-sm">
                  <div className="card-body text-center py-5">
                    <h2 className="card-title mb-3">No Admins Found</h2>
                    <p className="card-text mb-4">Admins will be listed here once added.</p>
                    {user.role === 'SUPER_ADMIN' && (
                      <CustomButton
                        text="Add New Admin"
                        onClick={handleAddAdminClick}
                        className="btn btn-primary"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
