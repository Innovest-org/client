import React, { useState } from 'react';
import {
  deleteCommunity as deleteCommunityAPI,
} from '../../../Api/Endpoints/CommunityEndpoints';
import { Link } from 'react-router-dom';
import CommunityForm from '../AddOrEditForm/components/CommunityForm';

export default function CommunitiesTable({ communities, setCommunities }) {
  console.log(communities);
  const [editingCommunity, setEditingCommunity] = useState(null);
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

  if (editingCommunity) {
    return (
      <CommunityForm
        mode='edit'
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
          {communities.length > 0 ? (
            communities.map((community) => (
              <tr key={community.community_id}>
                <td>
                  <Link
                    to={`/admin-dashboard/communities/community-profile/${community.community_id}`}
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
                  </Link>

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
    </div>
  );
}
