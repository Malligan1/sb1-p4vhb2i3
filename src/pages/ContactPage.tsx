import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const locations = [
    {
      name: 'Brisbane Headquarters',
      address: '123 Outback Drive, Brisbane, QLD 4000',
      phone: '(07) 3000 0000',
      email: 'brisbane@roooffroad.com.au',
      hours: 'Mon-Fri: 8am-6pm, Sat: 8am-4pm'
    },
    {
      name: 'Sydney Store',
      address: '456 Adventure Street, Sydney, NSW 2000',
      phone: '(02) 9000 0000',
      email: 'sydney@roooffroad.com.au',
      hours: 'Mon-Fri: 8am-6pm, Sat: 8am-4pm'
    },
    {
      name: 'Melbourne Store',
      address: '789 Expedition Avenue, Melbourne, VIC 3000',
      phone: '(03) 8000 0000',
      email: 'melbourne@roooffroad.com.au',
      hours: 'Mon-Fri: 8am-6pm, Sat: 8am-4pm'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-roo-orange mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our products or need expert advice? We're here to help you prepare for your next adventure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="installation">Installation Services</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-roo-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-roo-orange-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              
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
                    <a href="mailto:info@roooffroad.com.au" className="text-gray-600 hover:text-roo-orange transition-colors">info@roooffroad.com.au</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-roo-orange mr-3" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8am-6pm</p>
                    <p className="text-gray-600">Sat: 8am-4pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <button 
                  onClick={() => alert('Live chat feature coming soon!')}
                  className="w-full bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
                >
                  Start Live Chat
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-roo-orange text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
              <p className="mb-4">
                Stuck on the road? Our emergency support line is available 24/7 for urgent assistance.
              </p>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:1800HELPROO" className="font-bold hover:underline">1800 HELP ROO</a>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-4">
                Find quick answers to common questions about our products and services.
              </p>
              <button 
                onClick={() => alert('FAQ section coming soon!')}
                className="text-roo-orange font-semibold hover:text-roo-orange-dark transition-colors"
              >
                View FAQ →
              </button>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-roo-orange mr-3 mt-1" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-roo-orange mr-3" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-roo-orange transition-colors">{location.phone}</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-roo-orange mr-3" />
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-roo-orange transition-colors">{location.email}</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-roo-orange mr-3" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <button 
                    onClick={() => alert('Directions feature coming soon!')}
                    className="w-full border border-roo-orange text-roo-orange px-4 py-2 rounded-md font-semibold hover:bg-roo-orange hover:text-white transition-colors"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Google Maps integration would be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;