import React, { useState } from 'react';
import PremiumBlogCarousel from '../components/PremiumBlogCarousel';
import {
  FadeInPro,
  HoverCard3D,
  StaggerReveal,
  MorphingBackground,
  TextReveal
} from '../components/ProfessionalAnimations';
import '../styles/advanced-animations.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Cruise Shipping', 'Construction', 'Export/Import', 'Design', 'Security', 'AI & ML'];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Cruise Shipping",
      excerpt: "Discover how the cruise industry is embracing eco-friendly technologies and sustainable practices for a greener future of maritime travel.",
      author: "Maritime Experts",
      date: "September 10, 2024",
      category: "Cruise Shipping",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1589397055480-4d8d21587b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Innovative Construction Technologies Shaping 2024",
      excerpt: "Explore the latest advancements in construction technology, from 3D printing to AI-driven project management solutions.",
      author: "Construction Digest",
      date: "September 8, 2024",
      category: "Construction",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Global Trade Trends: Navigating Export/Import in 2024",
      excerpt: "A comprehensive guide to understanding the evolving landscape of international trade and logistics in the current economic climate.",
      author: "Trade Insights",
      date: "September 5, 2024",
      category: "Export/Import",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "AI and IoT Integration in Industrial Operations",
      excerpt: "How artificial intelligence and Internet of Things are revolutionizing industrial operations and supply chain management.",
      author: "Tech Innovations",
      date: "January 8, 2024",
      category: "Design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Businesses",
      excerpt: "Essential cybersecurity measures that every business should implement to protect their data and maintain customer trust.",
      author: "Suraj Singh",
      date: "January 5, 2024",
      category: "Security",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is revolutionizing the software development process and what it means for developers and businesses.",
      author: "Shubham Kumar",
      date: "January 3, 2024",
      category: "AI & ML",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Blog Carousel */}
      <PremiumBlogCarousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Featured Article */}
        <FadeInPro className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/90 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{blogPosts[0].author}</p>
                      <p className="text-white/70 text-sm">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </FadeInPro>

        {/* Categories Filter */}
        <div className="text-center mb-16">
          <FadeInPro>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Explore by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    category === activeCategory 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInPro>
        </div>

        {/* Blog Posts Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.slice(1).map((post) => (
            <HoverCard3D key={post.id}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-bold text-white">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <button className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors group-hover:scale-110 duration-200">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </HoverCard3D>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
};

export default Blog;
