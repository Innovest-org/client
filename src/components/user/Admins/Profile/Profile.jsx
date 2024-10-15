import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import { getAdminById, deleteAdmin, updateAdmin } from "../../../../Api/Endpoints/AdminEndpoints";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import profile_img from '../../../../assets/profile.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user } = useContext(AppContext);
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchAdminData = async () => {
      if (user && user.id) {
        try {
          const response = await getAdminById(user.id);
          setAdminData(response);
          setFormData(response);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchAdminData();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (adminData && adminData.admin_id) {
      try {
        await updateAdmin(adminData.admin_id, formData);
        setAdminData((prevData) => ({
          ...prevData,
          ...formData,
        }));
        toast.success("Profile updated successfully!", { theme: "dark" });
        setIsEditing(false);
      } catch (error) {
        toast.error("Error updating profile: " + error.message, { theme: "dark" });
      }
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed && adminData && adminData.admin_id) {
      try {
        await deleteAdmin(adminData.admin_id);
        toast.success("Account deleted successfully!", { theme: "dark" });
      } catch (error) {
        toast.error("Error deleting account: " + error.message, { theme: "dark" });
      }
    }
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container d-flex justify-content-center align-items-center profileContainer">
      <div className="card shadow-lg p-4 rounded profile-card">
        <div className="row">
          <div className="col-md-4 text-center profile_section border-end">
            {adminData.profile_image ? (
              <img src={profile_img} alt="Profile" className="img-fluid  mb-3 profile_img" />
            ) : (
              <div className="default-profile-image rounded-circle mb-3"></div>
            )}
            <h4 className="mb-0">{adminData.username}</h4>
            <small className="text-muted">{adminData.role}</small>
            <p className="text-muted userEmail">{adminData.email}</p>
            <div className="action_btn">
            <button className="btn btn-primary  w-40" onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button className="btn btn-danger w-40" onClick={handleDelete}>Delete Account</button>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="mb-4 profile_sectionTitle" >{isEditing ? "Edit Profile" : "About Me"}</h2>
            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={formData.username || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Admin State:</label>
                  <input
                    type="text"
                    name="admin_state"
                    className="form-control"
                    value={formData.admin_state || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role:</label>
                  <input
                    type="text"
                    name="role"
                    className="form-control"
                    value={formData.role || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-success me-2">Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </form>
            ) : (
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Email:</strong> {adminData.email}</p>
                  <p><strong>Admin State:</strong> {adminData.admin_state}</p>
                  <p><strong>Role:</strong> {adminData.role}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Communities:</strong> {adminData.communities.length > 0 ? adminData.communities.join(', ') : 'Empty'}</p>
                  <p><strong>Approved Pages:</strong> {adminData.approved_pages.length > 0 ? adminData.approved_pages.join(', ') : 'Empty'}</p>
                  <p><strong>Date Joined:</strong> {new Date(adminData.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Profile;
