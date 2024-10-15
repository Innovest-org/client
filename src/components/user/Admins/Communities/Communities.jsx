import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import CommunitiesTable from '../../../common/tables/communitiesTable'; 
import CommunityForm from '../../../common/AddOrEditForm/components/CommunityForm';
import './style.css';
import { getAllCommunities } from '../../../../Api/Endpoints/CommunityEndpoints';

export default function Communities() {
  const [isAddingCommunity, setIsAddingCommunity] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await getAllCommunities();
        setCommunities(response.communities || []);
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
    };

    fetchCommunities();
  }, []);

  const handleAddCommunityClick = () => {
    setIsAddingCommunity(true);
    navigate('/admin-dashboard/communities/add-community');
  };

  const handleBackClick = () => {
    setIsAddingCommunity(false);
    navigate('/admin-dashboard/communities/view-communities');
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredCommunities = communities.filter(community =>
    community.community_name && community.community_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          onCancel={handleBackClick}
          initialData={''}

        />
      )}
      <div className="row justify-content-center ms-1">
        {!isAddingCommunity && (
          <div className="col-12 m-sm-4">
            {filteredCommunities.length > 0 ? (
              <CommunitiesTable communities={filteredCommunities} setCommunities={setCommunities}   />
            ) : (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
