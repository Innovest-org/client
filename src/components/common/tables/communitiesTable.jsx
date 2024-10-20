import React, { useContext, useState } from 'react';
import {
  deleteCommunity as deleteCommunityAPI,
} from '../../../Api/Endpoints/CommunityEndpoints';
import CommunityForm from '../AddOrEditForm/components/CommunityForm';
import Pagination from "../../common/Pagination/Pagination";
import { toast } from 'react-toastify';
import { produce } from 'immer';
import { AppContext } from '../../../context/AppContext';

export default function CommunitiesTable({ communities }) {
  const [editingCommunity, setEditingCommunity] = useState(null);
  const {setCommunities} = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const handleUpdateCommunity = async (community_id) => {
    try {
      const communityToEdit = communities.find(c => c.community_id === community_id);

      if (Array.isArray(communityToEdit.tags) && communityToEdit) {
        communityToEdit.tags = communityToEdit.tags.map((tag) => tag.trim()).join(",");
        setEditingCommunity(communityToEdit);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommunity(null);
  };

  const handleDeleteCommunity = async (community_id) => {

      await deleteCommunityAPI(community_id);
        setCommunities(produce(draft=>{
          const index = draft.findIndex((community)=> community.community_id === community_id)
          if(index !== -1){
            draft.splice(index, 1)
          }
        }));
      toast.success('Community deleted successfully.');

  };

  const indexOfLastCommunity = currentPage * itemsPerPage;
  const indexOfFirstCommunity = indexOfLastCommunity - itemsPerPage;
  const currentCommunities = communities.slice(indexOfFirstCommunity, indexOfLastCommunity);
  const totalPages = Math.ceil(communities.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  if (editingCommunity) {
    return (
      <CommunityForm
        mode="edit"
        initialData={editingCommunity}
        setCommunities={setCommunities}
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
