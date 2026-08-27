import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminPackages() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Subscription Packages</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Create Package</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
            <p className="text-3xl font-bold text-indigo-600 mb-4">$29<span className="text-sm text-gray-500 font-normal">/mo</span></p>
            <ul className="space-y-2 mb-6 text-gray-600 text-sm">
              <li>✓ Basic listing</li>
              <li>✓ Up to 5 enquiries/mo</li>
              <li>✗ Featured placement</li>
            </ul>
            <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded font-medium hover:bg-indigo-50 transition">Edit Plan</button>
          </div>
        </div>
      </main>
    </div>
  );
}
