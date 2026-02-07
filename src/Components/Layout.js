import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main Content - Add padding to account for fixed header */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;