import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminVendors() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Vendors Management</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Add Vendor</button>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Floral Designs Co.</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">Florist</td>
                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
