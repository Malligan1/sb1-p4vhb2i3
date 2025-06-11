import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop: 16:9 aspect ratio, Mobile: full viewport height */}
      <div className="relative w-full h-screen lg:h-auto lg:aspect-video">
        
        {/* Hero Background Image with Parallax */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/src/car%201.jpg)',
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center pt-20 lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
            <div className="flex items-center h-full">
              
              {/* Left Third - Content Positioning */}
              <div className="w-full lg:w-1/3 text-white space-y-6 lg:space-y-8">
                
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-white font-medium text-base lg:text-lg tracking-wide uppercase">
                    Stay Prepared This Winter
                  </p>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="text-roo-orange">AWNINGS &</span><br />
                    <span className="text-roo-orange">ENSUITES</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-lg leading-relaxed">
                    Looking for a no-fuss setup? We've got you covered!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-8">
                    <Link
                      to="/shop/camping"
                      className="bg-roo-orange text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md font-semibold text-base lg:text-lg hover:bg-roo-orange-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Shop Now
                      <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/start-your-build"
                      className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-md font-semibold text-base lg:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Start Your Build
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Right Two-Thirds - Reserved for car image visibility */}
              <div className="hidden lg:block lg:w-2/3"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Only on desktop */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;