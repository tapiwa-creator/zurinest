import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [activeFilter, setActiveFilter] = useState('Kitchens');
  const navigate = useNavigate();

  const services = [
    { title: "Kitchens", desc: "Custom designed kitchens.", img: "/kitchen.jpg" },
    { title: "Closets", desc: "Smart storage solutions.", img: "/closet1.jpg" },
    { title: "Containers", desc: "Innovative container architecture.", img: "/container.jpg" },
    { title: "Modern TV Stands", desc: "Sleek entertainment units.", img: "/tv.jpg" }
  ];

  const projectCategories = [
    { name: 'Kitchens', prefix: 'kitchen', count: 7 },
    { name: 'Closets', prefix: 'closet', count: 7 },
    { name: 'Modern Floating TV Stands', prefix: 'tv', count: 7 },
    { name: 'Consoles', prefix: 'console', count: 7 },
    { name: 'Containers', prefix: 'container', count: 7 },
    { name: 'Accents Walls', prefix: 'walls', count: 7 }
  ];

  const currentCategory = projectCategories.find(cat => cat.name === activeFilter) || projectCategories[0];

  // Navigation handler function with scroll to top
  const handleNavigateToContact = () => {
    // Navigate to contact page
    navigate('/contact');
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/landing2.jpg")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Create Your Dream Space</h1>
            <p className="text-xl mb-8 max-w-2xl">Exquisite design and installation, crafted with unparalleled precision.</p>
            <div className="flex gap-4">
              <button 
                onClick={handleNavigateToContact}
                className="px-8 py-3 bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-semibold rounded transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-12 text-[#1c355e]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden border border-gray-100 bg-white">
                <img src={service.img} alt={service.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1c355e]">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-8 text-[#1c355e]">Featured Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                  activeFilter === category.name
                    ? 'bg-[#14ddfd] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#14ddfd]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid - Set to show up to 7 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: currentCategory.count }, (_, i) => i + 1).map((num) => (
              <div 
                key={`${currentCategory.prefix}-${num}`} 
                className="rounded-lg overflow-hidden shadow-md bg-white aspect-square group transition-all duration-300"
              >
                <img 
                  src={`/${currentCategory.prefix}${num}.jpg`} 
                  alt={`${activeFilter} ${num}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  // Hides the card if the image file (1 through 7) is missing in public folder
                  onError={(e) => {
                    e.target.closest('.rounded-lg').classList.add('hidden');
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={handleNavigateToContact}
              className="px-10 py-4 bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-semibold rounded transition-all"
            >
              Request a Custom Design
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;