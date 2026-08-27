import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function Enquiries() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Enquiries</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Catering Enquiry - Taste Buds</h3>
              <p className="text-sm text-gray-500">Sent on: Oct 10, 2026</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Pending</span>
          </div>
        </div>
      </main>
    </div>
  );
}
