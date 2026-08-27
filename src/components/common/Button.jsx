import React from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
  primary: 'bg-[#D4AF37] text-black hover:bg-[#F3E5AB]',
  secondary: 'bg-gray-800 text-[#FFFFF0] hover:bg-gray-700',
  outline: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10',
  ghost: 'text-[#FFFFF0] hover:bg-white/10',
};

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 py-2 text-sm',
  lg: 'h-12 px-8 text-base',
};

export default function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  disabled,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
