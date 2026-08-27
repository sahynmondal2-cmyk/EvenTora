import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardSidebar from '../../components/layout/DashboardSidebar';

const data = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];

export default function AdminAnalytics() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar role="admin" />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics & Reports</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg text-gray-700 mb-6">Revenue Overview</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
