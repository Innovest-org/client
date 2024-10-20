import React, { useState, useEffect, useContext } from 'react';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import CommunitiesTable from '../../../common/tables/communitiesTable'; 
import CommunityForm from '../../../common/AddOrEditForm/components/CommunityForm';
import './style.css';
import { getAllCommunities } from '../../../../Api/Endpoints/CommunityEndpoints';
import { ClipLoader } from 'react-spinners';
import { AppContext } from '../../../../context/AppContext';

export default function Communities() {
  const [isAddingCommunity, setIsAddingCommunity] = useState(false);
  const {communities, setCommunities} = useContext(AppContext)
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await getAllCommunities();
        setCommunities(response.communities || []);
      } catch (error) {
        console.error("Error fetching communities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, [setCommunities]);

  const handleAddCommunityClick = () => {
    setIsAddingCommunity(true);
  };

  const handleBackClick = () => {
    setIsAddingCommunity(false);
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
        {loading ? (
          <div className="text-center">
            <ClipLoader size={50} color="#007bff" loading={loading} />
          </div>
        ) : (
          !isAddingCommunity && (
            <div className="col-12 m-sm-4">
              {filteredCommunities.length > 0 ? (
                <CommunitiesTable communities={filteredCommunities} setCommunities={setCommunities} />
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
          )
        )}
      </div>
    </div>
  );
}
