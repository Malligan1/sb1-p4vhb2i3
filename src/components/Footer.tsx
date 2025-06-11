import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-roo-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
            <p className="text-white mb-6">Get the latest 4WD tips, product updates, and exclusive deals</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex justify-start">
              <img 
                src="/src/ROO-OFFROAD_resized_800x800_converted.png" 
                alt="ROO OFFROAD" 
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Australia's trusted 4WD accessories specialist. Quality parts, expert advice, professional installation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/roooffroad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-roo-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/roooffroad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-roo-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/roooffroad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-roo-orange transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/roooffroad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-roo-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop by Category</h4>
            <ul className="space-y-3">
              <li><Link to="/shop/bull-bars" className="text-gray-300 hover:text-roo-orange transition-colors">Bull Bars</Link></li>
              <li><Link to="/shop/suspension" className="text-gray-300 hover:text-roo-orange transition-colors">Suspension</Link></li>
              <li><Link to="/shop/camping" className="text-gray-300 hover:text-roo-orange transition-colors">Camping & Touring</Link></li>
              <li><Link to="/shop/roof-racks" className="text-gray-300 hover:text-roo-orange transition-colors">Roof Racks</Link></li>
              <li><Link to="/shop/lighting" className="text-gray-300 hover:text-roo-orange transition-colors">Vehicle Lighting</Link></li>
              <li><Link to="/shop/recovery" className="text-gray-300 hover:text-roo-orange transition-colors">Recovery Gear</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">Find a Store</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">Get In Touch</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">Shipping Info</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-roo-orange transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-roo-orange" />
                <a href="tel:1800ROO4WD" className="text-gray-300 hover:text-roo-orange transition-colors">1800 ROO 4WD</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-roo-orange" />
                <a href="mailto:info@roooffroad.com.au" className="text-gray-300 hover:text-roo-orange transition-colors">info@roooffroad.com.au</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-roo-orange mt-1" />
                <div className="text-gray-300">
                  <p>123 Outback Drive</p>
                  <p>Brisbane, QLD 4000</p>
                  <p>Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ROO OFFROAD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-400 hover:text-roo-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-roo-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-roo-orange text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;