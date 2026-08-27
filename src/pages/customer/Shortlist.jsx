import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function Shortlist() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shortlisted Vendors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Grand Plaza Hotel</h3>
              <p className="text-gray-500 text-sm mb-4">Venue</p>
              <button className="w-full bg-indigo-50 text-indigo-700 py-2 rounded font-medium hover:bg-indigo-100 transition">View Details</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
