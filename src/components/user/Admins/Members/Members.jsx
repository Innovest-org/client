import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import MemberForm from '../../../common/AddOrEditForm/components/MemberForm';
import MembersTable from '../../../common/tables/MemberTable';
import ProfileSidebar from '../../../common/ProfileSidebar/ProfileSidebar';
import { getUsers } from '../../../../Api/Endpoints/UserEndpoints';
import { ToastContainer } from 'react-toastify';
import { AppContext } from '../../../../context/AppContext';
import { ClipLoader } from 'react-spinners'; // Import the spinner

export default function Members() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [isEditingMember, setIsEditingMember] = useState(false);
  const { members, setMembers } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { users } = await getUsers();
        setMembers(users);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [setMembers]);

  const handleAddMemberClick = useCallback(() => {
    setIsAddingMember(true);
  }, []);

  const formMode = isEditingMember ? 'edit' : 'add';

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsSidebarOpen(true);
  };

  const handleEditMemberClick = (member) => {
    setSelectedMember(member);
    setIsEditingMember(true);
    setIsSidebarOpen(false);
    navigate(`/admin-dashboard/members/edit-member/${member.id}`);
  };

  const handleDeleteMemberClick = (memberId) => {
    const updatedMembers = members.filter(member => member.id !== memberId);
    setMembers(updatedMembers);
  };

  const filteredMembers = members.filter(member =>
    member.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container member-page">
      <ToastContainer />
      {!isAddingMember && !isEditingMember ? (
        <div className="row d-flex align-items-center justify-content-between g-0">
          <div className="col-md-9">
            <SearchAndFilterBar onSearchChange={handleSearchChange} />
          </div>
          <div className="col-md-3">
            <CustomButton text="Add New Member" onClick={handleAddMemberClick} />
          </div>
        </div>
      ) : (
        <MemberForm
          initialData={isEditingMember ? selectedMember : {}}
          mode={formMode}
          setIsAddingMember={setIsAddingMember}
          onCancelForm={() => setIsAddingMember(false)}
        />
      )}

      <div className="row justify-content-center ms-1 custom-m">
        {loading ? (
          // Display spinner when loading data
          <div className="text-center">
            <ClipLoader size={50} color="#007bff" loading={loading} />
          </div>
        ) : (
          !isAddingMember && !isEditingMember && (
            <div className="col-12 m-sm-4">
              {filteredMembers.length > 0 ? (
                <MembersTable
                  members={filteredMembers}
                  onMemberClick={handleMemberClick}
                  onEditMemberClick={handleEditMemberClick}
                  onDeleteMemberClick={handleDeleteMemberClick}
                />
              ) : (
                <div className="card shadow-sm">
                  <div className="card-body text-center py-5">
                    <h2 className="card-title mb-3">No Members Found</h2>
                    <p className="card-text mb-4">Members will be listed here once added.</p>
                    <CustomButton
                      text="Add New Member"
                      onClick={handleAddMemberClick}
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
      {isSidebarOpen && selectedMember && (
        <ProfileSidebar 
          member={selectedMember} 
          onClose={() => setIsSidebarOpen(false)}
          onEditClick={() => handleEditMemberClick(selectedMember)}
        />
      )}
    </div>
  );
}
