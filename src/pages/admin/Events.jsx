import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

const AdminEvents = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <DashboardSidebar role="admin" />
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-display text-champagne mb-8">All Events</h1>
        <div className="glass rounded-2xl p-6">
          <p className="text-muted">Manage all platform events here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
