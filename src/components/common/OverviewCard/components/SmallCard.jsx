import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SmallCard({ icon, title, color, precentage }) {
  return (
    <div className="small-card d-flex justify-content-start flex-column mx-2">
      <div className="overviewIcon mb-3" style={{ backgroundColor: color }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="mb-2">{title}</span>
      <span style={{ color: color }}>{precentage}</span>
    </div>
  );
}
