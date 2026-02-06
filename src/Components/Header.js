import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#1c355e] px-12 py-5 shadow-sm">
      {/* Logo Area */}
      <Link 
        to="/" 
        className="flex items-center space-x-3"
        onClick={handleLinkClick}
      >
        {/* Circular Logo Container */}
        <div className="flex items-center space-x-3">
          {/* Circular frame for logo */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-md">
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
            <span className="font-serif text-2xl tracking-tighter text-white">
              ZuriNest
            </span>
            <span className="ml-1 text-[10px] uppercase tracking-[0.4em] text-white">
              Contractors
            </span>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center space-x-10 font-sans text-[16px] font-medium text-white">
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
    </header>
  );
};

export default Header;