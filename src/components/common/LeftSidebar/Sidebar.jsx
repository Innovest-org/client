import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faUserGear, faComments, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ role }) => {
  const adminNavItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'dashboard' },
    { name: 'Admins', icon: faUserGear, path: 'admin' },
    { name: 'Members', icon: faUserGear, path: 'members' },
    { name: 'Communities', icon: faUsers, path: 'communities' },
    { name: 'Settings', icon: faCog, path: 'settings' },
    { name: 'Messages', icon: faComments, path: 'messages' },
  ];

  const investorNavItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'dashboard' },
    { name: 'Messages', icon: faComments, path: 'messages' },
    { name: 'Proposals', icon: faMoneyCheckAlt, path: 'proposals' },
    { name: 'Communities', icon: faUsers, path: 'communities' },
    { name: 'My Investments', icon: faUsers, path: 'investments' },
  ];

  const navItems = role === 'admin' ? adminNavItems : investorNavItems;
  const sidebarClass = role === 'admin' ? ' admin-sidebar' : 'investor-sidebar';

  console.log("Current role:", role);


  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="logo">{role === 'admin' ? 'Admin Dashboard' : 'Investor Dashboard'}</div>
      <div className="breakline"></div>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={`/${role}-dashboard/${item.path}`}
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
