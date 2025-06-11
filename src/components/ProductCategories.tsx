import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    {
      name: 'Bull Bars',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/bull-bars'
    },
    {
      name: 'Suspension',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/suspension'
    },
    {
      name: 'Camping &',
      subtitle: 'Touring',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/camping'
    },
    {
      name: 'Vehicle Lighting',
      image: 'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/lighting'
    },
    {
      name: 'Roof Racks &',
      subtitle: 'Cross Bars',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/roof-racks'
    },
    {
      name: 'Recovery Gear',
      image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/shop/recovery'
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Tips Section */}
          <div className="space-y-8 relative">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              TIPS AND<br />
              INSPIRATION TO<br />
              GET YOU MOVING
            </h2>
            
            <Link
              to="/blog"
              className="inline-block bg-roo-orange text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-roo-orange-dark transition-colors uppercase tracking-wide"
            >
              CHECK OUT OUR BLOG
            </Link>
            
            {/* Small logo in corner - doubled in size */}
            <div className="absolute bottom-0 right-0">
              <img 
                src="/src/ROO-OFFROAD_resized_800x800_converted.png" 
                alt="ROO OFFROAD" 
                className="w-48 h-auto opacity-60"
              />
            </div>
          </div>
          
          {/* Right Side - Product Categories Grid */}
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                
                {/* Category text */}
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                      {category.name}
                      {category.subtitle && (
                        <>
                          <br />
                          {category.subtitle}
                        </>
                      )}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;