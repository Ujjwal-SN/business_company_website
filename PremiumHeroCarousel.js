import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeInPro, FloatingElement, MorphingBackground } from './ProfessionalAnimations';

const PremiumHeroCarousel = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = React.useMemo(() => ['Samudra Axis', 'Next-Gen Digital Platform'], []);
  
  useEffect(() => {
    const currentFullText = texts[textIndex];
    const typeSpeed = isDeleting ? 30 : 60;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentFullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Single Video Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50 z-10"></div>
        
        {/* Video Background */}
        <video 
          className="w-full h-full object-cover opacity-60" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Morphing Background Elements */}
      <MorphingBackground />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <FadeInPro direction="down" delay={0.2}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-4 border border-blue-400/30">
                ⚡ Enterprise-Grade Solutions
              </span>
            </div>
          </FadeInPro>

          {/* Main Title with Typewriter Effect */}
          <FadeInPro delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center justify-center">
              <span className="typewriter-text">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </FadeInPro>

          {/* Subtitle */}
          <FadeInPro direction="up" delay={0.6}>
            <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing businesses with cutting-edge web solutions
            </p>
          </FadeInPro>

          {/* Description */}
          <FadeInPro direction="up" delay={0.8}>
            <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Advanced analytics, seamless user experiences, and innovation-driven growth solutions
            </p>
          </FadeInPro>

          {/* Action Buttons */}
          <FadeInPro delay={1.0}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="/contact#start-project"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a 
                href="#experience-excellence"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
              </motion.a>
            </div>
          </FadeInPro>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 hidden lg:block z-20">
        <FloatingElement speed={4}>
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-blue-400/30"></div>
        </FloatingElement>
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block z-20">
        <FloatingElement speed={6} distance={30}>
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30"></div>
        </FloatingElement>
      </div>
    </section>
  );
};

export default PremiumHeroCarousel;
