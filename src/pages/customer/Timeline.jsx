import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function Timeline() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Timeline</h1>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
            <h3 className="font-semibold text-lg">Book Venue</h3>
            <p className="text-gray-500 text-sm">Due: Oct 15, 2026</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300">
            <h3 className="font-semibold text-lg">Finalize Guest List</h3>
            <p className="text-gray-500 text-sm">Due: Nov 1, 2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}
