import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [activeFilter, setActiveFilter] = useState('Kitchens');
  const navigate = useNavigate();

  const projectCategories = [
    { name: 'Kitchens', prefix: 'kitchen', imageNames: ['kitchen', 'kitchen1', 'kitchen2'] },
    { name: 'Closets', prefix: 'closet', imageNames: ['closet2', 'closet3', 'closet4'] }, // Changed from closets to closet
    { name: 'Modern Floating TV Stands', prefix: 'tv', imageNames: ['tv', 'tv1', 'tv2'] },
    { name: 'Consoles', prefix: 'console', imageNames: ['console', 'console1', 'console2'] },
    { name: 'Containers', prefix: 'container', imageNames: ['container', 'container1', 'container3'] },
    { name: 'Accents Walls', prefix: 'walls', imageNames: ['walls', 'walls1', 'walls2'] }
  ];

  const currentCategory = projectCategories.find(cat => cat.name === activeFilter) || projectCategories[0];

  // Navigation handler function with scroll to top
  const handleNavigate = (path) => {
    // Navigate to the specified page
    navigate(path);
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
                onClick={() => handleNavigate('/services')}
                className="px-8 py-3 bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-semibold rounded transition-all"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-8 text-[#1c355e]">Featured Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm ${
                  activeFilter === category.name
                    ? 'bg-[#14ddfd] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#14ddfd] hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid - Now shows only 3 images with improved styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentCategory.imageNames.map((imageName, index) => {
              const imageSrc = `/${imageName}.jpg`;
              
              return (
                <div 
                  key={`${currentCategory.prefix}-${index}`} 
                  className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative h-80 w-full overflow-hidden">
                    <img 
                      src={imageSrc} 
                      alt={`${activeFilter} ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        console.error(`Failed to load image: ${imageSrc}`);
                        // Create a fallback colored div
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                            <div class="text-center p-4">
                              <div class="text-5xl mb-2">📷</div>
                              <p class="text-gray-600 font-medium">Image ${index + 1}</p>
                              <p class="text-gray-500 text-sm">${activeFilter}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Image Number Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1c355e] font-bold px-3 py-1 rounded-full text-sm shadow-md">
                    {index + 1}
                  </div>
                  
                  {/* Category Name on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold">{activeFilter}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md">
              <span className="text-gray-600 mr-2">Currently viewing:</span>
              <span className="text-[#1c355e] font-bold text-lg">{activeFilter}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;