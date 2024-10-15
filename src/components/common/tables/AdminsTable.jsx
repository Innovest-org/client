import { Link } from "react-router-dom";
import { getAllCommunities } from "../../../Api/Endpoints/CommunityEndpoints";
import { deleteAdmin } from "../../../Api/Endpoints/AdminEndpoints";
import { useEffect, useState } from "react";

export default function AdminTable({ admins, onEditClick, setAdmins }) {
  const [communities, setCommunities] = useState([]);

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
      }
    };

    fetchCommunities();
  }, []);

  // Function to get community name by community_id
  const getCommunityName = (communityId) => {
    const community = communities.find((c) => c.community_id === communityId);
    return community ? community.community_name : "No community";
  };

  // Function to handle delete admin
  const handleDeleteAdmin = async (admin_id) => {
    console.log("Deleting admin with ID:", admin_id);
    try {
      const confirmed = window.confirm("Are you sure you want to delete this admin?");
      if (confirmed) {
        const response = await deleteAdmin(admin_id);
        console.log("Delete response:", response);
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

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Community</th>
              <th scope="col">Email address</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.admin_id}>
                  <Link to={`/admin-dashboard/profile/${admin.admin_id}`} 
                  className="d-flex align-items-center"
                  style={{borderBottom: '1px solid #dcdbdd', paddingBottom: '19px'}}
                  >
                      <td >
                        <img
                          className="rounded-circle me-2"
                          src={admin.profile_image}
                          alt={admin.username}
                          style={{ width: '40px', height: '40px' }}
                        />
                          <span>{admin.username}</span>
                      </td>
                    </Link>
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
    </div>
  );
}
