import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function AdminTable({ admins, onEditClick }) {
  const { id } = useParams();
  
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">User name</th>
            <th scope="col">Community</th>
            <th scope="col">Email</th>
            <th scope="col">Date Joined</th>
            <th scope="col">Actions</th> 
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((admin, index) => (
              <tr key={admin.admin_id}>
                <td className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={admin.profile_image}
                    alt={admin.username}
                    style={{ width: '50px', height: '50px' }}
                  />
                  <Link to={`/admin-dashboard/profile/${admin.admin_id}`} className=''>
                    <span>{admin.username}</span>
                  </Link>
                </td>
                <td>{admin.communities.length > 0 ? admin.communities.join(', ') : 'No community'}</td>
                <td>
                  <Link to={`mailto:${admin.email}`}>{admin.email}</Link>
                </td>
                <td>{new Date(admin.createdAt).toLocaleDateString()}</td>
                <td>
                  <button 
                    className="btn btn-success btn-sm me-2"
                    onClick={() => onEditClick(admin)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No admins available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
