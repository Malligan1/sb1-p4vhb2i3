import React from 'react';
import { Instagram } from 'lucide-react';

const SocialGallery = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/544381/pexels-photo-544381.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Instagram className="w-8 h-8 text-roo-orange mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Follow Our Journey</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            See our products in action and get inspired by the 4WD community
          </p>
          <a
            href="https://instagram.com/roooffroad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @roooffroad
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/roooffroad"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;