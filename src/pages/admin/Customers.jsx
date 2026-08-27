import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function AdminCustomers() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Customers</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Jane Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">jane@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">Aug 27, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
