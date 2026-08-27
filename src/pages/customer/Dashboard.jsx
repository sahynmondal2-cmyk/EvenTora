import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function CustomerDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Upcoming Events</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Shortlisted Vendors</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Active Enquiries</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">3</p>
          </div>
        </div>
      </main>
    </div>
  );
}
