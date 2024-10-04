import React from 'react';
import { Link } from 'react-router-dom';

export default function MembersTable({ members, onMemberClick }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id} onClick={() => onMemberClick(member)}>
                <td className="d-flex align-items-center">
                  <Link to={`/admin-dashboard/profile/${member.id}`}>
                  <img
                    className="rounded-circle me-2"
                    src={member.avatar}
                    alt={member.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                    <span>{member.username}</span>
                  </Link>
                </td>
                <td>
                  <Link to={`mailto:${member.email}`}>{member.email}</Link>
                </td>
                <td>{member.role}</td>
                <td>{new Date(member.dateJoined).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No members available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
