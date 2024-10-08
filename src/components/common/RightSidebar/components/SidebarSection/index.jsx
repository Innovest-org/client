import React from 'react';
import SidebarItem from '../SidebarItem/index';

export default function SidebarSection({ title, items }) {
  return (
    <div className="rightsidebar-card">
      <h6 className='mb-2 fw-bold'>{title}</h6>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <SidebarItem 
            key={index}
            icon={item.icon}
            color={item.color}
            label={item.label}
            count={item.count}
            date={item.date}
            time={item.time}
          />
        ))}
      </ul>
    </div>
  );
}