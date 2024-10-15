import React, { useState, useEffect } from 'react';
import './OverviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUsers, faUserPlus, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import SmallCard from './components/SmallCard';
import { getUsers, getPendingUsers } from '../../../Api/Endpoints/UserEndpoints'; // Adjust your API endpoints

export default function OverviewCard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsersToday, setNewUsersToday] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        const users = response.users || [];
        setTotalUsers(users.length);

        const newToday = await getPendingUsers();
        setNewUsersToday(newToday.length);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overview-section">
      <div className="overview-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0 overview-header-text">Overview</h6>
        <div className="d-flex align-items-center my-2">
          <p className="mb-0 overview-header-text">Last 1 day</p>
          <FontAwesomeIcon icon={faChevronDown} className="ms-2" style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="overview-cards d-flex justify-content-around mt-3">
        <SmallCard icon={faChartColumn} title="Total Users" color="#D398E7" precentage={totalUsers} />
        <SmallCard icon={faUsers} title="Active Users" color="#E89271" precentage={5} />
        <SmallCard icon={faUserPlus} title="New Users Today" color="#F0C274" precentage={newUsersToday} />
      </div>
    </div>
  );
}
