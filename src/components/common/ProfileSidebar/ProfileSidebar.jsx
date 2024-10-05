import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProfileSidebar.css';
import CustomButton from '../CustomButton/CustomButton';


export default function ProfileSidebar({ member, onClose, onEditClick }) {
  return (
    <div className="profile-sidebar shadow-lg bg-light border-start border-1 border-secondary position-fixed top-0 end-0 vh-100" style={{ width: '300px', zIndex: 1050 }}>
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <h5 className="mb-0">Member Profile</h5>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ cursor: 'pointer', fontSize: '24px' }}
          onClick={onClose}
        />
      </div>
      <div className="p-3 text-center">
      <h6 className="">{member.id}</h6>
        <img
          className="member-image img-fluid rounded-circle mb-3"
          src={member.avatar}
          alt={member.username}
          style={{ width: '150px', height: '150px' }}
        />
        <h3>{member.name}</h3>
        <h5 className="fw-bold">{member.username}</h5>
        <p className="text-muted">{member.role}</p>
        <p className="text-muted">{member.email}</p>
        <h6 className='text-start fw-bold'>About</h6>
        <p lassName='text-start justify-content-start'>{member.about}</p>

        <div className="related-people">
          <p className='text-start fw-bold'>People from the same community</p>
          <p className='text-start'>{member.relatedPeople}</p>
        </div>
      </div>
      <div className="p-3 d-flex justify-content-between">
        <CustomButton
        text={'Edit'}
        onClick={onEditClick}
        className="btn btn-primary"
        />
        <CustomButton
        text={'Activate'}
        className="btn btn-primary"
        />
      </div>
    </div>
  );
}
