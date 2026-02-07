import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 z-50 flex w-full items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1c355e] py-3 shadow-lg' 
            : 'bg-[#1c355e]/95 backdrop-blur-sm py-5'
        } px-4 sm:px-6 md:px-8 lg:px-12`}
      >
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
              <span className="font-serif text-xl md:text-2xl lg:text-2xl tracking-tighter text-white">
                ZuriNest
              </span>
              <span className="ml-1 text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.4em] text-white">
                Contractors
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6 xl:space-x-10 font-sans text-[15px] lg:text-[16px] font-medium text-white">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'bg-black/70 backdrop-blur-sm' 
            : 'bg-transparent pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-[#1c355e] shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Logo in Menu */}
          <div className="p-6 border-b border-white/10">
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

          {/* Mobile Navigation Links */}
          <nav className="p-6">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block text-lg font-medium transition-colors ${
                      isActive(link.path) 
                        ? 'text-[#14ddfd]' 
                        : 'text-white hover:text-[#14ddfd]'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="ml-2 text-sm">✓</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info in Mobile Menu */}
          <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
            <p className="text-sm text-white/80 mb-3">Need help? Contact us:</p>
            <a 
              href="tel:+1234567890" 
              className="block text-[#14ddfd] hover:text-white transition-colors"
            >
              (123) 456-7890
            </a>
            <a 
              href="mailto:info@zurinest.com" 
              className="block text-white/80 hover:text-[#14ddfd] transition-colors text-sm mt-1"
            >
              info@zurinest.com
            </a>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-20 lg:h-24"></div>
    </>
  );
};

export default Header;