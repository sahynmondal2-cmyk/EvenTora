import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu, X } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Vendors', href: '#' },
    { name: 'Venues', href: '#' },
    { name: 'Inspiration', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'Offers', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-wider text-[#FFFFF0] flex items-center gap-2">
            EVENTORA <span className="text-[#D4AF37]">✨</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-[#D4AF37]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-gray-800 md:hidden">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-300 hover:text-[#D4AF37]"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-800 my-4" />
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start">
                Login
              </Button>
              <Button variant="primary" className="w-full justify-start">
                Start Planning
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
