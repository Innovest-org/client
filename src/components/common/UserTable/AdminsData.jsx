import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function AdminTable({ admins }) {
  const { id } = useParams();
  console.log(id)

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Avatar & Name</th>
            <th scope="col">Community</th>
            <th scope="col">Email</th>
            <th scope="col">Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((admin, index) => (
              <tr key={admin.id}>
                <td className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={admin.avatar}
                    alt={admin.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                  <Link to={`/admin-dashboard/profile/${admin.id}`} className=''>
                  <span>{admin.name}</span></Link>
                </td>
                <td>{admin.community}</td>
                <td>
                  <Link to={`mailto:${admin.email}`}>{admin.email}</Link>
                </td>
                <td>{new Date(admin.dateJoined).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No admins available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
