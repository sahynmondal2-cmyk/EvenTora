import React from 'react';
import { Star, MapPin } from 'lucide-react';
import Badge from './Badge';

export default function VendorCard({ vendor }) {
  const { name, image, rating, reviews, category, location, price } = vendor;

  return (
    <div className="group overflow-hidden rounded-md border border-gray-800 bg-[#0A0A0A] transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image || '/placeholder.jpg'}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge text={category} variant="gold" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#FFFFF0]">{name}</h3>
          <div className="flex items-center gap-1 text-[#D4AF37]">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between border-t border-gray-800 pt-3">
          <span className="text-sm text-gray-400">Starting from</span>
          <span className="text-base font-semibold text-[#D4AF37]">{price}</span>
        </div>
      </div>
    </div>
  );
}
