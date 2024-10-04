import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAndFilterBar from '../../../common/SearchAndFilterBar/SerachAndFilterBar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import './style.css';
import { membersData as initialMembersData } from '../Admin/userData';
import MemberForm from '../../../common/AddOrEditForm/components/MemberForm';

export default function Members() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [members, setMembers] = useState(initialMembersData);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAddMemberClick = () => {
    setIsAddingMember(true);
    navigate('/admin-dashboard/members/add-member');
  };

  const handleFormSubmit = (formData) => {
    console.log("Member Form submitted", formData);
    const newMember = { id: Date.now(), ...formData };
    setMembers([...members, newMember]);
    navigate('/admin-dashboard/members/view-members');
    setIsAddingMember(false);
  };

  const handleBackClick = () => {
    setIsAddingMember(false);
    navigate('/admin-dashboard/members/view-members');
  };

  const handleSearchChange = (query) => {
    console.log("Search Query:", query);
    setSearchQuery(query);
  };

  const filteredMembers = members.filter(member =>
    `${member.username}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Members:", filteredMembers);

  return (
    <div className="container member-page">
      {!isAddingMember ? (
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
          initialData={''}
          countries={''} 
          languages={''}
        />

      )}
      <div className="row justify-content-center ms-1 custom-m">
        {!isAddingMember && (
          <div className="col-12 m-sm-4">
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
          </div>
        )}
      </div>
    </div>
  );
}
