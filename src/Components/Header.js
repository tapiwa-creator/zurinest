import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  // Close menu on escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#1c355e] px-4 py-3 shadow-sm sm:px-6 sm:py-4 md:px-8 md:py-4 lg:px-12 lg:py-5">
        {/* Logo Area */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 md:space-x-3"
          onClick={() => {
            handleLinkClick();
            setIsMenuOpen(false);
          }}
        >
          {/* Circular Logo Container */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Circular frame for logo */}
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-md">
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
              <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-tighter text-white">
                ZuriNest
              </span>
              <span className="ml-1 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-white">
                Contractors
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile, visible on tablet and up */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10 font-sans text-sm md:text-[15px] lg:text-[16px] font-medium text-white">
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Sidebar Menu Overlay and Panel */}
      <div className="md:hidden">
        {/* Overlay - semi-transparent background */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Sidebar Menu - slides in from right */}
        <div 
          className={`fixed top-0 right-0 z-50 h-full w-64 bg-[#1c355e] shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header with Logo */}
          <div className="flex items-center justify-center p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white p-1">
                <img 
                  src="/logo.png" 
                  alt="ZuriNest Logo" 
                  className="h-full w-full rounded-full object-contain p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/logo.svg";
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl text-white">ZuriNest</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white">Contractors</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                      isActive(link.path) 
                        ? 'bg-white/10 text-[#14ddfd]' 
                        : 'text-white hover:bg-white/5 hover:text-[#14ddfd]'
                    }`}
                  >
                    <span className="font-medium">{link.name}</span>
                    {isActive(link.path) && (
                      <span className="ml-auto text-sm">●</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Optional: Contact Info or CTA in Sidebar */}
          <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
            <div className="text-center">
              <a 
                href="tel:+1234567890"
                className="inline-block w-full py-3 bg-[#14ddfd] text-[#1c355e] font-semibold rounded-lg hover:bg-[#0fbcdd] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now
              </a>
              <p className="mt-3 text-xs text-white/70">
                Available 24/7 for consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;