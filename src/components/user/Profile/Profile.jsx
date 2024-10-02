import React from 'react';
import './style.css';
import CustomButton from '../../common/CustomButton/CustomButton';
import SearchAndFilterBar from '../../common/SearchAndFilterBar/SerachAndFilterBar';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AvatarPlaceholder from '../../../assets/admin-avatar.png';
import { adminsData } from '../Admin/userData';

export default function Profile() {
  const { id } = useParams();
  const currentAdmin = adminsData.find(admin => admin.id === id);

  if (!currentAdmin) {
    return <div>No admin data available</div>;
  }

  const handleAddAdminClick = () => {
    console.log("Add Admin Clicked");
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-4 custom-m">
        <div className="col-md-10 mb-3 mb-md-0">
          <SearchAndFilterBar />
        </div>
        <div className="col-md-2 text-md-end text-center">
          <Link to="/admin-dashboard/admin/add-admin">
            <CustomButton text="Add New Admin" onClick={handleAddAdminClick} />
          </Link>
        </div>
      </div>

      <div className="row justify-content-around custom-m">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            className="rounded-circle img-fluid border border-secondary mb-3"
            src={currentAdmin.avatar || AvatarPlaceholder}
            alt="Admin Profile"
            style={{ width: '300px', height: '300px' }}
          />
          <h4 className="fw-bold">{currentAdmin.name}</h4>
          <p className="text-muted">{currentAdmin.community}</p>

          <div className="d-flex justify-content-center gap-3 mt-2">
            <Link to={`tel:${currentAdmin.phone}`} className="btn btn-outline-secondary rounded-circle">
              <FontAwesomeIcon icon={faPhone} />
            </Link>
            <Link to={`mailto:${currentAdmin.email}`} className="btn btn-outline-secondary rounded-circle">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>

        <div className="col-md-6 p-5 mt-5">
          <h4>About</h4>
          <p className="text-muted">
            {currentAdmin.description || "No description available."}
          </p>

          <div className="related-data pt-4">
            <h5 className="mt-4 mb-3">Admins from the same community</h5>
            <div className="d-flex align-items-center position-relative">
              {/*don't forget to filter and slice 2 from it*/}
                  <div className="me-2" key={adminsData.id}>
                    <img
                      className="rounded-circle img-fluid border border-secondary"
                      src={adminsData.avatar || AvatarPlaceholder}
                      alt={adminsData.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </div>
                  <div className="me-2 avatar-overlap" key={adminsData.id}>
                    <img
                      className="rounded-circle img-fluid border border-secondary"
                      src={adminsData.avatar || AvatarPlaceholder}
                      alt={adminsData.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </div>
              <span className="text-muted">+{adminsData.length - 2} More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
