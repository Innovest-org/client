import React, { useState, useEffect } from 'react';
import { approveUser, getPendingUsers, rejectUser } from '../../../Api/Endpoints/UserEndpoints';
import Pagination from '../../common/Pagination/Pagination';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

export default function ModerateRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  useEffect(() => {
    handleFetchRegistrations();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveUser(id);
      setRegistrations((prevRegistrations) => prevRegistrations.filter((registration) => registration.id !== id));
      toast.success('Registration approved successfully!');
    } catch (error) {
      console.error('Error approving registration:', error.message);
      toast.error('Failed to approve registration.');
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectUser(id);
      setRegistrations((prevRegistrations) => prevRegistrations.filter((registration) => registration.id !== id));
      toast.success('Registration rejected successfully!');
    } catch (error) {
      console.error('Error rejecting registration:', error.message);
      toast.error('Failed to reject registration.');
    }
  };

  const indexOfLastRegistration = currentPage * itemsPerPage;
  const indexOfFirstRegistration = indexOfLastRegistration - itemsPerPage;
  const currentRegistrations = registrations.slice(indexOfFirstRegistration, indexOfLastRegistration);
  const totalPages = Math.ceil(registrations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="moderate-registrations-container container my-3">
      <h2 className="mb-3">Moderate New Registrations</h2>

      {loading ? (
        <div className="text-center">
          <ClipLoader color="#007bff" loading={loading} size={50} /> {/* ClipLoader component */}
        </div>
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
              {currentRegistrations.length > 0 ? (
                currentRegistrations.map((registration) => (
                  <tr key={registration.id}>
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
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No pending registrations.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}
    </div>
  );
}
