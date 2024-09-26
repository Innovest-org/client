import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarItem({ icon, color, label, count, date }) {
  return (
    <div className="sidebar-item">
      <div className='d-flex justify-content-between align-items-center'>
        <div className="rightsidebar-icon d-flex align-items-center" style={{ color }}>
          <div className="icon-back mb-1">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className='rightsidebar-span ms-1'>{label}</span>
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
