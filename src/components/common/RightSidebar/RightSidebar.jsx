import { faBarsProgress, faCheckCircle, faClipboardList, faClock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './RightSidebar.css';
import SidebarSection from './components/SidebarSection';

export default function RightSidebar() {
  const activitySummary = [
    { icon: faUserPlus, color: '#007bff', label: 'New Registrations', count: 12 },
    { icon: faSignInAlt, color: '#28a745', label: 'User Logins', count: 156 },
    { icon: faClipboardList, color: '#ffc107', label: 'New Posts', count: 23 },
  ];

  const pendingRequests = [
    { icon: faCheckCircle, color: '#17a2b8', label: 'Account Verifications', count: 3, date: 'Jun 25, 2028' },
    { icon: faClock, color: '#dc3545', label: 'Post Approvals', count: 5, date: 'Jun 25, 2028' },
    { icon: faBarsProgress, color: '#007bff', label: 'Project Reviews', count: 2, date: 'Jun 25, 2028' },
  ];

  return (
    <div className="right-sidebar">
      <SidebarSection title="Today's Activity Summary" items={activitySummary} />
      <SidebarSection title="Pending User Requests" items={pendingRequests} />
    </div>
  );
}
