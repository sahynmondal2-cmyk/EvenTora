import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminVenues() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Venues Directory</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Add Venue</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
             <div className="h-40 bg-gray-200"></div>
             <div className="p-4">
               <h3 className="font-semibold text-lg mb-1">Sunset Gardens</h3>
               <p className="text-gray-500 text-sm mb-3">Capacity: 500 • Outdoor</p>
               <div className="flex gap-2">
                 <button className="flex-1 bg-gray-100 text-gray-700 py-1.5 rounded text-sm font-medium hover:bg-gray-200">Edit</button>
                 <button className="flex-1 bg-red-50 text-red-700 py-1.5 rounded text-sm font-medium hover:bg-red-100">Disable</button>
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
