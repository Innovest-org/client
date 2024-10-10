import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import { sampleMembers } from '../Admin/userData';
import MemberForm from '../../../common/AddOrEditForm/components/MemberForm';
import MembersTable from '../../../common/tables/MemberTable';
import ProfileSidebar from '../../../common/ProfileSidebar/ProfileSidebar';

export default function Members() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [isEditingMember, setIsEditingMember] = useState(false); // Track if editing
  const [members, setMembers] = useState(sampleMembers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddMemberClick = () => {
    setIsAddingMember(true);
    navigate('/admin-dashboard/members/add-member');
  };

  const handleFormSubmit = (formData) => {
    console.log("Member Form submitted", formData);
    if (isEditingMember) {
      const updatedMembers = members.map(member =>
        member.id === selectedMember.id ? { ...member, ...formData } : member
      );
      setMembers(updatedMembers);
      setIsEditingMember(false);
    } else {
      const newMember = { id: Date.now(), ...formData };
      setMembers([...members, newMember]);
    }
    navigate('/admin-dashboard/members/view-members');
    setIsAddingMember(false);
  };
  const formMode = isEditingMember ? 'edit' : 'add';


  const handleBackClick = () => {
    setIsAddingMember(false);
    setIsEditingMember(false); // Reset editing state
    navigate('/admin-dashboard/members/view-members');
  };

  const handleSearchChange = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsSidebarOpen(true);
    console.log('Selected Member:', member);
  };

  const handleEditMemberClick = (member) => {
    setSelectedMember(member);
    setIsEditingMember(true); // Set editing mode to true
    setIsSidebarOpen(false); // Close sidebar
    navigate(`/admin-dashboard/members/edit-member/${member.id}`);
  };

  const filteredMembers = members.filter(member =>
    member.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Members:", filteredMembers);

  return (
    <div className="container member-page">
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
          onSubmit={handleFormSubmit}
          onBackClick={handleBackClick}
          initialData={isEditingMember ? selectedMember : {}}
          countries={''} 
          languages={''}
          mode={formMode}
        />
      )}
      <div className="row justify-content-center ms-1 custom-m">
        {!isAddingMember && !isEditingMember && (
          <div className="col-12 m-sm-4">
            {filteredMembers.length > 0 ? (
              <MembersTable members={filteredMembers} onMemberClick={handleMemberClick} />
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
        )}
      </div>
      {isSidebarOpen && selectedMember && (
        <ProfileSidebar 
          member={selectedMember} 
          onClose={() => setIsSidebarOpen(false)}
          onEditClick={() => handleEditMemberClick(selectedMember)} // Pass the selected member to the edit function
        />
      )}
    </div>
  );
}
