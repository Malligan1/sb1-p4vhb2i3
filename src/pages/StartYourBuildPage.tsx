import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Car, Wrench, Package } from 'lucide-react';

const StartYourBuildPage = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [buildItems, setBuildItems] = useState<any[]>([]);

  const vehicleData = {
    makes: ['Toyota', 'Ford', 'Holden', 'Mitsubishi', 'Nissan', 'Isuzu', 'Mazda'],
    models: {
      'Toyota': ['Hilux', 'LandCruiser', 'Prado', 'RAV4', 'Fortuner'],
      'Ford': ['Ranger', 'Everest', 'Territory'],
      'Holden': ['Colorado', 'Trailblazer'],
      'Mitsubishi': ['Triton', 'Pajero Sport', 'Outlander'],
      'Nissan': ['Navara', 'Patrol', 'X-Trail'],
      'Isuzu': ['D-Max', 'MU-X'],
      'Mazda': ['BT-50', 'CX-5', 'CX-9']
    },
    years: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
    series: {
      'Hilux': ['SR', 'SR5', 'Rugged', 'Rugged X', 'Rogue'],
      'Ranger': ['XL', 'XLT', 'Wildtrak', 'Raptor'],
      'Colorado': ['LS', 'LT', 'LTZ', 'Z71']
    }
  };

  const compatibleProducts = [
    {
      id: 1,
      name: 'ARB Deluxe Bull Bar',
      price: 2299,
      category: 'Protection',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      compatible: true
    },
    {
      id: 2,
      name: 'Kings 2" Lift Kit',
      price: 1899,
      category: 'Suspension',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      compatible: true
    },
    {
      id: 3,
      name: 'TJM Awning 2.5m',
      price: 899,
      category: 'Camping',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      compatible: true
    },
    {
      id: 4,
      name: 'LED Light Bar 32"',
      price: 649,
      category: 'Lighting',
      image: 'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      compatible: true
    }
  ];

  const isVehicleSelected = selectedMake && selectedModel && selectedYear;

  const addToBuild = (product: any) => {
    setBuildItems(prev => [...prev, product]);
  };

  const removeFromBuild = (productId: number) => {
    setBuildItems(prev => prev.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return buildItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Car className="w-16 h-16 text-roo-orange mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Build</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the perfect 4WD accessories for your vehicle. Select your make, model, and year to see compatible products and create your custom build.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vehicle Selector */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Select Your Vehicle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Make */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
              <select
                value={selectedMake}
                onChange={(e) => {
                  setSelectedMake(e.target.value);
                  setSelectedModel('');
                  setSelectedSeries('');
                }}
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
              >
                <option value="">Select Make</option>
                {vehicleData.makes.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Model */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <select
                value={selectedModel}
                onChange={(e) => {
                  setSelectedModel(e.target.value);
                  setSelectedSeries('');
                }}
                disabled={!selectedMake}
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange disabled:bg-gray-100"
              >
                <option value="">Select Model</option>
                {selectedMake && vehicleData.models[selectedMake as keyof typeof vehicleData.models]?.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Year */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
              >
                <option value="">Select Year</option>
                {vehicleData.years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Series */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Series</label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                disabled={!selectedModel}
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange disabled:bg-gray-100"
              >
                <option value="">Select Series</option>
                {selectedModel && vehicleData.series[selectedModel as keyof typeof vehicleData.series]?.map((series) => (
                  <option key={series} value={series}>{series}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Variant */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
              >
                <option value="">Select Variant</option>
                <option value="4x2">4x2</option>
                <option value="4x4">4x4</option>
                <option value="dual-cab">Dual Cab</option>
                <option value="single-cab">Single Cab</option>
              </select>
              <ChevronDown className="absolute right-3 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {isVehicleSelected && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium text-green-800">
                  Vehicle Selected: {selectedYear} {selectedMake} {selectedModel} {selectedSeries} {selectedVariant}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Compatible Products */}
        {isVehicleSelected && (
          <div>
            <div className="text-center mb-8">
              <Package className="w-12 h-12 text-roo-orange mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compatible Products</h2>
              <p className="text-lg text-gray-600">
                These products are confirmed to fit your {selectedYear} {selectedMake} {selectedModel}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {compatibleProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                      Compatible
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-roo-orange transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
                    
                    <div className="flex space-x-2">
                      {buildItems.find(item => item.id === product.id) ? (
                        <button 
                          onClick={() => removeFromBuild(product.id)}
                          className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      ) : (
                        <button 
                          onClick={() => addToBuild(product)}
                          className="flex-1 bg-roo-orange text-white px-4 py-2 rounded-md font-semibold hover:bg-roo-orange-dark transition-colors"
                        >
                          Add to Build
                        </button>
                      )}
                      <Link 
                        to={`/product/${product.id}`}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-center"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Build Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Your Build Summary</h3>
                <Wrench className="w-6 h-6 text-roo-orange" />
              </div>
              
              {buildItems.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Selected Items:</h4>
                  <ul className="space-y-2">
                    {buildItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center text-gray-700">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total Products: {buildItems.length}</span>
                  <span className="text-2xl font-bold text-gray-900">${getTotalPrice().toLocaleString()}</span>
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    to="/quote"
                    className="flex-1 bg-roo-orange text-white px-6 py-3 rounded-md font-semibold hover:bg-roo-orange-dark transition-colors text-center"
                  >
                    Get Quote for Build
                  </Link>
                  <button 
                    onClick={() => alert('Save build feature coming soon!')}
                    className="flex-1 border border-roo-orange text-roo-orange px-6 py-3 rounded-md font-semibold hover:bg-roo-orange hover:text-white transition-colors"
                  >
                    Save Build
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our experts are here to help you build the perfect 4WD setup for your adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1800ROO4WD"
              className="bg-roo-orange text-white px-8 py-3 rounded-md font-semibold hover:bg-roo-orange-dark transition-colors"
            >
              Call 1800 ROO 4WD
            </a>
            <button 
              onClick={() => alert('Live chat feature coming soon!')}
              className="border border-roo-orange text-roo-orange px-8 py-3 rounded-md font-semibold hover:bg-roo-orange hover:text-white transition-colors"
            >
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartYourBuildPage;