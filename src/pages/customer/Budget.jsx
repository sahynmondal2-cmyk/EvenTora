import React from 'react';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

export default function Budget() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="customer" />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Budget Tracker</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Add Expense</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Budget</p>
              <p className="text-2xl font-bold">$20,000</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Spent</p>
              <p className="text-2xl font-bold text-red-500">$5,400</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '27%' }}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
