import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';

const ShopPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'ARB Deluxe Bull Bar - Toyota Hilux',
      price: 2299,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'bull-bars',
      brand: 'ARB',
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Kings 2" Lift Kit - Ford Ranger',
      price: 1899,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'suspension',
      brand: 'Kings',
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'TJM Awning 2.5m x 2.5m',
      price: 899,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'camping',
      brand: 'TJM',
      inStock: true,
      isNew: false,
      isSale: false
    },
    {
      id: 4,
      name: 'Lightforce LED Light Bar 32"',
      price: 649,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'lighting',
      brand: 'Lightforce',
      inStock: false,
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Rhino Rack Pioneer Platform 1528x1236',
      price: 1299,
      rating: 4.5,
      reviews: 43,
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'roof-racks',
      brand: 'Rhino Rack',
      inStock: true,
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: 'Ironman Winch 9500lb',
      price: 1599,
      rating: 4.4,
      reviews: 78,
      image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'recovery',
      brand: 'Ironman',
      inStock: true,
      isNew: false,
      isSale: false
    }
  ];

  const categories = [
    { name: 'All Products', slug: '', count: products.length },
    { name: 'Bull Bars', slug: 'bull-bars', count: 1 },
    { name: 'Suspension', slug: 'suspension', count: 1 },
    { name: 'Camping & Touring', slug: 'camping', count: 1 },
    { name: 'Vehicle Lighting', slug: 'lighting', count: 1 },
    { name: 'Roof Racks', slug: 'roof-racks', count: 1 },
    { name: 'Recovery Gear', slug: 'recovery', count: 1 }
  ];

  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  const ProductCard = ({ product, isListView = false }) => (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${isListView ? 'flex' : ''}`}>
      <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : ''}`}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover hover:scale-105 transition-transform duration-300 ${isListView ? 'h-32' : 'h-48'}`}
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">NEW</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">SALE</span>
          )}
        </div>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1">
        <div className="mb-2">
          <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-roo-orange transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <button
            className="bg-roo-orange text-white p-2 rounded-md hover:bg-roo-orange-dark transition-colors disabled:bg-gray-400"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {category ? categories.find(cat => cat.slug === category)?.name : 'All Products'}
          </h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} products found
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        to={cat.slug ? `/shop/${cat.slug}` : '/shop'}
                        className={`flex justify-between items-center text-sm hover:text-roo-orange transition-colors ${
                          category === cat.slug || (!category && !cat.slug) 
                            ? 'text-roo-orange font-medium' 
                            : 'text-gray-600'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-gray-400">({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-roo-orange"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-roo-orange text-white' : 'text-gray-600 hover:text-roo-orange'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-roo-orange text-white' : 'text-gray-600 hover:text-roo-orange'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isListView={viewMode === 'list'} 
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-roo-orange text-white rounded-md">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;