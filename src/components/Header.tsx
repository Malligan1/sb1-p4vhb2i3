import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'Start Your Build', href: '/start-your-build' },
    { name: 'Get a Quote', href: '/quote' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-black shadow-lg fixed top-0 w-full z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 text-sm ${
                  isActive(item.href)
                    ? 'text-roo-orange border-b-2 border-roo-orange pb-1'
                    : 'text-white hover:text-roo-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Centered Logo - Using ROO-OFFROAD_NEON_800x800.png */}
          <Link to="/" className="flex items-center">
            <img 
              src="/src/ROO-OFFROAD_NEON_800x800.png" 
              alt="ROO OFFROAD" 
              className="h-20 w-auto md:h-24 lg:h-28"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex space-x-6">
              {navigation.slice(3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 text-sm ${
                    isActive(item.href)
                      ? 'text-roo-orange border-b-2 border-roo-orange pb-1'
                      : 'text-white hover:text-roo-orange'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-white hover:text-roo-orange transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 text-white hover:text-roo-orange transition-colors">
                <User className="w-4 h-4" />
              </button>
              <button className="p-2 text-white hover:text-roo-orange transition-colors relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 bg-roo-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:text-roo-orange transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-roo-orange bg-roo-orange bg-opacity-10'
                    : 'text-white hover:text-roo-orange hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;