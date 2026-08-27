import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$45,200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Active Vendors</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">84</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">1,204</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-600">Pending Enquiries</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">15</p>
          </div>
        </div>
      </main>
    </div>
  );
}
