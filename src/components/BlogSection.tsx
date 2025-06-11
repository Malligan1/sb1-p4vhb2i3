import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Essential 4WD Accessories for Your First Off-Road Adventure',
      excerpt: 'Getting started with off-roading? Here are the must-have accessories every beginner needs.',
      image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Mike Johnson',
      date: '2025-01-15',
      slug: 'essential-4wd-accessories-beginners'
    },
    {
      id: '2',
      title: 'How to Choose the Right Bull Bar for Your Vehicle',
      excerpt: 'A comprehensive guide to selecting the perfect bull bar for protection and style.',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Sarah Wilson',
      date: '2025-01-12',
      slug: 'choosing-right-bull-bar'
    },
    {
      id: '3',
      title: 'Winter Camping Setup: Awnings and Shelter Solutions',
      excerpt: 'Stay warm and dry with our expert tips on winter camping gear and setup.',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      author: 'Tom Anderson',
      date: '2025-01-10',
      slug: 'winter-camping-setup-guide'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tips and Inspiration to Get You Moving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, installation guides, and adventure stories from the 4WD community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link to={`/blog/${post.slug}`}>
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
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
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-roo-orange font-semibold hover:text-roo-orange-dark transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center bg-roo-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-roo-orange-dark transition-colors"
          >
            Check Out Our Blog
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;