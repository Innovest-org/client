import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SearchAndFilterBar.css';

export default function SearchAndFilterBar({onSearchChange}) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="search-filter-container">
      <div className="search-filter-wrapper">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="filterDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <ul className="dropdown-menu" aria-labelledby="filterDropdown">
            <li><Link className="dropdown-item" to="#">Name</Link></li>
            <li><Link className="dropdown-item" to="#">Date</Link></li>
            <li><Link className="dropdown-item" to="#">Id</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}