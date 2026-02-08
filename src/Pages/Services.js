import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Fitted Kitchens",
      image: "/kitchen.jpg",
      description: "People are passionate about their kitchens. The kitchen is a place where family and friends meet up, for cooking, eating, relaxing and celebrating. ZuriNest Contractors creates timeless, stylish and functional ambience with all the mod cons."
    },
    {
      title: "Custom Closets",
      image: "/closet2.jpg",  // Changed from closets2.jpg to closet2.jpg
      description: "A closet is more than a place to stow your suits and sweaters. It should also be a soothing space where you prep for the day ahead and relax at the end of the night. Our spacious walk-in closets allow you to dress and undress in style."
    },
    {
      title: "Modern Floating TV Stands",
      image: "/tv.jpg",
      description: "Transform your entertainment space with our sleek modern floating TV stands. Designed to maximize floor space while providing ample storage, these contemporary units blend seamlessly with any interior style."
    },
    {
      title: "Consoles",
      image: "/console.jpg",
      description: "Elegant console units that combine form and function. Perfect for entryways, living rooms, or hallways, our custom consoles provide sophisticated storage solutions while serving as stunning focal points in your space."
    },
    {
      title: "Containers",
      image: "/container.jpg",
      description: "Innovative container architecture solutions that push the boundaries of modern design. We transform shipping containers into stylish, functional spaces - from offices to studios, creating sustainable and unique structures."
    },
    {
      title: "Accent Walls",
      image: "/walls.jpg",
      description: "Make a bold statement with our custom accent walls. From textured panels to elegant wood finishes, we create eye-catching feature walls that add depth, character, and sophistication to any room in your home or office."
    }
  ];

  // Function to handle scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Improved error handler with fallback colors
  const handleImageError = (e, serviceTitle) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    
    // Different colors for different services
    const colors = {
      'Fitted Kitchens': 'from-amber-100 to-orange-200',
      'Custom Closets': 'from-purple-100 to-indigo-200',
      'Modern Floating TV Stands': 'from-blue-100 to-cyan-200',
      'Consoles': 'from-green-100 to-emerald-200',
      'Containers': 'from-gray-100 to-slate-200',
      'Accent Walls': 'from-red-100 to-pink-200'
    };
    
    const colorClass = colors[serviceTitle] || 'from-gray-100 to-gray-200';
    
    parent.innerHTML = `
      <div class="w-full h-80 lg:h-96 bg-gradient-to-br ${colorClass} flex flex-col items-center justify-center p-6 rounded-xl lg:rounded-none">
        <div class="text-6xl mb-4">🏠</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">${serviceTitle}</h3>
        <p class="text-gray-600 text-center">Image coming soon</p>
        <p class="text-gray-500 text-sm mt-4">Looking for: ${e.target.src.split('/').pop()}</p>
      </div>
    `;
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1c355e] mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium design and installation with meticulous craftsmanship. 
            Transforming spaces across Zimbabwe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden p-8 lg:p-0 hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 lg:h-96 object-cover rounded-xl lg:rounded-none hover:scale-105 transition-transform duration-500"
                  onError={(e) => handleImageError(e, service.title)}
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 lg:px-12 py-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1c355e] mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    to="/contact"
                    onClick={handleLinkClick}
                    className="px-8 py-3 bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Book A Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-[#1c355e] mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's bring your vision to life with our expert design and installation services.
          </p>
          <Link 
            to="/contact"
            onClick={handleLinkClick}
            className="inline-block px-10 py-4 bg-[#14ddfd] hover:bg-[#0cc4e8] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;