import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: 'ARB Deluxe Bull Bar - Toyota Hilux',
    price: 2299,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/544381/pexels-photo-544381.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    brand: 'ARB',
    sku: 'ARB-3423050',
    inStock: true,
    stockCount: 12,
    category: 'Bull Bars',
    description: `The ARB Deluxe Bull Bar is engineered to provide maximum protection for your Toyota Hilux while maintaining the vehicle's approach angle and original styling. Constructed from high-strength steel and finished with a durable powder coat, this bull bar is built to withstand the toughest Australian conditions.`,
    features: [
      'High-strength steel construction',
      'Powder-coated finish for durability',
      'Maintains approach angle',
      'Fog light provision',
      'Antenna bracket included',
      'ADR approved',
      'Compatible with airbag system'
    ],
    specifications: {
      'Material': 'High-strength steel',
      'Finish': 'Powder coat',
      'Weight': '35kg',
      'Compatibility': 'Toyota Hilux 2015-2023',
      'Warranty': '3 years',
      'ADR Approved': 'Yes'
    },
    compatibleVehicles: [
      'Toyota Hilux 2015-2023',
      'Toyota Hilux Revo 2015-2020',
      'Toyota Hilux GUN126R 2015-2023'
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'ARB LED Light Bar 32"',
      price: 649,
      image: 'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'ARB Recovery Tracks',
      price: 299,
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-roo-orange">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-roo-orange">Shop</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/shop/bull-bars" className="text-gray-500 hover:text-roo-orange">{product.category}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              
              {/* Image Navigation */}
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-roo-orange' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
              <p className="text-sm text-gray-600 mt-1">SKU: {product.sku}</p>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-red-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>
            
            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center text-green-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-medium">In Stock ({product.stockCount} available)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
              
              <button
                className="flex-1 bg-roo-orange text-white px-6 py-3 rounded-md font-semibold hover:bg-roo-orange-dark transition-colors flex items-center justify-center disabled:bg-gray-400"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <button className="flex items-center text-gray-600 hover:text-roo-orange transition-colors">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </button>
              <button className="flex items-center text-gray-600 hover:text-roo-orange transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
            
            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-roo-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 text-roo-orange border-b-2 border-roo-orange font-medium">
                  Specifications
                </button>
                <button className="py-4 text-gray-500 hover:text-gray-700 font-medium">
                  Compatibility
                </button>
                <button className="py-4 text-gray-500 hover:text-gray-700 font-medium">
                  Shipping & Returns
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2">
                    <dt className="font-medium text-gray-900">{key}</dt>
                    <dd className="text-gray-600">{value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <Truck className="w-8 h-8 text-roo-orange mr-4" />
            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-sm text-gray-600">On orders over $99</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <Shield className="w-8 h-8 text-roo-orange mr-4" />
            <div>
              <h4 className="font-semibold">3 Year Warranty</h4>
              <p className="text-sm text-gray-600">Manufacturer warranty</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <RefreshCw className="w-8 h-8 text-roo-orange mr-4" />
            <div>
              <h4 className="font-semibold">Easy Returns</h4>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <h3 className="font-semibold text-gray-900 hover:text-roo-orange transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <p className="text-lg font-bold text-gray-900 mt-2">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;