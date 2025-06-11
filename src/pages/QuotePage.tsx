import React, { useState } from 'react';
import { Calculator, Phone, Mail, MessageSquare } from 'lucide-react';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    productInterests: [] as string[],
    message: '',
    contactPreference: 'email'
  });

  const productCategories = [
    'Bull Bars',
    'Suspension Upgrades',
    'Camping & Touring Equipment',
    'Vehicle Lighting',
    'Roof Racks & Cargo Solutions',
    'Recovery Gear',
    'Performance Accessories',
    'Custom Installation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (product: string) => {
    setFormData(prev => ({
      ...prev,
      productInterests: prev.productInterests.includes(product)
        ? prev.productInterests.filter(p => p !== product)
        : [...prev.productInterests, product]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We\'ll get back to you within 24 hours with a detailed quote.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Calculator className="w-16 h-16 text-roo-orange mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Custom Quote</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Planning a big build or bulk order? Get a personalized quote tailored to your specific needs and vehicle requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                    placeholder="0400 000 000"
                  />
                </div>

                {/* Vehicle Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
                        Make
                      </label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                        placeholder="e.g., Toyota"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
                        Model
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                        placeholder="e.g., Hilux"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-2">
                        Year
                      </label>
                      <input
                        type="text"
                        id="vehicleYear"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                        placeholder="e.g., 2023"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Interests */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Interests</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {productCategories.map((product) => (
                      <label key={product} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.productInterests.includes(product)}
                          onChange={() => handleCheckboxChange(product)}
                          className="w-4 h-4 text-roo-orange border-gray-300 rounded focus:ring-roo-orange"
                        />
                        <span className="ml-2 text-gray-700">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="border-t pt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                    placeholder="Tell us more about your project, specific requirements, installation preferences, or any questions you have..."
                  />
                </div>

                {/* Contact Preference */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Contact Method</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-roo-orange border-gray-300 focus:ring-roo-orange"
                      />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-roo-orange border-gray-300 focus:ring-roo-orange"
                      />
                      <span className="ml-2 text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t pt-6">
                  <button
                    type="submit"
                    className="w-full bg-roo-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-roo-orange-dark transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-roo-orange mr-3" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:1800ROO4WD" className="text-gray-600 hover:text-roo-orange transition-colors">1800 ROO 4WD</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-roo-orange mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:quotes@roooffroad.com.au" className="text-gray-600 hover:text-roo-orange transition-colors">quotes@roooffroad.com.au</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-roo-orange mr-3" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-gray-600">Available Mon-Fri 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Process */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Quote Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-roo-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Submit Request</h4>
                    <p className="text-gray-600 text-sm">Fill out the form with your requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-roo-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Expert Review</h4>
                    <p className="text-gray-600 text-sm">Our team reviews your needs and vehicle specs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-roo-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Quote</h4>
                    <p className="text-gray-600 text-sm">Receive a detailed quote within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-roo-orange text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Discussion</h4>
                    <p className="text-gray-600 text-sm">We'll discuss options and finalize your build</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-roo-orange text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose ROO OFFROAD?</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm">Expert 4WD knowledge</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm">Competitive pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm">Professional installation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm">Quality guaranteed</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm">Australia-wide support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;