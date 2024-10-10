import React from 'react';
import { Link } from 'react-router-dom';

export default function CommunitiesTable({ communities }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Community Name</th>
            <th scope="col">Number of Members</th>
            <th scope="col">Number of Posts</th>
            <th scope="col">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {communities.length > 0 ? (
            communities.map((community) => (
              <tr key={community.id}>
                <td>
                  <Link to={`/admin-dashboard/community/${community.id}`}>
                  <img
                    className="rounded-circle me-2"
                    src={community.avatar}
                    alt={community.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                    {community.name}
                  </Link>
                </td>
                <td>{community.membersNumber}</td>
                <td>{community.postsNumber}</td>
                <td>{new Date(community.dateCreated).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No communities available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
