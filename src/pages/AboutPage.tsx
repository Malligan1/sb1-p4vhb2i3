import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Wrench, MapPin, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Years in Business', value: '15+', icon: Clock },
    { label: 'Happy Customers', value: '50K+', icon: Users },
    { label: 'Products Installed', value: '100K+', icon: Wrench },
    { label: 'Locations', value: '25+', icon: MapPin },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We only stock products from trusted brands that meet our rigorous quality standards.'
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Our team of 4WD specialists provides expert advice and professional installation services.'
    },
    {
      icon: Award,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure you get the right solution.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ROO OFFROAD</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Australia's trusted partner for 4WD adventures since 2009
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-roo-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ROO OFFROAD was born from a passion for Australian adventure and a deep understanding 
                  of what it takes to explore this great continent safely and confidently. Founded in 2009 
                  by a group of 4WD enthusiasts, we started with a simple mission: provide Australians 
                  with the highest quality offroad accessories and expert advice to enhance their adventures.
                </p>
                <p>
                  What began as a small operation has grown into one of Australia's most trusted names 
                  in 4WD accessories. We've built our reputation on three core principles: quality products, 
                  expert knowledge, and exceptional customer service.
                </p>
                <p>
                  Today, we serve customers across Australia through our network of stores and online 
                  platform, helping thousands of adventurers prepare their vehicles for whatever the 
                  Australian landscape can throw at them.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Our workshop"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Team at work"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Customer adventure"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/544381/pexels-photo-544381.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="4WD in action"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver the best possible experience for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <value.icon className="w-16 h-16 text-roo-orange mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-roo-orange rounded-2xl text-white p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To empower every Australian's adventure by providing the highest quality 4WD accessories, 
                expert knowledge, and exceptional service that enables safe, confident, and memorable 
                exploration of our incredible continent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Passionate 4WD enthusiasts with decades of combined experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Mike Thompson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Mike Thompson</h3>
                <p className="text-roo-orange font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  20+ years in the 4WD industry. Mike's passion for offroading started in his teens 
                  and led him to establish ROO OFFROAD to share that passion with fellow adventurers.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sarah Wilson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sarah Wilson</h3>
                <p className="text-roo-orange font-medium mb-2">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Former automotive engineer with expertise in vehicle modification and safety. 
                  Sarah ensures all our products meet the highest quality and safety standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Jake Rodriguez"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Jake Rodriguez</h3>
                <p className="text-roo-orange font-medium mb-2">Technical Director</p>
                <p className="text-gray-600 text-sm">
                  Master technician with 15+ years of installation experience. Jake leads our 
                  technical team and ensures every installation meets our exacting standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ROO OFFROAD for their 4WD adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-roo-orange text-white px-8 py-3 rounded-md font-semibold hover:bg-roo-orange-dark transition-colors">
              Shop Now
            </Link>
            <Link to="/contact" className="border border-roo-orange text-roo-orange px-8 py-3 rounded-md font-semibold hover:bg-roo-orange hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;