import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteAdmin } from "../../../Api/Endpoints/AdminEndpoints";
import AdminForm from "../AddOrEditForm/components/AdminForm";
import Pagination from "../../common/Pagination/Pagination";

export default function AdminTable({ admins, setAdmins }) {
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastAdmin = currentPage * itemsPerPage;
  const indexOfFirstAdmin = indexOfLastAdmin - itemsPerPage;
  const currentAdmins = admins.slice(indexOfFirstAdmin, indexOfLastAdmin);
  const totalPages = Math.ceil(admins.length / itemsPerPage);

  const handleUpdateAdmin = async (admin_id) => {
    try {
      const adminToEdit = admins.find((admin) => admin.admin_id === admin_id);
      setEditingAdmin(adminToEdit);
    } catch (error) {
      console.error("Error selecting admin for update:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingAdmin(null);
  };

  const handleDeleteAdmin = async (admin_id) => {
    try {
      const response = await deleteAdmin(admin_id);
      if (response.success) {
        setAdmins((prevAdmins) =>
          prevAdmins.filter((admin) => admin.admin_id !== admin_id)
        );
        console.log("Admin deleted successfully.");
      } else {
        console.error("Error deleting admin:", response.message);
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  if (editingAdmin) {
    return (
      <AdminForm
        mode="edit"
        initialData={editingAdmin}
        setAdmins={setAdmins}
        onSave={(updatedAdmin) => {
          setAdmins((prevAdmins) =>
            prevAdmins.map((admin) =>
              admin.admin_id === updatedAdmin.admin_id ? updatedAdmin : admin
            )
          );
          setEditingAdmin(null);
        }}
        onCancel={handleCancelEdit}
      />
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">User name</th>
            <th scope="col">Community</th>
            <th scope="col">Email</th>
            <th scope="col">Date Joined</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentAdmins.length > 0 ? (
            currentAdmins.map((admin) => (
              <tr key={admin.admin_id}>
                <td>
                  <div
                    to={`/admin-dashboard/profile/${admin.admin_id}`}
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="rounded-circle me-2"
                      src={admin.profile_image || "path/to/default-image.jpg"}
                      alt={admin.username}
                      style={{ width: "50px", height: "50px" }}
                    />
                    <span className="community-name-text fw-bold">
                      {admin.username}
                    </span>
                  </div>
                </td>
                <td>
                  {admin.communities.length > 0
                    ? admin.communities.join(", ")
                    : "No community"}
                </td>
                <td>
                  <Link to={`mailto:${admin.email}`}>{admin.email}</Link>
                </td>
                <td>{new Date(admin.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleUpdateAdmin(admin.admin_id)}
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}
