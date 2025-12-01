import React, { useState, useEffect } from 'react';
import { Menu, X, Search, TrendingUp, Heart } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(217,119,6,0.5)] transition-shadow duration-300">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand-400 transition-colors">
              Profit Path <span className="text-brand-600">Hub</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-brand-500 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button 
              className="p-2 text-zinc-300 hover:text-brand-500 hover:bg-white/5 rounded-full transition-all"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-brand-600/20 transform hover:-translate-y-0.5">
              Subscribe
            </button>
            <a
              href="https://www.paypal.com/paypalme/RexcelmarkTech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transform hover:-translate-y-0.5"
            >
              <span>Donate</span>
              <Heart className="w-3.5 h-3.5 group-hover:fill-current group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              className="p-2 text-zinc-300 hover:text-brand-500 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-zinc-800 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-brand-600/10 hover:pl-5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-zinc-800 space-y-3">
             <button className="w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-lg font-medium transition-colors">
              Subscribe Now
            </button>
            <a
              href="https://www.paypal.com/paypalme/RexcelmarkTech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg font-bold transition-all duration-300 border border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group"
            >
              <span>Donate</span>
              <Heart className="w-4 h-4 group-hover:fill-current transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;