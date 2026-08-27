import React from 'react';

export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-[#FFFFF0]">{label}</label>}
      <input
        className={`flex h-10 w-full rounded-sm border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-[#FFFFF0] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-50 ${
          error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
