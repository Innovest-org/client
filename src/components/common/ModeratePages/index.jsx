import React, { useState, useEffect } from 'react';
import { approvePage, getPageById, getPendingPages, rejectPage } from '../../../Api/Endpoints/CommunityPagesEndpoints';
import { getCommunityById } from '../../../Api/Endpoints/CommunityEndpoints';
import { getUserById } from '../../../Api/Endpoints/UserEndpoints';
import Pagination from '../../common/Pagination/Pagination';
import { ClipLoader } from 'react-spinners';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModeratePages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleFetchPages = async () => {
    try {
      setLoading(true);
      const response = await getPendingPages();
      const pagesWithDetails = await Promise.all(response.data.map(async (page) => {
        const pageDetails = await getPageById(page.community_id, page.page_id);
        const communityDetails = await getCommunityById(page.community_id);
        const authorDetails = await getUserById(pageDetails.author);

        return {
          ...page,
          title: pageDetails.title,
          author: authorDetails.user.username || 'Unknown Author',
          communityName: communityDetails.community.community_name || 'Unknown Community',
        };
      }));
      setPages(pagesWithDetails);
    } catch (error) {
      console.error('Error fetching pages:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchPages();
  }, []);

  const handleApprove = async (communityId, pageId) => {
    try {
      await approvePage(communityId, pageId);
      setPages((prevPages) => prevPages.filter((page) => page.page_id !== pageId));
      toast.success('Page approved successfully!');
    } catch (error) {
      console.error('Error approving page:', error.message);
      toast.error('Error approving page. Please try again.');
    }
  };

  const handleReject = async (communityId, pageId) => {
    try {
      await rejectPage(communityId, pageId);
      setPages((prevPages) => prevPages.filter((page) => page.page_id !== pageId));
      toast.success('Page rejected successfully!');
    } catch (error) {
      console.error('Error rejecting page:', error.message);
      toast.error('Error rejecting page. Please try again.');
    }
  };

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentPages = pages.slice(indexOfFirstPage, indexOfLastPage);
  const totalPages = Math.ceil(pages.length / itemsPerPage);

  return (
    <div className="moderate-pages-container container my-3">
      <h2 className="mb-3">Moderate New Pages</h2>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#007bff" loading={loading} size={50} />
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-borderless table-hover">
            <thead className="table-light">
              <tr>
                <th style={{ width: '250px' }} className="fw-bold">Page Title</th>
                <th>Author</th>
                <th>Community Name</th>
                <th>Date Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPages.map((page) => (
                <tr key={page.page_id}>
                  <td>{page.title}</td>
                  <td>{page.author}</td>
                  <td>{page.communityName}</td>
                  <td>{new Date(page.createdAt).toLocaleDateString()}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleApprove(page.community_id, page.page_id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReject(page.community_id, page.page_id)}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {currentPages.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No pending pages available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              handlePreviousPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              handleNextPage={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            />
          )}
        </div>
      )}
    </div>
  );
}
