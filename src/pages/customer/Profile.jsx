import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function Profile() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500" defaultValue="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-indigo-500 focus:border-indigo-500" defaultValue="jane@example.com" />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Save Changes</button>
          </form>
        </div>
      </main>
    </div>
  );
}
