import React from 'react';
import { Users, MapPin, Star } from 'lucide-react';
import Badge from './Badge';

export default function VenueCard({ venue }) {
  const { name, image, images, rating, capacity, location, price, type } = venue;
  const imageUrl = image || (images && images.length > 0 ? images[0] : 'https://picsum.photos/seed/placeholder/800/600');

  return (
    <div className="group overflow-hidden rounded-md border border-gray-800 bg-[#0A0A0A] transition-all hover:border-[#D4AF37]/50">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Badge text={type} variant="default" className="bg-black/60 backdrop-blur-sm" />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-[#FFFFF0]">{name}</h3>
          <div className="flex items-center gap-1 bg-gray-900 px-2 py-1 rounded text-[#D4AF37]">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold">{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#D4AF37]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#D4AF37]" />
            <span>Up to {capacity} guests</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-4">
          <span className="text-sm font-medium text-[#FFFFF0]">Rental Fee</span>
          <span className="text-lg font-bold text-[#D4AF37]">{price}</span>
        </div>
      </div>
    </div>
  );
}
