import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// We use ../ to go UP one level out of 'Routes' and into 'Pages'
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Services from '../Pages/Services';  // ✅ This is imported
import Contact from '../Pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />  {/* ✅ Route is defined here */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;