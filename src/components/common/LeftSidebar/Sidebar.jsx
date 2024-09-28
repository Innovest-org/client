import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faUserGear, faComments } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'dashboard' },
    { name: 'Admins', icon: faUserGear, path: 'admin' },
    { name: 'Members', icon: faUserGear, path: 'members' },
    { name: 'Communities', icon: faUsers, path: 'communities' },
    { name: 'Settings', icon: faCog, path: 'settings' },
    { name: 'Messages', icon: faComments, path: 'messages' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">Innovest</div>
      <div className="breakline"></div>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={`/admin-dashboard/${item.path}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <FontAwesomeIcon icon={item.icon} className="me-3" />
              <span className="sidebar-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
