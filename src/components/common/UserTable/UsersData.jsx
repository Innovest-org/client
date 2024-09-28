import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function UserTable({ users }) {
  return (
    <div className="tableSection my-2 w-100">
      <div className="table-header  d-flex justify-content-between align-items-center">
        <h6 className="mb-0 overview-header-text">Recent User Activity</h6>
        <div className="d-flex align-items-center">
          <p className="mb-0 overview-header-text">Last 1 day</p>
          <FontAwesomeIcon icon={faChevronDown} className="ms-2" style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <table className="table table-striped table-hover mt-3">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="d-flex align-items-center">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <span>{user.username}</span>
              </td>
              <td>{user.role}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}