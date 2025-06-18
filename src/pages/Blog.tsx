import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      content: 'Full article content would go here...',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'AI', 'PWA', 'Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'A comprehensive comparison of native and cross-platform development approaches for mobile applications.',
      content: 'Full article content would go here...',
      author: 'Mike Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Flutter', 'iOS', 'Android'],
      featured: false
    },
    {
      id: 3,
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Learn the essential SEO strategies that will help your website rank higher in search engine results.',
      content: 'Full article content would go here...',
      author: 'Emily Davis',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Google', 'Keywords', 'Analytics'],
      featured: true
    },
    {
      id: 4,
      title: 'Design Systems: Building Consistent User Experiences',
      excerpt: 'How to create and maintain design systems that ensure consistency across all your digital products.',
      content: 'Full article content would go here...',
      author: 'Alex Johnson',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Design Systems', 'UI/UX', 'Figma', 'Components'],
      featured: false
    },
    {
      id: 5,
      title: 'Career Tips for Aspiring Developers',
      excerpt: 'Essential advice for those looking to break into the tech industry and build a successful development career.',
      content: 'Full article content would go here...',
      author: 'Sarah Chen',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Career',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Career', 'Learning', 'Skills', 'Job Search'],
      featured: false
    },
    {
      id: 6,
      title: 'The Importance of Website Performance Optimization',
      excerpt: 'Why website speed matters and practical techniques to improve your site\'s performance.',
      content: 'Full article content would go here...',
      author: 'Mike Rodriguez',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Performance', 'Speed', 'Optimization', 'Core Web Vitals'],
      featured: false
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'Design',
    'SEO',
    'Career',
    'Performance'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Insights, tutorials, and industry trends from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and insightful content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">Author</p>
                      </div>
                    </div>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h3>
                        
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{post.author}</span>
                          </div>
                          
                          <a
                            href={`/blog/${post.id}`}
                            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <span>{category}</span>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {category === 'All' ? blogPosts.length : blogPosts.filter(p => p.category === category).length}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors line-clamp-2">
                            <a href={`/blog/${post.id}`}>{post.title}</a>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-purple-100 mb-4">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;