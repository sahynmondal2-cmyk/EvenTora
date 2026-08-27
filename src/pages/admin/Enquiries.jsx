import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminEnquiries() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">System Enquiries</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">Partnership Request</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">New</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">Hello, we are a new photography studio looking to join your platform...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
