import React from 'react';
import RightSidebar from '../../common/RightSidebar/RightSidebar';
import './Dashboard.css';
import CustomButton from '../../common/CustomButton/CustomButton';
import OverviewCard from '../../common/OverviewCard/OverviewCard';
import UserTable from '../../common/UserTable';

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
  return (
    <div className="dashboard-container container-fluid">
      <div className="row">
        <div className="col-12 ps-4">
          <h2>
            Welcome, <span className='dashboard-text'>Lara Doe</span>
          </h2>
        </div>
      </div>

      <div className="dashboard-content row">
        <div className="main-content col-12 col-md-9 col-sm-12">
          <div className='my-2 border buttons-border d-flex flex-wrap justify-content-evenly p-2 shadow-sm'>
            <CustomButton text="Add New User" />
            <CustomButton text="Moderate New Posts" />
            <CustomButton text="Review New Projects" />
            <CustomButton text="Add New Community" />
          </div>

          <div className="my-2">
            <OverviewCard />
          </div>

          <div className="my-2 p-2">
            <UserTable users={users} />
          </div>
        </div>

        <div className="right-sidebar col-12 col-md-3 mt-md-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
