import React, { useContext, useState } from 'react';
import { deleteUser as deleteMemberAPI } from '../../../Api/Endpoints/UserEndpoints';
import MemberForm from '../AddOrEditForm/components/MemberForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../../context/AppContext';
import Pagination from "../../common/Pagination/Pagination";

export default function MembersTable({ mode, onBackClick, members, setMembers }) {
  const { editingMember, setEditingMember } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleUpdateMember = async (member_id) => {
    try {
      const memberToEdit = members.find((m) => m.id === member_id);
      setEditingMember(memberToEdit);
    } catch (error) {
      console.error('Error selecting member for update:', error);
      toast.error('Failed to select member for update.');
    }
  };

  const handleDeleteMember = async (member_id) => {
    try {
      const response = await deleteMemberAPI(member_id);
      if (response.success) {
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.id !== member_id)
        );
        toast.success('Member deleted successfully.');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      toast.error('Failed to delete member. Please try again.');
    }
  };

  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  if (editingMember) {
    return (
      <MemberForm
        mode="edit"
        initialData={editingMember}
      />
    );
  }

  return (
    <div className="table-responsive members-table">
      <ToastContainer />
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Member Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Date Joined</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentMembers.length > 0 ? (
            currentMembers.map((member) => (
              <tr key={member.id}>
                <td>
                  <div
                    className="d-flex align-items-center member-name"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="rounded-circle me-2"
                      src={member.profile_image || 'path/to/default-image.jpg'}
                      alt={member.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                    <span className="fw-bold member-name-text">{member.username}</span>
                  </div>
                </td>
                <td>{member.username}</td>
                <td>{member.email}</td>
                <td>
                  {member.created_at
                    ? new Date(member.created_at).toLocaleDateString()
                    : 'N/A'}
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleUpdateMember(member.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteMember(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No members available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}
