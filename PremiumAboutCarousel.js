import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInPro, HoverCard3D, CounterAnimation } from './ProfessionalAnimations';

const aboutData = [
  {
    id: 1,
    title: "Our Story",
    subtitle: "8+ Years of Digital Shipping Services",
  description: "Founded in 2018, Samudra Axis has been driving excellence in cruise shipping, construction, and global trade. Our journey began with a clear vision: to connect world-class services with sustainable growth and international success.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { number: 500, suffix: "+", label: "Projects Completed" },
      { number: 50, suffix: "+", label: "Countries Served" },
      { number: 90, suffix: "%", label: "Client Satisfaction" }
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    icon: "🚀",
    highlights: ["Industry Leaders", "Global Reach", "Innovation Focus", "Client-Centric"]
  },
  {
    id: 2,
    title: "Our Team",
    subtitle: "Experts Who Drive Success",
    description: "Our diverse team of 75+ professionals brings together decades of expertise in cruise shipping, construction, and global trade. From skilled engineers to strategic planners, every team member contributes to our commitment to quality and growth.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { number: 20, suffix: "+", label: "Team Members" },
      { number: 15, suffix: "+", label: "Certifications" },
      { number: 24, suffix: "/7", label: "Support Available" }
    ],
    gradientFrom: "from-green-600",
    gradientTo: "to-teal-600",
    icon: "👥",
    highlights: ["Senior Experts", "Certified Professionals", "Continuous Learning", "24/7 Support"]
  },
  {
    id: 3,
    title: "Our Values",
    subtitle: "Principles That Guide Us",
    description: "We believe in transparency, innovation, and putting our clients first. These core values shape every decision we make and every solution we deliver. Our commitment to excellence drives us to continuously evolve and adapt to emerging technologies.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { number: 100, suffix: "%", label: "Transparency" },
      { number: 99, suffix: "%", label: "Quality Assurance" },
      { number: 0, suffix: "", label: "Compromise" }
    ],
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    icon: "💎",
    highlights: ["Integrity First", "Innovation Driven", "Quality Focused", "Client Success"]
  },
  {
    id: 4,
    title: "Our Future",
    subtitle: "Building Tomorrow, Today",
    description: "As we look to the future, we are investing in sustainable practices, smart logistics, and advanced infrastructure. Our focus on innovation ensures we stay ahead, delivering next-generation solutions in cruise shipping, construction, and global trade.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: [
      { number: 3, suffix: "", label: "R&D Labs" },
      { number: 12, suffix: "", label: "Patents Pending" },
      { number: 5, suffix: "", label: "AI Solutions" }
    ],
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    icon: "🔮",
    highlights: ["AI Integration", "Blockchain Ready", "Future Technologies", "Innovation Labs"]
  }
];

const PremiumAboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoPlayInterval = 7000; // 7 seconds per slide

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % aboutData.length);
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

  const currentData = aboutData[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInPro>
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              🏢 About Samudra Axis
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 drop-shadow-sm">
              Innovating the Digital Future
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto font-medium">
              Discover the passion, expertise, and vision that drives our mission to transform businesses worldwide.
            </p>
          </FadeInPro>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <div className="order-2 lg:order-1">
                  <HoverCard3D>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-80 lg:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={`bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} bg-opacity-90 backdrop-blur-sm rounded-xl p-6 text-white`}>
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mr-4">
                              {currentData.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{currentData.title}</h4>
                              <p className="text-white/80 text-sm">{currentData.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCard3D>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2">
                  <FadeInPro delay={0.2}>
                    <div className="mb-6">
                      <div className="flex items-center mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} rounded-3xl flex items-center justify-center text-3xl shadow-lg mr-6`}>
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

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {currentData.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Highlights</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {currentData.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className={`w-8 h-8 bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {currentData.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.6 }}
                          className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                        >
                          <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} bg-clip-text text-transparent mb-2`}>
                            <CounterAnimation end={stat.number} suffix={stat.suffix} />
                          </div>
                          <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </FadeInPro>
                  
                  {/* CTA Button */}
                  <button className={`px-8 py-4 bg-gradient-to-r ${currentData.gradientFrom} ${currentData.gradientTo} text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    Learn More About Us
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            {/* Slide Indicators */}
            <div className="flex space-x-4">
              {aboutData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-3 rounded-full transition-all duration-300 mb-2 ${
                      index === currentSlide ? 'bg-purple-500' : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}>
                      {index === currentSlide && (
                        <motion.div
                          className="h-full bg-purple-300 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: "linear" }}
                        />
                      )}
                    </div>
                    <span className={`text-xs font-medium transition-colors ${
                      index === currentSlide ? 'text-purple-600' : 'text-gray-500'
                    }`}>
                      {aboutData[index].title}
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

export default PremiumAboutCarousel;
