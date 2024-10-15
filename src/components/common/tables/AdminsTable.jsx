import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCommunities } from "../../../Api/Endpoints/CommunityEndpoints";
import { deleteAdmin } from "../../../Api/Endpoints/AdminEndpoints";

export default function AdminTable({ admins = [], onEditClick, setAdmins }) {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const fetchedCommunities = await getAllCommunities();
        if (Array.isArray(fetchedCommunities.communities)) {
          setCommunities(fetchedCommunities.communities);
        } else {
          console.error('Fetched communities data is not an array or missing:', fetchedCommunities.communities);
        }
      } catch (error) {
        console.error('Error fetching communities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  const getCommunityName = (communityId) => {
    const community = communities.find((c) => c.community_id === communityId);
    return community ? community.community_name : "No community";
  };

  const handleDeleteAdmin = async (admin_id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this admin?");
      if (confirmed) {
        const response = await deleteAdmin(admin_id);
        if (response.success) {
          alert("Admin deleted successfully!");
          const updatedAdmins = admins.filter((admin) => admin.admin_id !== admin_id);
          setAdmins(updatedAdmins);
        } else {
          alert("Failed to delete admin.");
        }
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
      alert("Error deleting admin.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!admins || admins.length === 0) {
    return <div>No admins available</div>;
  }

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
            admins.map((admin) => (
              <tr key={admin.admin_id}>
                <td className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={admin.profile_image}
                    alt={admin.username}
                    style={{ width: '50px', height: '50px' }}
                  />
                  <Link to={`/admin-dashboard/profile/${admin.admin_id}`}>
                    <span>{admin.username}</span>
                  </Link>
                </td>
                <td>
                  {admin.communities.length > 0
                    ? admin.communities.map((communityId) => getCommunityName(communityId)).join(', ')
                    : 'No community'}
                </td>
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
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteAdmin(admin.admin_id)}
                  >
                    Delete
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
