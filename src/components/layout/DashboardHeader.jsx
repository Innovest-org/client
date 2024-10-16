import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import Avatar from '../../assets/admin-avatar.png';
import { logout } from '../../Api/Endpoints/AdminEndpoints';
import { AppContext } from '../../context/AppContext';

export default function DashboardHeader() {
  const navigate = useNavigate();
  const {setUser} = useContext(AppContext);

  const handleLogout = async () => {
      await logout();
      setUser(null);
      navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-transparent position-relative">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse  mx-auto" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2  mb-lg-0 d-flex align-items-center ms-auto"> {/* Use ms-auto for right alignment */}
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="#">
                <i className="fa-regular fa-bell fs-5"></i>
              </Link>
            </li>
            <li className="admin-nav nav-item d-flex align-items-center mx-3">
              <div className="text-center">
                <span className="user-name fw-bold">clarkkent</span>
                <p className='user-country mb-0'>U.P, India</p>
              </div> 
            </li>
            <li className="nav-item dropdown position-position-relative">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={Avatar}
                  alt="Profile"
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end position-absolute">
                <li><Link className="dropdown-item" to="profile/id">Profile</Link></li>
                <li><Link className="dropdown-item" to="settings">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
