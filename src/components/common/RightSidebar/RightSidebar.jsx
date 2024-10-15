import { faBarsProgress, faCheckCircle, faClipboardList, faClock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './RightSidebar.css';
import SidebarSection from './components/SidebarSection';
import { getPendingUsers } from '../../../Api/Endpoints/UserEndpoints';

export default function RightSidebar({ userType }) {
  const [pendingRegistrationsCount, setPendingRegistrationsCount] = useState();

  useEffect(() => {
    const fetchPendingRegistrations = async () => {
      try {
        const pendingUsers = await getPendingUsers();
        setPendingRegistrationsCount(pendingUsers.length);
      } catch (error) {
        console.error('Error fetching pending registrations:', error.message);
      }
    };

    fetchPendingRegistrations();
  }, []);
  const activitySummary = [
    { icon: faUserPlus, color: '#007bff', label: 'New Registrations', count: pendingRegistrationsCount },
    { icon: faSignInAlt, color: '#28a745', label: 'User Logins', count: 6 },
    { icon: faClipboardList, color: '#ffc107', label: 'New Posts', count: 2 },
  ];

  const pendingRequests = [
    { icon: faCheckCircle, color: '#17a2b8', label: 'Account Verifications', count: 3, date: 'Jun 25, 2028' },
    { icon: faClock, color: '#dc3545', label: 'Post Approvals', count: 5, date: 'Jun 25, 2028' },
    { icon: faBarsProgress, color: '#007bff', label: 'Project Reviews', count: 2, date: 'Jun 25, 2028' },
  ];

  const UpcomingMeetings = [
    { label: 'Video call with "AI-Driven Cybersecurity" founder', time: '11:32' },
    { label: 'Quarterly review with "DataMind AI"', time: '11:21' },
    { label: 'Due diligence meeting for "BlockchainX"', time: '10:54' },
  ]

  return (
    <div className={`right-sidebar ${userType === 'investor' && 'bg-white '}`}>
      {userType === 'admin' && (
        <>
          <SidebarSection title="Today's Activity Summary" items={activitySummary} />
          <SidebarSection title="Pending User Requests" items={pendingRequests} />
        </>
      )}

      {userType === 'investor' && (
        <>
          <SidebarSection title="Upcoming Meetings" items={UpcomingMeetings} />
        </>
      )}
    </div>
  );
}
