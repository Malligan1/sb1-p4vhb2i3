import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'ARB', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=ARB' },
    { name: 'Ironman 4x4', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=IRONMAN' },
    { name: 'TJM', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=TJM' },
    { name: 'Kings', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=KINGS' },
    { name: 'Opposite Lock', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=OL' },
    { name: 'Safari', logo: 'https://via.placeholder.com/150x60/E04B1A/FFFFFF?text=SAFARI' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">
            We partner with Australia's most trusted 4WD brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;