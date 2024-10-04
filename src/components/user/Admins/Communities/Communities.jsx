import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import CommunityForm from '../../../common/AddOrEditForm/components/CommunityForm';

export default function Communities() {
  const [isAddingCommunity, setIsAddingCommunity] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAddCommunityClick = () => {
    setIsAddingCommunity(true);
    navigate('/admin-dashboard/communities/add-community');
  };

  const handleFormSubmit = (formData) => {
    console.log("Community Form submitted", formData);
    const newCommunity = { id: Date.now(), ...formData };
    setCommunities([...communities, newCommunity]);
    navigate('/admin-dashboard/communities/view-communities');
    setIsAddingCommunity(false);
  };

  const handleBackClick = () => {
    setIsAddingCommunity(false);
    navigate('/admin-dashboard/communities/view-communities');
  };

  const handleSearchChange = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);
  };

  const filteredCommunities = communities.filter(community =>
    `${community.name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Communities:", filteredCommunities);

  return (
    <div className="container community-page">
      {!isAddingCommunity ? (
        <div className="row d-flex align-items-center justify-content-between g-0">
          <div className="col-md-9">
            <SearchAndFilterBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-md-3">
            <CustomButton text="Add New Community" onClick={handleAddCommunityClick} />
          </div>
        </div>
      ) : (
        <CommunityForm
          onSubmit={handleFormSubmit}
          onBackClick={handleBackClick}
          initialData={''}
          countries={[]}
          languages={[]}
        />
      )}
      <div className="row justify-content-center ms-1">
        {!isAddingCommunity && (
          <div className="col-12 m-sm-4">
            <div className="card shadow-sm">
              <div className="card-body text-center py-5">
                <h2 className="card-title mb-3">No Communities Found</h2>
                <p className="card-text mb-4">Communities will be listed here once added.</p>
                <CustomButton
                  text="Add New Community"
                  onClick={handleAddCommunityClick}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
