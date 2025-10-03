import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInPro, HoverCard3D, MorphingBackground } from './ProfessionalAnimations';

const servicesData = [
  {
    id: 1,
    title: "Enterprise Web Development",
    subtitle: "Scalable & High-Performance Solutions",
    description: "Custom enterprise applications built with cutting-edge technologies, optimized for performance, security, and scalability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "Cloud", "AI/ML"],
    stats: { projects: "200+", satisfaction: "99%", timeline: "4-12 weeks" },
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    icon: "💻",
    features: ["Microservices Architecture", "Real-time Analytics", "Cloud-Native Deployment", "Advanced Security"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    subtitle: "Cross-Platform Excellence",
    description: "Native and hybrid mobile applications that deliver exceptional user experiences across all devices and platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    stats: { projects: "150+", satisfaction: "98%", timeline: "6-16 weeks" },
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    icon: "📱",
    features: ["Cross-Platform Development", "Offline Functionality", "Push Notifications", "App Store Optimization"]
  },
  {
    id: 3,
    title: "UI/UX Design Excellence",
    subtitle: "Design That Converts",
    description: "User-centered design solutions that create meaningful interactions and drive business growth through exceptional experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
    stats: { projects: "300+", satisfaction: "97%", timeline: "3-8 weeks" },
    gradientFrom: "from-green-600",
    gradientTo: "to-teal-600",
    icon: "🎨",
    features: ["User Research", "Interactive Prototyping", "Design Systems", "Usability Testing"]
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle: "Infinite Scalability",
    description: "Cloud-native applications and infrastructure solutions that grow with your business and adapt to changing demands.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
    stats: { projects: "100+", satisfaction: "99%", timeline: "8-20 weeks" },
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    icon: "☁️",
    features: ["Auto-Scaling", "Serverless Architecture", "DevOps Integration", "Cost Optimization"]
  }
];

const PremiumServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoPlayInterval = 6000; // 6 seconds per slide

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % servicesData.length);
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

  const currentService = servicesData[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInPro>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              🚀 Premium Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions crafted with precision, powered by innovation, and delivered with excellence.
            </p>
          </FadeInPro>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            >
              {/* Content Side */}
              <div className="order-2 lg:order-1">
                <FadeInPro delay={0.2}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} rounded-2xl flex items-center justify-center text-2xl shadow-lg mr-4`}>
                        {currentService.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {currentService.title}
                        </h3>
                        <p className={`text-lg font-medium bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} bg-clip-text text-transparent`}>
                          {currentService.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} bg-opacity-10 text-gray-800 rounded-lg text-sm font-medium border border-gray-200 hover:shadow-md transition-all duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200">
                          <div className={`w-6 h-6 bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} bg-clip-text text-transparent mb-1`}>
                        {currentService.stats.projects}
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Projects</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} bg-clip-text text-transparent mb-1`}>
                        {currentService.stats.satisfaction}
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Satisfaction</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} bg-clip-text text-transparent mb-1`}>
                        {currentService.stats.timeline}
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Timeline</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${currentService.gradientFrom} ${currentService.gradientTo} text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Get Free Consultation
                  </button>
                </FadeInPro>
              </div>

              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <HoverCard3D>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`}></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <h4 className="font-bold text-gray-900 mb-2">{currentService.title}</h4>
                        <p className="text-sm text-gray-600">{currentService.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className={`w-12 h-3 rounded-full transition-all duration-300 ${
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
                </button>
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="ml-6 p-3 bg-white shadow-lg border border-gray-200 rounded-full hover:shadow-xl transition-all duration-300"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 4v12l8-6-8-6z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.5 3A1.5 1.5 0 003 4.5v11A1.5 1.5 0 004.5 17h3A1.5 1.5 0 009 15.5v-11A1.5 1.5 0 007.5 3h-3zM12.5 3A1.5 1.5 0 0011 4.5v11A1.5 1.5 0 0012.5 17h3A1.5 1.5 0 0017 15.5v-11A1.5 1.5 0 0015.5 3h-3z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesCarousel;
