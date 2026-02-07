import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-[#1c355e] px-6 py-4 shadow-sm md:px-12 md:py-5">
        {/* Logo Area */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 md:space-x-3"
          onClick={handleLinkClick}
        >
          {/* Circular Logo Container */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Circular frame for logo */}
            <div className="relative flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-md">
              <img 
                src="/logo.png" 
                alt="ZuriNest Logo" 
                className="h-full w-full rounded-full object-contain p-1"
                onError={(e) => {
                  // Try SVG if PNG doesn't exist
                  e.target.onerror = null;
                  e.target.src = "/logo.svg";
                }}
              />
            </div>
            
            {/* Text logo - ZuriNest */}
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl md:text-2xl tracking-tighter text-white">
                ZuriNest
              </span>
              <span className="ml-1 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white">
                Contractors
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 lg:space-x-10 font-sans text-[15px] lg:text-[16px] font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`transition-colors duration-300 hover:text-[#14ddfd] ${
                    isActive(link.path) ? 'text-[#14ddfd]' : ''
                  }`}
                >
                  {link.name}
                </Link>
                
                {/* Dynamic Underline for Active State */}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#14ddfd]"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay - Only on mobile */}
        <div 
          className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Panel - Slides in from right */}
          <div 
            className={`absolute right-0 top-0 h-full w-64 bg-[#1c355e] shadow-2xl transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation Links */}
            <div className="p-6 pt-20">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`block text-lg font-medium py-2 transition-colors ${
                        isActive(link.path) 
                          ? 'text-[#14ddfd]' 
                          : 'text-white hover:text-[#14ddfd]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;