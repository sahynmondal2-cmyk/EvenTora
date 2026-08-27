import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider text-[#FFFFF0]">
              EVENTORA <span className="text-[#D4AF37]">✨</span>
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Curating unforgettable moments with luxury venues, premium vendors, and bespoke planning services.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFF0] mb-4">Discover</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Luxury Venues</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Premium Vendors</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Real Weddings</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Inspiration Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#FFFFF0] mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFFFF0] mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive offers and wedding inspiration.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-[#111]" />
              <Button variant="primary">Join</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Eventora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
