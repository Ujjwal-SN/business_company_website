import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInPro, HoverCard3D, CounterAnimation } from './ProfessionalAnimations';

const blogData = [
  {
    id: 1,
    title: "AI Revolution",
    subtitle: "Transforming Business Operations",
    description: "Discover how artificial intelligence is revolutionizing the way businesses operate, from automated customer service to predictive analytics. Learn about the latest AI trends and how your business can leverage this powerful technology to stay competitive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    readTime: 5,
    date: "Dec 15, 2023",
    author: "Dr. Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616c96b87d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    tags: ["AI", "Machine Learning", "Business Innovation", "Automation"],
    stats: [
      { number: 87, suffix: "%", label: "Efficiency Gain" },
      { number: 45, suffix: "%", label: "Cost Reduction" },
      { number: 24, suffix: "/7", label: "Availability" }
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    icon: "🤖",
    featured: true
  },
  {
    id: 2,
    title: "Cloud Migration",
    subtitle: "Scaling Your Digital Infrastructure",
    description: "Navigate the complexities of cloud migration with our comprehensive guide. From planning and strategy to execution and optimization, learn how to successfully transition your business to the cloud while minimizing risks and maximizing benefits.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Cloud Computing",
    readTime: 8,
    date: "Dec 12, 2023",
    author: "Michael Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    tags: ["Cloud", "AWS", "Migration", "Scalability"],
    stats: [
      { number: 60, suffix: "%", label: "Cost Savings" },
      { number: 99, suffix: "%", label: "Uptime" },
      { number: 3, suffix: "x", label: "Faster Deployment" }
    ],
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    icon: "☁️",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Essentials",
    subtitle: "Protecting Your Digital Assets",
    description: "In today's threat landscape, cybersecurity is not optional. Learn about the latest security frameworks, best practices, and emerging threats. Our comprehensive guide covers everything from basic security hygiene to advanced threat detection.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Security",
    readTime: 6,
    date: "Dec 10, 2023",
    author: "Emily Thompson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    tags: ["Security", "Compliance", "Risk Management", "Protection"],
    stats: [
      { number: 0, suffix: "", label: "Security Breaches" },
      { number: 100, suffix: "%", label: "Compliance" },
      { number: 24, suffix: "/7", label: "Monitoring" }
    ],
    gradientFrom: "from-green-600",
    gradientTo: "to-teal-600",
    icon: "🛡️",
    featured: false
  },
  {
    id: 4,
    title: "Digital Transformation",
    subtitle: "Future-Ready Business Strategies",
    description: "Digital transformation is more than just technology adoption. Explore strategies for cultural change, process optimization, and technology integration that drive real business value. Learn from real-world case studies and success stories.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Strategy",
    readTime: 10,
    date: "Dec 8, 2023",
    author: "David Kim",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    tags: ["Digital Transformation", "Strategy", "Innovation", "Growth"],
    stats: [
      { number: 78, suffix: "%", label: "Success Rate" },
      { number: 35, suffix: "%", label: "ROI Increase" },
      { number: 12, suffix: "", label: "Month Timeline" }
    ],
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    icon: "🚀",
    featured: false
  }
];

const PremiumBlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoPlayInterval = 8000; // 8 seconds per slide

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % blogData.length);
      setProgress(0);
    }, autoPlayInterval);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / (autoPlayInterval / 50));
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const currentData = blogData[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInPro>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              📰 Latest Insights
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 drop-shadow-sm">
              Knowledge Hub
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto font-medium">
              Stay ahead with our latest insights on technology, business strategy, and digital transformation trends.
            </p>
          </FadeInPro>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mb-16"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Content Side */}
                <div className="order-1">
                  <FadeInPro delay={0.2}>
                    {/* Category Badge */}
                    <div className="flex items-center mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} text-white mr-4`}>
                        {currentData.category}
                      </span>
                      {currentData.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    {/* Title Section */}
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} rounded-2xl flex items-center justify-center text-2xl shadow-lg mr-4`}>
                          {currentData.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {currentData.title}
                          </h3>
                          <p className={`text-lg font-medium bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} bg-clip-text text-transparent`}>
                            {currentData.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {currentData.description}
                    </p>

                    {/* Author & Meta Info */}
                    <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center">
                        <img 
                          src={currentData.authorImage} 
                          alt={currentData.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{currentData.author}</h4>
                          <p className="text-sm text-gray-600">{currentData.date} • {currentData.readTime} min read</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        1.2k views
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Topics Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentData.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {currentData.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                        >
                          <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} bg-clip-text text-transparent mb-2`}>
                            <CounterAnimation end={stat.number} suffix={stat.suffix} />
                          </div>
                          <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`flex-1 px-6 py-3 bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                        Read Full Article
                      </button>
                      <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                        Share Article
                      </button>
                    </div>
                  </FadeInPro>
                </div>

                {/* Image Side */}
                <div className="order-2">
                  <HoverCard3D>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-80 lg:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Floating Content Card */}
                      <div className="absolute top-6 left-6 right-6">
                        <div className={`bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} bg-opacity-90 backdrop-blur-sm rounded-xl p-4 text-white`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl mr-3">
                                {currentData.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-sm">{currentData.category}</h4>
                                <p className="text-white/80 text-xs">{currentData.readTime} min read</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white/80 text-xs">{currentData.date}</p>
                              <p className="text-white font-medium text-sm">Latest</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-white">
                          <h4 className="font-bold text-lg mb-2">{currentData.title}</h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {currentData.description.substring(0, 120)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </HoverCard3D>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            {/* Slide Indicators */}
            <div className="flex space-x-4">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-3 rounded-full transition-all duration-300 mb-2 ${
                      index === currentSlide ? 'bg-blue-500' : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}>
                      {index === currentSlide && (
                        <motion.div
                          className="h-full bg-blue-300 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: "linear" }}
                        />
                      )}
                    </div>
                    <span className={`text-xs font-medium transition-colors ${
                      index === currentSlide ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {blogData[index].category}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-4 bg-white shadow-lg border border-gray-200 rounded-full hover:shadow-xl transition-all duration-300"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zM11 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumBlogCarousel;
