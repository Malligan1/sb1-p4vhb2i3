import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Heart, Tag } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would be fetched based on the slug
  const post = {
    id: '1',
    title: 'Essential 4WD Accessories for Your First Off-Road Adventure',
    content: `
      <p>Starting your off-road journey can be both exciting and overwhelming. With so many accessories available, it's important to know which ones are truly essential for a safe and enjoyable adventure.</p>
      
      <h2>1. Recovery Gear - Your Safety Net</h2>
      <p>Recovery gear is absolutely essential for any off-road adventure. When you're exploring remote areas, getting stuck is not a matter of if, but when. Having the right recovery equipment can mean the difference between a minor inconvenience and a dangerous situation.</p>
      
      <h3>Essential Recovery Items:</h3>
      <ul>
        <li><strong>Recovery Tracks:</strong> Lightweight and versatile, perfect for sand and mud</li>
        <li><strong>Snatch Strap:</strong> For vehicle-to-vehicle recovery</li>
        <li><strong>Shackles:</strong> High-quality rated shackles for secure connections</li>
        <li><strong>Shovel:</strong> For digging out wheels and creating recovery points</li>
      </ul>
      
      <h2>2. Communication Equipment</h2>
      <p>Staying connected is crucial when venturing into remote areas. Mobile phone coverage can be spotty or non-existent, making alternative communication methods essential.</p>
      
      <h3>Communication Options:</h3>
      <ul>
        <li><strong>UHF Radio:</strong> Essential for convoy communication and emergency contact</li>
        <li><strong>EPIRB/PLB:</strong> Emergency beacon for life-threatening situations</li>
        <li><strong>Satellite Communicator:</strong> Two-way messaging when out of mobile range</li>
      </ul>
      
      <h2>3. Navigation and Safety</h2>
      <p>Getting lost in the Australian outback can be dangerous. Proper navigation equipment ensures you can find your way and others can find you if needed.</p>
      
      <h3>Navigation Essentials:</h3>
      <ul>
        <li><strong>GPS Unit:</strong> Dedicated GPS with offline maps</li>
        <li><strong>Paper Maps:</strong> Backup navigation that doesn't rely on batteries</li>
        <li><strong>Compass:</strong> Basic navigation tool that never fails</li>
        <li><strong>First Aid Kit:</strong> Comprehensive kit suitable for remote area injuries</li>
      </ul>
      
      <h2>4. Vehicle Protection</h2>
      <p>Protecting your vehicle from damage is important both for safety and to avoid costly repairs. Basic protection accessories can save you thousands in the long run.</p>
      
      <h3>Protection Accessories:</h3>
      <ul>
        <li><strong>Bash Plates:</strong> Protect your engine, transmission, and fuel tank</li>
        <li><strong>Rock Sliders:</strong> Protect your vehicle's sides from rock damage</li>
        <li><strong>Mud Flaps:</strong> Reduce stone chips and protect following vehicles</li>
      </ul>
      
      <h2>5. Camping and Comfort</h2>
      <p>If you're planning overnight trips, basic camping equipment will make your adventure much more comfortable and enjoyable.</p>
      
      <h3>Camping Basics:</h3>
      <ul>
        <li><strong>Swag or Tent:</strong> Quality shelter appropriate for the conditions</li>
        <li><strong>Sleeping System:</strong> Sleeping bag and mat rated for expected temperatures</li>
        <li><strong>Cooking Equipment:</strong> Portable stove and basic cooking utensils</li>
        <li><strong>Water Storage:</strong> Adequate water storage for drinking and cooking</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Remember, you don't need to buy everything at once. Start with the essentials - recovery gear, communication, and basic protection - then build your kit over time as you gain experience and identify your specific needs.</p>
      
      <p>Most importantly, learn how to use your equipment before you need it. Practice recovery techniques in a safe environment and familiarize yourself with all your gear.</p>
      
      <h2>Expert Tip</h2>
      <p>Consider taking a 4WD training course. No amount of equipment can replace knowledge and skill. Understanding your vehicle's capabilities and limitations, along with proper driving techniques, is the most valuable accessory you can have.</p>
    `,
    excerpt: 'Getting started with off-roading? Here are the must-have accessories every beginner needs to ensure a safe and enjoyable adventure.',
    image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Mike Johnson',
    date: '2025-01-15',
    category: 'Beginner Guides',
    tags: ['accessories', 'beginner', 'safety', 'recovery', 'camping'],
    readTime: '8 min read'
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'How to Choose the Right Bull Bar for Your Vehicle',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      slug: 'choosing-right-bull-bar'
    },
    {
      id: '3',
      title: 'Winter Camping Setup: Awnings and Shelter Solutions',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      slug: 'winter-camping-setup-guide'
    },
    {
      id: '4',
      title: 'Recovery Gear Essentials: Be Prepared for Anything',
      image: 'https://images.pexels.com/photos/544381/pexels-photo-544381.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      slug: 'recovery-gear-essentials'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link
            to="/blog"
            className="inline-flex items-center bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-md font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 -mt-32 relative z-10 mb-8">
          <div className="mb-6">
            <span className="bg-roo-orange bg-opacity-10 text-roo-orange px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <span className="text-roo-orange font-medium">{post.readTime}</span>
            </div>
          </div>
          
          {/* Social Actions */}
          <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
            <button className="flex items-center text-gray-600 hover:text-roo-orange transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              <span>Like</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-roo-orange transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}
          />
          
          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="w-5 h-5 text-gray-400 mr-2" />
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 hover:bg-roo-orange hover:text-white text-gray-600 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">
                Mike is a 4WD enthusiast with over 15 years of off-road experience across Australia. 
                He specializes in vehicle preparation and safety equipment, helping newcomers get started 
                in the world of 4WD adventures.
              </p>
              <div className="flex space-x-4">
                <button className="text-roo-orange hover:text-roo-orange-dark font-medium">
                  View all posts by {post.author}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-roo-orange transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;