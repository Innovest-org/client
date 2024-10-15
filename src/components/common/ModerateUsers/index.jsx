import React, { useState, useEffect } from 'react';
import { approveUser, getPendingUsers, rejectUser } from '../../../Api/Endpoints/UserEndpoints';

export default function ModerateRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await getPendingUsers();
      setRegistrations(response);
    } catch (error) {
      console.error('Error fetching registrations:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch pending registrations when the component mounts
  useEffect(() => {
    handleFetchRegistrations();
  }, []);

  // Function to approve a registration
  const handleApprove = async (id) => {
    try {
      await approveUser(id); // Approve the registration
      // Remove the approved user from the list
      setRegistrations((prevRegistrations) => prevRegistrations.filter((registration) => registration.id !== id));
    } catch (error) {
      console.error('Error approving registration:', error.message);
    }
  };

  // Function to reject a registration
  const handleReject = async (id) => {
    try {
      await rejectUser(id);
      setRegistrations((prevRegistrations) => prevRegistrations.filter((registration) => registration.id !== id));
    } catch (error) {
      console.error('Error rejecting registration:', error.message);
    }
  };

  return (
    <div className="moderate-registrations-container container my-3">
      <h2 className="mb-3">Moderate New Registrations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Date Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration.id}> {/* Assuming 'id' is the unique identifier */}
                  <td>{registration.username}</td>
                  <td>{registration.email}</td>
                  <td>{new Date(registration.created_at).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-success me-2 mb-2 mb-md-0"
                      onClick={() => handleApprove(registration.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleReject(registration.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
