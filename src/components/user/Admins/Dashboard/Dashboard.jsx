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
    avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1729086049~exp=1729089649~hmac=2bc8dca0177357c20cee15c31fe0e7042694d139e0b1f6d63b114f05c5c9a986&w=996',
    role: 'Investor',
    date: '2024-09-22',
  },
  {
    username: 'JaneSmith',
    avatar: 'https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-36129.jpg?t=st=1729086176~exp=1729089776~hmac=b81485f4678e17a69b6007cf7b19239ea23d1cece4ad6c5b6e8d2723b9ed2fa4&w=740',
    role: 'Entrepreneur',
    date: '2024-09-21',
  },
  {
    username: 'JohnDoe',
    avatar: 'https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?t=st=1729086226~exp=1729089826~hmac=2e0aaea35076bb87138245a972fff8c575a6042e9c1ac736fb4eaf11c22d1865&w=900',
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
