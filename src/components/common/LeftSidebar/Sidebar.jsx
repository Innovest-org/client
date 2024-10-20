import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faUserGear, faComments, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../../context/AppContext';

const Sidebar = () => {
  const {user}  = useContext(AppContext);
  const role = user?.role;
  const adminNavItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'dashboard' },
    { name: 'Admins', icon: faUserGear, path: 'admin' },
    { name: 'Members', icon: faUserGear, path: 'members' },
    { name: 'Communities', icon: faUsers, path: 'communities' },
    { name: 'Settings', icon: faCog, path: 'settings' },
  ];

  const investorNavItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'dashboard' },
    { name: 'Messages', icon: faComments, path: 'messages' },
    { name: 'Proposals', icon: faMoneyCheckAlt, path: 'proposals' },
    { name: 'Communities', icon: faUsers, path: 'communities' },
    { name: 'My Investments', icon: faUsers, path: 'investments' },
    { name: 'Messages', icon: faComments, path: 'messages' },
  ];

  const navItems = role === 'ADMIN' || 'SUPER_ADMIN' ? adminNavItems : investorNavItems;
  const sidebarClass = role === 'ADMIN' || 'SUPER_ADMIN' ? ' admin-sidebar' : 'investor-sidebar';
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="logo">{role === 'ADMIN' || 'SUPER_ADMIN' ? 'Admin Dashboard' : 'Investor Dashboard'}</div>
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
