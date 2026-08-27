import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function PackageCard({ pkg }) {
  const { title, description, price, features, isPopular } = pkg;

  return (
    <div className={`relative flex flex-col rounded-md border bg-[#0A0A0A] p-6 transition-all hover:border-[#D4AF37] ${isPopular ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-gray-800'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge text="Most Popular" variant="gold" className="px-3 py-1 uppercase tracking-wider text-[10px]" />
        </div>
      )}
      
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-[#FFFFF0]">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
      
      <div className="mb-6 flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold text-[#D4AF37]">{price}</span>
      </div>
      
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={isPopular ? 'primary' : 'outline'} className="w-full">
        Select Package
      </Button>
    </div>
  );
}
