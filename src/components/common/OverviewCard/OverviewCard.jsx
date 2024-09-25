import React from 'react';
import './OverviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUsers, faUserPlus, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import SmallCard from './components/SmallCard';

export default function OverviewCard() {
  return (
    <div className="overview-section ">
      <div className="overview-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0 overview-header-text">Overview</h6>
        <div className="d-flex align-items-center my-2">
          <p className="mb-0 overview-header-text">Last 1 day</p>
          <FontAwesomeIcon icon={faChevronDown} className="ms-2" style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="overview-cards d-flex justify-content-around mt-3">
        <SmallCard icon={faChartColumn} title="Total Users" color="#D398E7" precentage="10,245"/>
        <SmallCard icon={faUsers} title="Active Users" color="#E89271"precentage="1,532/1600" />
        <SmallCard icon={faUserPlus} title="New Users Today" color="#F0C274" precentage="101/120"/>
      </div>

    </div>
  );
}
