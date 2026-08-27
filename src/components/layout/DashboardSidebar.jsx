import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Settings, 
  LogOut,
  Users
} from 'lucide-react';

export default function DashboardSidebar({ activeItem = 'dashboard', isAdmin = false }) {
  const customerLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'shortlist', label: 'Shortlisted', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const adminLinks = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'users', label: 'Manage Users', icon: Users },
    { id: 'vendors', label: 'Vendors', icon: Settings },
    { id: 'bookings', label: 'All Bookings', icon: Calendar },
    { id: 'settings', label: 'Platform Settings', icon: Settings },
  ];

  const links = isAdmin ? adminLinks : customerLinks;

  return (
    <aside className="w-64 min-h-screen bg-[#050505] border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold tracking-wider text-[#FFFFF0]">
          EVENTORA <span className="text-[#D4AF37]">✨</span>
        </h2>
        <p className="text-xs text-gray-500 mt-1">{isAdmin ? 'Admin Portal' : 'Customer Portal'}</p>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = activeItem === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                isActive 
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-medium' 
                  : 'text-gray-400 hover:bg-gray-900 hover:text-[#FFFFF0]'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-[#D4AF37]' : ''}`} />
              {link.label}
            </a>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <button className="flex w-full items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
