import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section with Title and Description */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Title - About ZuriNest */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c355e] text-center mb-6">
            About ZuriNest
          </h1>
          
          {/* Small Text Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#1c355e] text-center leading-relaxed">
              We're a highly collaborative and supportive team, coming together on every project to ensure our clients get the very best result.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Mission Card */}
            <div className="bg-white p-8 rounded-xl border-l-8 border-[#1c355e] shadow-sm hover:shadow-md transition-shadow min-h-[280px] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-4">
                Our Mission
              </h2>
              <p className="text-[#1c355e] text-base md:text-lg font-medium leading-relaxed">
                To craft exceptional products that maximize value for our clients, while championing sustainable business practices that protect our environment
              </p>
            </div>

            {/* Our Values Card */}
            <div className="bg-white p-8 rounded-xl border-l-8 border-[#1c355e] shadow-sm hover:shadow-md transition-shadow min-h-[280px] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-4">
                Our Values
              </h2>
              <p className="text-[#1c355e] text-base md:text-lg font-medium leading-relaxed">
                We are dedicated to going the extra mile for our clients, overcoming any challenge that arises. Our goal is to consistently deliver premium-quality work through all our services, day after day.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;