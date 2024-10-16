import React, { useState } from 'react';
import RightSidebar from '../../../common/RightSidebar/RightSidebar';
import CustomButton from '../../../common/CustomButton/CustomButton';
import MemberForm from '../../../common/AddOrEditForm/components/MemberForm';
import ModeratePages from '../../../common/ModeratePages/';
import ModerateUsers from '../../../common/ModerateUsers/';
import './Dashboard.css';
import DashboardContent from './DashboardContent';
import { useNavigate } from 'react-router-dom';
const users = [
  {
    username: 'JohnDoe',
    avatar: 'https://via.placeholder.com/50',
    role: 'Investor',
    date: '2024-09-22',
  },
  {
    username: 'JaneSmith',
    avatar: 'https://via.placeholder.com/50',
    role: 'Entrepreneur',
    date: '2024-09-21',
  },
  {
    username: 'JohnDoe',
    avatar: 'https://via.placeholder.com/50',
    role: 'Entrepreneur',
    date: '2024-09-22',
  },
];
export default function Dashboard() {
  const [selectedPage, setSelectedPage] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    setSelectedPage('');
    navigate('/admin-dashboard/dashboard');
  };
  const handleAddUserClick = () => {
    setSelectedPage('add-user');
  };

  const handleModeratePagesClick = () => {
    setSelectedPage('moderate-pages');
  };

  const handleModerateUsersClick = () => {
    setSelectedPage('moderate-users');
  };

  return (
    <div className="dashboard-container container m-3">
      <div className="row">
        <div className="col-12 col-md-7 ps-4">
          <h2>
            Welcome, <span className="dashboard-text">clarkkent</span>
          </h2>
        </div>
      </div>

      <div className="dashboard-content row">
        <div className="main-content col-12 col-md-9 col-sm-12">
          <div className="my-2 border buttons-border d-flex flex-wrap p-3 justify-content-evenly shadow-sm">
            <CustomButton text="Add New User" onClick={handleAddUserClick} />
            <CustomButton text="Moderate New users" onClick={ handleModerateUsersClick}/>
            <CustomButton text="Moderate New Pages" onClick={handleModeratePagesClick} />
          </div>

          {/* Conditionally render the content */}
          {selectedPage === 'add-user' && <MemberForm onBackClick={handleBackClick}  />}
          {selectedPage === 'moderate-pages' && <ModeratePages />}
          {selectedPage === 'moderate-users' && <ModerateUsers />}
          {selectedPage === '' && <DashboardContent users={users}  />}
        </div>

        <div className="right-sidebar col-12 col-md-2 mt-md-2 mb-4">
          <RightSidebar userType={'admin'} />
        </div>
      </div>
    </div>
  );
}
