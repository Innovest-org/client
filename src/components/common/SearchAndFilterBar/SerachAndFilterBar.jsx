import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SearchAndFilterBar.css';

export default function SearchAndFilterBar() {
  return (
    <div className="row search-filter-container">
      <div className="col-12">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
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
            <li><Link className="dropdown-item" to="#">Filter Option 1</Link></li>
            <li><Link className="dropdown-item" to="#">Filter Option 2</Link></li>
            <li><Link className="dropdown-item" to="#">Filter Option 3</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
