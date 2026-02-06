import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#1c355e] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Call to Action Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Our team is ready to help you create your dream space
          </p>
          <Link 
            to="/contact"
            onClick={handleLinkClick} // Add onClick handler
            className="inline-block bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-bold py-3 px-10 rounded-md transition-all shadow-md"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Bio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              ZuriNest Contractors
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed pt-2">
             Superior design and installation services for fitted kitchens, bathrooms, closets, and built-in cabinetry
               Transforming interiors with masterful craftsmanship and timeless sophistication across Zimbabwe
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" onClick={handleLinkClick} className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick} className="hover:text-[#d4af37] transition-colors">About</Link></li>
              <li><Link to="/services" onClick={handleLinkClick} className="hover:text-[#d4af37] transition-colors">Services</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Fitted Kitchens</li>
              <li>Bathroom Design</li>
              <li>Custom Closets</li>
              <li>Built-in Cabinets</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:zurinestcontractorscliff@gmail.com@gmail.com" className="hover:text-[#14ddfd] underline">
                  zurinestcontractorscliff@gmail.com@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+263 78 416 4005</p>
              </div>
              <div>
                <p className="font-medium text-white">Location</p>
                <p>14 Bath Rd Belgravia<br />Harare, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Icons (SVG replacements) */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-gray-700 hover:text-[#d4af37]" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-gray-700 hover:text-blue-600" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.411h2.94v-2.516c0-2.914 1.779-4.5 4.377-4.5 1.244 0 2.315.092 2.627.134v3.044l-1.802.001c-1.414 0-1.688.672-1.688 1.658v2.179h3.369l-.439 3.411h-2.93v8.74h6.142c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-400 font-medium">
              © 2026 ZuriNest Contractors. All rights reserved.
            </p>

            {/* Region Info */}
            <p className="text-xs text-gray-400 text-center md:text-right italic">
              designed by MK Holdings| +263 781406806
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;