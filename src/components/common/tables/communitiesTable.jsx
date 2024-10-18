import React, { useState } from 'react';
import {
  deleteCommunity as deleteCommunityAPI,
} from '../../../Api/Endpoints/CommunityEndpoints';
import CommunityForm from '../AddOrEditForm/components/CommunityForm';
import Pagination from "../../common/Pagination/Pagination";

export default function CommunitiesTable({ communities, setCommunities }) {
  const [editingCommunity, setEditingCommunity] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Number of communities per page

  const handleUpdateCommunity = async (community_id) => {
    try {
      const communityToEdit = communities.find(c => c.community_id === community_id);

      if (Array.isArray(communityToEdit.tags) && communityToEdit) {
        communityToEdit.tags = communityToEdit.tags.map((tag) => tag.trim()).join(",");
        setEditingCommunity(communityToEdit);
      }
    } catch (error) {
      console.error('Error selecting community for update:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommunity(null);
  };

  const handleDeleteCommunity = async (community_id) => {
    try {
      const response = await deleteCommunityAPI(community_id);
      if (response.success) {
        setCommunities((prevCommunities) =>
          prevCommunities.filter((community) => community.community_id !== community_id)
        );
        console.log('Community deleted successfully.');
      } else {
        console.error('Error deleting community:', response.message);
      }
    } catch (error) {
      console.error('Error deleting community:', error);
    }
  };

  // Pagination logic
  const indexOfLastCommunity = currentPage * itemsPerPage;
  const indexOfFirstCommunity = indexOfLastCommunity - itemsPerPage;
  const currentCommunities = communities.slice(indexOfFirstCommunity, indexOfLastCommunity);

  const totalPages = Math.ceil(communities.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1)); // Ensure not less than 1
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages)); // Ensure not more than total pages
  };

  if (editingCommunity) {
    return (
      <CommunityForm
        mode="edit"
        initialData={editingCommunity}
        setCommunities={setCommunities}
        onSave={(updatedCommunity) => {
          setCommunities((prevCommunities) =>
            prevCommunities.map((community) =>
              community.community_id === updatedCommunity.community_id ? updatedCommunity : community
            )
          );
          setEditingCommunity(null);
        }}
        onCancel={handleCancelEdit}
      />
    );
  }

  return (
    <div className="table-responsive communities-table">
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Community Name</th>
            <th scope="col">Number of Members</th>
            <th scope="col">Number of Posts</th>
            <th scope="col">Date Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCommunities.length > 0 ? (
            currentCommunities.map((community) => (
              <tr key={community.community_id}>
                <td>
                  <div
                    className="d-flex align-items-center community-name"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="rounded-circle me-2"
                      src={community.image_url || 'path/to/default-image.jpg'}
                      alt={community.community_name}
                      style={{ width: '50px', height: '50px' }}
                    />
                    <span className="fw-bold community-name-text">{community.community_name}</span>
                  </div>
                </td>
                <td>{community.member_count || 0}</td>
                <td>{community.page_count || 0}</td>
                <td>
                  {community.createdAt ? new Date(community.createdAt).toLocaleDateString() : 'N/A'}
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleUpdateCommunity(community.community_id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteCommunity(community.community_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No communities available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}
