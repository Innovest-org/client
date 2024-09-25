import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserShield, faUsers, faCog, faUserGear } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const { setActiveComponent } = useContext(AppContext);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
    setActiveItem(componentName);
  };

  return (
    <nav className="sidebar d-flex flex-column">
      <div className="logo text-center">
        Innovest
      </div>
      <div className="breakline"></div>
      <ul className="list-unstyled w-100">
        <li
          onClick={() => handleItemClick('Dashboard')}
          className={`d-flex align-items-center ${activeItem === 'Dashboard' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span className="sidebar-text d-none d-md-inline ms-2">Dashboard</span>
        </li>
        <li
          onClick={() => handleItemClick('Admin')}
          className={`d-flex align-items-center ${activeItem === 'Admin' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faUserShield} />
          <span className="sidebar-text d-none d-md-inline ms-2">Admin</span>
        </li>
        <li
          onClick={() => handleItemClick('Members')}
          className={`d-flex align-items-center ${activeItem === 'Members' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faUserGear} />
          <span className="sidebar-text d-none d-md-inline ms-2">Members</span>
        </li>
        <li
          onClick={() => handleItemClick('Communities')}
          className={`d-flex align-items-center ${activeItem === 'Communities' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faUsers} />
          <span className="sidebar-text d-none d-md-inline ms-2">Communities</span>
        </li>
        <li
          onClick={() => handleItemClick('Settings')}
          className={`d-flex align-items-center ${activeItem === 'Settings' ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faCog} />
          <span className="sidebar-text d-none d-md-inline ms-2">Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
