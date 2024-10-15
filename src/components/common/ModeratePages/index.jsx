import React, { useState, useEffect } from 'react';
import { approvePage, getPendingPages, rejectPage } from '../../../Api/Endpoints/CommunityPagesEndpoints';

export default function ModeratePages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchPages = async () => {
    try {
      setLoading(true);
      const response = await getPendingPages();
      setPages(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchPages();
  }, []);

  const handleApprove = async (page_id) => {
    try {
      await approvePage(page_id);
      handleFetchPages();
    } catch (error) {
      console.error('Error approving post:', error.message);
    }
  };
  const handleReject = async (page_id) => {
    try {
      await rejectPage(page_id);
      handleFetchPages();
    } catch (error) {
      console.error('Error rejecting post:', error.message);
    }
  };

  return (
    <div className="moderate-pages-container container my-3">
      <h2 className="mb-3">Moderate New Pages</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Page Title</th>
                <th>Author</th>
                <th>Date Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.page_id}> {/* Fixing typo: page.oage_id -> page.page_id */}
                  <td>{page.title}</td>
                  <td>{page.author.username}</td>
                  <td>{new Date(page.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-success me-2 mb-2 mb-md-0"
                      onClick={() => handleApprove(page.page_id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleReject(page.page_id)}
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
