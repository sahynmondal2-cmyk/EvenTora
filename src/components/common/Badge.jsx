import React from 'react';

const variants = {
  default: 'bg-gray-800 text-[#FFFFF0]',
  gold: 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30',
  success: 'bg-green-500/20 text-green-400 border border-green-500/30',
};

export default function Badge({ text, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
