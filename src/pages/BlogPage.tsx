import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: '1',
      title: 'Essential 4WD Accessories for Your First Off-Road Adventure',
      excerpt: 'Getting started with off-roading? Here are the must-have accessories every beginner needs to ensure a safe and enjoyable adventure.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Mike Johnson',
      date: '2025-01-15',
      category: 'Beginner Guides',
      tags: ['accessories', 'beginner', 'safety'],
      slug: 'essential-4wd-accessories-beginners',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'How to Choose the Right Bull Bar for Your Vehicle',
      excerpt: 'A comprehensive guide to selecting the perfect bull bar for protection and style. Learn about materials, compatibility, and installation.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sarah Wilson',
      date: '2025-01-12',
      category: 'Product Guides',
      tags: ['bull-bars', 'protection', 'installation'],
      slug: 'choosing-right-bull-bar',
      readTime: '12 min read'
    },
    {
      id: '3',
      title: 'Winter Camping Setup: Awnings and Shelter Solutions',
      excerpt: 'Stay warm and dry with our expert tips on winter camping gear and setup. Perfect for those chilly outback nights.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Tom Anderson',
      date: '2025-01-10',
      category: 'Camping Tips',
      tags: ['camping', 'winter', 'awnings'],
      slug: 'winter-camping-setup-guide',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'LED Lighting Upgrades: Brighten Your Night Drives',
      excerpt: 'Transform your night driving experience with LED lighting upgrades. Compare options and learn installation tips.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3729469/pexels-photo-3729469.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Jake Rodriguez',
      date: '2025-01-08',
      category: 'Product Guides',
      tags: ['lighting', 'LED', 'night-driving'],
      slug: 'led-lighting-upgrades-guide',
      readTime: '6 min read'
    },
    {
      id: '5',
      title: 'Suspension Basics: Understanding Lift Kits',
      excerpt: 'Everything you need to know about lift kits, from benefits to installation considerations for your 4WD.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Mike Johnson',
      date: '2025-01-05',
      category: 'Technical',
      tags: ['suspension', 'lift-kits', 'performance'],
      slug: 'suspension-basics-lift-kits',
      readTime: '15 min read'
    },
    {
      id: '6',
      title: 'Recovery Gear Essentials: Be Prepared for Anything',
      excerpt: 'Learn about essential recovery gear every 4WD owner should carry and how to use it safely.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/544381/pexels-photo-544381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sarah Wilson',
      date: '2025-01-03',
      category: 'Safety',
      tags: ['recovery', 'safety', 'equipment'],
      slug: 'recovery-gear-essentials',
      readTime: '11 min read'
    }
  ];

  const categories = [
    { name: 'All Posts', slug: 'all', count: blogPosts.length },
    { name: 'Beginner Guides', slug: 'beginner-guides', count: 1 },
    { name: 'Product Guides', slug: 'product-guides', count: 2 },
    { name: 'Camping Tips', slug: 'camping-tips', count: 1 },
    { name: 'Technical', slug: 'technical', count: 1 },
    { name: 'Safety', slug: 'safety', count: 1 }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  const filteredPosts = recentPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">4WD Tips & Guides</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advice, installation guides, and adventure stories to help you get the most out of your 4WD
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-roo-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <span className="text-roo-orange">{featuredPost.readTime}</span>
                </div>
                
                <Link to={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-roo-orange transition-colors">
                    {featuredPost.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-roo-orange font-semibold hover:text-roo-orange-dark transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-roo-orange focus:border-roo-orange"
                >
                  {categories.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {post.readTime}
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-roo-orange transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-roo-orange bg-opacity-10 text-roo-orange px-2 py-1 rounded text-sm font-medium">
                        {post.category}
                      </span>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-roo-orange font-semibold hover:text-roo-orange-dark transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-roo-orange" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`flex justify-between items-center w-full text-left text-sm hover:text-roo-orange transition-colors ${
                        selectedCategory === category.slug ? 'text-roo-orange font-medium' : 'text-gray-600'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-400">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['accessories', 'beginner', 'installation', 'camping', 'safety', 'LED', 'suspension', 'recovery'].map((tag) => (
                  <span key={tag} className="bg-gray-100 hover:bg-roo-orange hover:text-white text-gray-600 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-roo-orange text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-4 text-sm">
                Get the latest 4WD tips and product updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded text-gray-800 focus:outline-none"
                />
                <button className="w-full bg-white text-roo-orange px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;