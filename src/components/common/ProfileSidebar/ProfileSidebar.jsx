import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProfileSidebar.css';

export default function ProfileSidebar({ member, onClose }) {
  return (
    <div className="profile-sidebar bg-light border-start border-1 border-secondary position-fixed top-0 end-0 vh-100" style={{ width: '300px', zIndex: 1050 }}>
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 className="mb-0">Member Profile</h5>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ cursor: 'pointer', fontSize: '24px' }}
          onClick={onClose}
        />
      </div>
      <div className="p-3 text-center">
        <img
          className="member-image img-fluid rounded-circle mb-3"
          src={member.image}
          alt={member.name}
          style={{ width: '100px', height: '100px' }}
        />
        <h3>{member.name}</h3>
        <p className="text-muted">{member.position}</p>
        <p className="text-muted">{member.company}</p>
      </div>
    </div>
  );
}
