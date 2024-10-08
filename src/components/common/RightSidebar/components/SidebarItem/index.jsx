import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.index.css'

export default function SidebarItem({ icon, color, label, count, date, time }) {
  return (
    <div className={`sidebar-item ${time && 'mt-4'}`} >
      <div className='d-flex justify-content-between align-items-center'>
        <div className="rightsidebar-icon d-flex align-items-center mb-4" style={{ color }}>
          <div className={`${time ? 'BgColor_time' : 'icon-back mb-1'}  `} >
            <FontAwesomeIcon icon={icon} />
            <p className="mb-0 ">{time}</p>
          </div>
          <span className='rightsidebar-span ms-1 fw-bold'>{label}</span>
        </div>
        <div className="rightsidebar-text">
          <span style={{ color }}>{count}</span>
          
        </div>
      </div>
      {date && (
        <div className="date">
          <p className="mb-0">{date}</p>
        </div>
      )}
    </div>
  );
}
