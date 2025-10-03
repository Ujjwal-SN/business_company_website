import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  CounterAnimation, 
  StaggerReveal, 
  FadeInPro, 
  HoverCard3D
} from '../components/ProfessionalAnimations';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const [variant, setVariant] = useState('cruise');
  const [expandedCard, setExpandedCard] = useState(null);
  // Typewriter effect for hero heading
  const phrases = React.useMemo(() => ['vikas verma', 'Next-Gen Digital Platform'], []);
  const [typeText, setTypeText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    // Slowed down typing and deleting speeds for better readability
  const typingSpeed = 180; // Slower typing for Netlify/live
  const deletingSpeed = 100; // Slower deleting for Netlify/live
  // Increased pause times to let users read the text
  const pauseAtFull = 2200; // Slightly longer pause at full text
  const pauseAtEmpty = 700; // Slightly longer pause at empty

    const atFull = typeText === current && !isDeleting;
    const atEmpty = typeText === '' && isDeleting;

    const delay = atFull
      ? pauseAtFull
      : atEmpty
      ? pauseAtEmpty
      : isDeleting
      ? deletingSpeed
      : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = current.slice(0, typeText.length + 1);
        setTypeText(nextText);
        if (nextText === current) {
          setIsDeleting(true);
        }
      } else {
        const nextText = current.slice(0, typeText.length - 1);
        setTypeText(nextText);
        if (nextText === '') {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typeText, isDeleting, phraseIndex, phrases]);
  return (
  <div className="min-h-screen bg-white overflow-hidden will-change-transform">
      {/* Hero Section (Video Background) */}
  <section className="relative overflow-hidden text-white min-h-screen will-change-transform">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center space-y-8">
              <FadeInPro>
                <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-wide">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  Digital Cruise Shipping 
                </span>
                <h1 className="relative font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl mt-8">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                    {typeText}
                  </span>
                  <span 
                    className="absolute inset-0 z-0 text-transparent stroke-2 md:stroke-[3px] stroke-white/30"
                    style={{
                      WebkitTextStrokeWidth: '2px',
                      WebkitTextStrokeColor: 'rgba(255, 255, 255, 0.3)',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 10px rgba(147, 197, 253, 0.3)'
                    }}
                  >
                    {typeText}
                  </span>
                  <span className="inline-block w-0.5 h-8 md:h-10 align-middle bg-cyan-300/80 ml-1 animate-pulse"></span>
                </h1>
                <div className="space-y-6 mt-8">
                  <p className="text-white/95 text-lg md:text-2xl max-w-2xl mx-auto font-semibold tracking-tight">
                    Transforming businesses with AI-powered digital solutions
                  </p>
                  <p className="text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    Harness the power of artificial intelligence to drive innovation, efficiency, and growth across your enterprise
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 mt-12">
                  <a
                    href="/contact#start-project"
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    <span>Get Started</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#comprehensive-solutions"
                    className="group w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Explore Services</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </FadeInPro>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <CounterAnimation end={500} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                <CounterAnimation end={90} suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <CounterAnimation end={24} suffix="/7" />
              </div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <CounterAnimation end={20} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Team Members</p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section id="comprehensive-solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-sm font-medium mb-6 border border-blue-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Comprehensive Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
                End-to-End Digital Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                From concept to deployment, we deliver end-to-end solutions that transform your business vision into reality.
              </p>
              <div className="inline-flex rounded-lg border border-blue-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setVariant('india')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${variant === 'india' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50'}`}
                >
                  Samudra Axis
                </button>
                <button
                  type="button"
                  onClick={() => setVariant('cruise')}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-l border-blue-200 ${variant === 'cruise' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50'}`}
                >
                  Samudra Enclave
                </button>
              </div>
            </FadeInPro>
          </div>

          {variant === 'india' && (
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shipping Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=500&h=350&fit=crop&crop=center" 
                    alt="Global Shipping Network" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/90 text-white backdrop-blur-sm">
                      Maritime Solutions
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Shipping Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Comprehensive maritime shipping solutions with global reach and reliable delivery network.</p>
                  {expandedCard !== 'shipping' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 cursor-pointer" onClick={() => setExpandedCard('shipping')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-blue-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Global Maritime Network</h5>
                          <p className="text-sm text-gray-600">Our worldwide network spans major ports with real-time tracking and secure, optimized cargo handling for on-time delivery.</p>
                        </div>
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Advanced Logistics Management</h5>
                          <p className="text-sm text-gray-600">End-to-end logistics including route optimization, documentation, and temperature-controlled warehousing.</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Digital Fleet Management</h5>
                          <p className="text-sm text-gray-600">IoT-enabled vessel monitoring, predictive maintenance, and automated compliance reporting for maximum efficiency.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>
            {/* Construction Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100 will-change-transform">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=350&fit=crop&crop=center" 
                    alt="Modern Construction Site" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/90 text-white backdrop-blur-sm">
                      Marine Engineering
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Construction Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Marine construction and infrastructure development with specialized engineering expertise.</p>
                  {expandedCard !== 'construction' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-orange-600 text-sm font-medium hover:text-orange-700 cursor-pointer" onClick={() => setExpandedCard('construction')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-orange-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Marine Engineering Excellence</h5>
                          <p className="text-sm text-gray-600">Offshore platform construction, port development, and marine infrastructure with advanced engineering and safety protocols.</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Infrastructure Development</h5>
                          <p className="text-sm text-gray-600">Berth development, breakwater systems, and dredging operations with environmental impact assessment.</p>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Sustainable Construction</h5>
                          <p className="text-sm text-gray-600">Eco-friendly materials, renewable energy integration, and carbon-neutral construction practices for future-ready infrastructure.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>

            {/* Import/Export Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=350&fit=crop&crop=center" 
                    alt="Global Trade & Logistics" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/90 text-white backdrop-blur-sm">
                      Global Trade
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Import/Export Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">International trade facilitation with customs clearance and regulatory compliance expertise.</p>
                  {expandedCard !== 'import-export' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600 text-sm font-medium hover:text-green-700 cursor-pointer" onClick={() => setExpandedCard('import-export')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-green-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-l-4 border-green-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Trade Compliance & Documentation</h5>
                          <p className="text-sm text-gray-600">Handling bills of lading, letters of credit, customs declarations, and certificates of origin with full compliance.</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Global Freight Forwarding</h5>
                          <p className="text-sm text-gray-600">Multi-modal transportation, warehousing, cargo consolidation, and supply chain visibility for seamless operations.</p>
                        </div>
                        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-lg border-l-4 border-emerald-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Digital Trade Platform</h5>
                          <p className="text-sm text-gray-600">AI-powered trade analytics, automated customs processing, and blockchain-verified supply chain transparency.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>
          </StaggerReveal>
          )}

          {variant === 'cruise' && (
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hotel Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop&crop=center" 
                    alt="Luxury Hotel Service" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/90 text-white backdrop-blur-sm">
                      Luxury Stays
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Hotel Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Experience unparalleled luxury and comfort with our premium hotel accommodations and world-class amenities.</p>
                  {expandedCard !== 'hotel-service' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-600 text-sm font-medium hover:text-amber-700 cursor-pointer" onClick={() => setExpandedCard('hotel-service')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-amber-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Luxury Accommodations</h5>
                          <p className="text-sm text-gray-600">Elegantly appointed rooms and suites with premium amenities, designed for ultimate comfort and relaxation.</p>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Dining Excellence</h5>
                          <p className="text-sm text-gray-600">World-class restaurants and bars offering a variety of culinary experiences, from local flavors to international cuisine.</p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Wellness & Recreation</h5>
                          <p className="text-sm text-gray-600">State-of-the-art fitness center, spa services, and recreational activities for a rejuvenating stay.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>
            {/* Staff Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop&crop=center" 
                    alt="Professional Staff Service" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/90 text-white backdrop-blur-sm">
                      Professional Team
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Staff Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Dedicated and professional staff committed to delivering exceptional service and guest satisfaction.</p>
                  {expandedCard !== 'staff-service' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-700 cursor-pointer" onClick={() => setExpandedCard('staff-service')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-emerald-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-emerald-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border-l-4 border-emerald-500">
                          <h5 className="font-semibold text-gray-800 mb-2">24/7 Concierge</h5>
                          <p className="text-sm text-gray-600">Round-the-clock assistance for all your needs, from reservations to local recommendations and special requests.</p>
                        </div>
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Housekeeping Excellence</h5>
                          <p className="text-sm text-gray-600">Impeccable cleaning services with attention to detail, ensuring your space is always fresh and comfortable.</p>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border-l-4 border-cyan-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Guest Relations</h5>
                          <p className="text-sm text-gray-600">Personalized service and dedicated support to make your stay memorable and hassle-free.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>

            {/* Construction Service */}
            <HoverCard3D>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=350&fit=crop&crop=center" 
                    alt="Professional Construction Service" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/90 text-white backdrop-blur-sm">
                      Building Excellence
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Construction Service</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">Professional construction services delivering quality and precision in every project.</p>
                  {expandedCard !== 'construction-service' ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-orange-600 text-sm font-medium hover:text-orange-700 cursor-pointer" onClick={() => setExpandedCard('construction-service')}>
                        <span>Explore Service</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-orange-600">Service Details</h4>
                        <button onClick={() => setExpandedCard(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500">
                          <h5 className="font-semibold text-gray-800 mb-2">New Construction</h5>
                          <p className="text-sm text-gray-600">From ground-up construction to turnkey projects, we deliver quality and precision in every build.</p>
                        </div>
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Renovation & Remodeling</h5>
                          <p className="text-sm text-gray-600">Transform your space with our expert renovation services, combining functionality and modern design.</p>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <h5 className="font-semibold text-gray-800 mb-2">Project Management</h5>
                          <p className="text-sm text-gray-600">End-to-end project oversight ensuring timely completion, budget adherence, and quality craftsmanship.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard3D>
          </StaggerReveal>
          )}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeInPro>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-sm font-medium mb-4 border border-blue-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Project Gallery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
                Our Shipping & Logistics Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Showcasing our expertise in shipping, import/export, and logistics solutions that power global trade.
              </p>
            </FadeInPro>
          </div>
          
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12 px-2"
            >
              {[
                {
                  id: 1,
                  title: 'Container Shipping',
                  description: 'Global container shipping with real-time tracking and secure delivery across major ports.',
                  image: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg', // High-quality image of a large container ship with colorful containers
                },
                {
                  id: 2,
                  title: 'Port Construction',
                  description: 'Advanced port construction and marine engineering for efficient cargo handling.',
                  image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg', // Modern port construction with advanced cranes and infrastructure
                },
                {
                  id: 3,
                  title: 'Cargo Logistics',
                  description: 'Integrated cargo logistics and transportation solutions for seamless supply chains.',
                  image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg', // High-quality logistics center with organized cargo handling
                },
                {
                  id: 4,
                  title: 'Import/Export',
                  description: 'Expert import/export services with customs documentation and regulatory compliance.',
                  image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg', // Professional import/export operations with documentation
                },
                {
                  id: 5,
                  title: 'Supply Chain Management',
                  description: 'End-to-end supply chain management powered by AI and digital platforms.',
                  image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg', // Modern digital supply chain management system
                },
                {
                  id: 6,
                  title: 'Customs Clearance',
                  description: 'Fast and reliable customs clearance for international shipments and trade.',
                  image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg', // Professional customs clearance operations
                },
              ].map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div 
                    className="group bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center group">
                        View Project
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4">
                Technology Stack
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Smart Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to provide fast Shipping, Construction and Import/Export services, with scalable and future-proof solutions.
              </p>
            </FadeInPro>
          </div>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* SmartShips */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-indigo-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <span className="text-3xl">🚢</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">SmartShips</h3>
                <p className="text-sm text-gray-600">Autonomous Vessels</p>
              </div>
            </div>

            {/* EcoDrive */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-teal-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">EcoDrive</h3>
                <p className="text-sm text-gray-600">Sustainable Tech</p>
              </div>
            </div>

            {/* Print3D */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-pink-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <span className="text-3xl">🖨️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Print3D</h3>
                <p className="text-sm text-gray-600">3D Printing</p>
              </div>
            </div>

            {/* AI-Builder */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-red-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">AI-Builder</h3>
                <p className="text-sm text-gray-600">AI Solutions</p>
              </div>
            </div>

            {/* BlockChainX */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                  <span className="text-3xl">⛓️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">BlockChainX</h3>
                <p className="text-sm text-gray-600">Blockchain Tech</p>
              </div>
            </div>

            {/* AutoWare */}
            <div className="text-center group transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-l from-transparent via-purple-500 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0.5 bg-white rounded-xl"></div>
              <div className="relative z-10 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">AutoWare</h3>
                <p className="text-sm text-gray-600">Automation</p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="services-carousel-section" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-sm font-medium mb-6 border border-blue-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
                Comprehensive Business Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                End-to-end services to meet all your business needs with excellence and efficiency.
              </p>
            </FadeInPro>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              id="prevBtn"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -ml-4 hidden md:block"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div 
              id="services-carousel" 
              className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mx-2"
              style={{
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Cargo Shipping */}
              <div className="flex-shrink-0 w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 snap-start px-2">
                <HoverCard3D>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750" 
                        alt="Cargo Shipping" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">Cargo Shipping</h3>
                        <p className="text-blue-100 text-sm">Global cargo transport solutions</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>⭐ 4.8 (156 Reviews)</span>
                        <span className="mx-2">•</span>
                        <span>Worldwide</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Efficient and secure shipping services with real-time tracking and dedicated support for all your cargo needs.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">Competitive Rates</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>

              {/* Container Shipping */}
              <div className="flex-shrink-0 w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 snap-start px-2">
                <HoverCard3D>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750" 
                        alt="Container Shipping" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">Container Shipping</h3>
                        <p className="text-blue-100 text-sm">Flexible container solutions</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>⭐ 4.7 (132 Reviews)</span>
                        <span className="mx-2">•</span>
                        <span>All Sizes</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Full-container (FCL) and less-than-container (LCL) shipping options with advanced tracking and handling.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">Flexible Options</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>

              {/* Construction Services */}
              <div className="flex-shrink-0 w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 snap-start px-2">
                <HoverCard3D>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750" 
                        alt="Construction Services" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">Construction</h3>
                        <p className="text-blue-100 text-sm">Building your vision into reality</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>⭐ 4.9 (187 Reviews)</span>
                        <span className="mx-2">•</span>
                        <span>Turnkey Solutions</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Comprehensive construction services from planning to completion with a focus on quality and timely delivery.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">Custom Builds</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          View Projects
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>

              {/* Import/Export Services */}
              <div className="flex-shrink-0 w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 snap-start px-2">
                <HoverCard3D>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750" 
                        alt="Import/Export Services" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">Import/Export</h3>
                        <p className="text-blue-100 text-sm">Global trade made simple</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>⭐ 4.8 (143 Reviews)</span>
                        <span className="mx-2">•</span>
                        <span>Worldwide Network</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Streamlined import/export services with customs clearance, documentation, and logistics support.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">Global Reach</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>

              {/* Supply Chain Solutions */}
              <div className="flex-shrink-0 w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 snap-start px-2">
                <HoverCard3D>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750" 
                        alt="Supply Chain Solutions" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">Supply Chain</h3>
                        <p className="text-blue-100 text-sm">End-to-end logistics management</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>⭐ 4.9 (167 Reviews)</span>
                        <span className="mx-2">•</span>
                        <span>Optimized Solutions</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Comprehensive supply chain solutions including warehousing, distribution, and inventory management.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">Efficient</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </HoverCard3D>
              </div>
            </div>

            {/* Next Arrow */}
            <button 
              id="nextBtn"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -mr-4 hidden md:block"
              aria-label="Next service"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1, 2, 3, 4].map((item) => (
              <button 
                key={item}
                className="carousel-indicator w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors"
                data-index={item}
                aria-label={`Go to slide ${item + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .carousel-indicator.active {
            background-color: #2563eb;
            transform: scale(1.2);
          }
          #services-carousel {
            scroll-padding: 0 1rem;
          }
          .snap-start {
            scroll-snap-align: start;
          }
        `}</style>

        {/* Carousel JavaScript */}
        {useEffect(() => {
          const carousel = document.getElementById('services-carousel');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');
          const indicators = document.querySelectorAll('.carousel-indicator');
          let isScrolling = false;
          let scrollTimeout;
          
          const updateIndicators = () => {
            if (!carousel) return;
            
            const scrollPosition = carousel.scrollLeft;
            const cardWidth = carousel.firstElementChild?.offsetWidth + 16 || 0; // 16px is gap
            const activeIndex = Math.round(scrollPosition / cardWidth);
            
            indicators.forEach((indicator, index) => {
              if (index === activeIndex) {
                indicator.classList.add('active');
              } else {
                indicator.classList.remove('active');
              }
            });
          };
          
          const scrollToIndex = (index) => {
            if (!carousel) return;
            
            const cardWidth = carousel.firstElementChild?.offsetWidth + 16 || 0; // 16px is gap
            const scrollPosition = index * cardWidth;
            
            carousel.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          };
          
          // Navigation handlers
          const handlePrevClick = () => {
            if (!carousel) return;
            carousel.scrollBy({
              left: -((carousel.firstElementChild?.offsetWidth || 0) + 16),
              behavior: 'smooth'
            });
          };
          
          const handleNextClick = () => {
            if (!carousel) return;
            carousel.scrollBy({
              left: (carousel.firstElementChild?.offsetWidth || 0) + 16,
              behavior: 'smooth'
            });
          };
          
          // Handle indicator clicks
          const handleIndicatorClick = (index) => {
            scrollToIndex(index);
          };
          
          // Handle mobile view
          const handleMobileResize = () => {
            if (window.innerWidth < 768) {
              prevBtn?.classList.add('hidden');
              nextBtn?.classList.add('hidden');
            } else {
              prevBtn?.classList.remove('hidden');
              nextBtn?.classList.remove('hidden');
            }
          };
          
          // Initialize carousel if all required elements exist
          if (prevBtn && nextBtn && carousel) {
            // Add event listeners
            prevBtn.addEventListener('click', handlePrevClick);
            nextBtn.addEventListener('click', handleNextClick);
            
            // Update indicators on scroll
            const handleScroll = () => {
              if (!isScrolling) {
                isScrolling = true;
                updateIndicators();
              }
              
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(() => {
                isScrolling = false;
              }, 100);
            };
            
            carousel.addEventListener('scroll', handleScroll);
            
            // Add indicator click listeners
            indicators.forEach((indicator, index) => {
              indicator.addEventListener('click', () => handleIndicatorClick(index));
            });
            
            // Initial setup
            updateIndicators();
            handleMobileResize();
            
            // Add window resize listeners
            window.addEventListener('resize', updateIndicators);
            window.addEventListener('resize', handleMobileResize);
            
            // Cleanup function
            return () => {
              // Remove event listeners
              prevBtn.removeEventListener('click', handlePrevClick);
              nextBtn.removeEventListener('click', handleNextClick);
              carousel.removeEventListener('scroll', handleScroll);
              window.removeEventListener('resize', updateIndicators);
              window.removeEventListener('resize', handleMobileResize);
              clearTimeout(scrollTimeout);
              
              // Remove indicator event listeners
              indicators.forEach((indicator, index) => {
                indicator.removeEventListener('click', () => handleIndicatorClick(index));
              });
            };
          }
        }, [])}
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="relative min-h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-blue-200 text-blue-900 rounded-full text-sm font-medium mb-4">
                Client Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by Industry Leaders
              </h2>
            </FadeInPro>
          </div>
          <TestimonialCarousel
            testimonials={[
              {
                text: '"Samudra Axis team transformed our digital presence completely. Their expertise in modern web technologies and attention to detail is unmatched."',
                initials: 'AP',
                name: 'Aryan Patel',
                role: 'CEO, TechCorp',
                avatarBg: 'bg-gradient-to-r from-blue-500 to-purple-500',
              },
              {
                text: '"The analytics dashboard they built for us has revolutionized how we make business decisions. Outstanding work!"',
                initials: 'RV',
                name: 'Raj Verma',
                role: 'CTO, DataFlow',
                avatarBg: 'bg-gradient-to-r from-green-500 to-teal-500',
              },
              {
                text: '"Professional, reliable, and innovative. They delivered exactly what we needed, on time and within budget."',
                initials: 'AK',
                name: 'Aman Kumar',
                role: 'Founder, StartupX',
                avatarBg: 'bg-gradient-to-r from-purple-500 to-pink-500',
              },
              {
                text: '"Samudra Axis\'s team exceeded our expectations. Their support and technical skills are truly world-class."',
                initials: 'SS',
                name: 'Suresh Singh',
                role: 'Director, Bharat Logistics',
                avatarBg: 'bg-gradient-to-r from-red-500 to-yellow-500',
              },
              {
                text: '"We saw a 40% increase in engagement after launching our new site. Highly recommend Samudra Axis!"',
                initials: 'PK',
                name: 'Priya Kapoor',
                role: 'CMO, IndiaMartX',
                avatarBg: 'bg-gradient-to-r from-green-700 to-blue-400',
              },
              {
                text: '"Their innovative approach and quick turnaround helped us launch ahead of schedule. Thank you, Samudra Axis!"',
                initials: 'MG',
                name: 'Meera Gupta',
                role: 'Product Head, InnovateIndia',
                avatarBg: 'bg-gradient-to-r from-orange-500 to-red-400',
              },
            ]}
          />
        </div>
      </section>

    </div>
  );
};

export default Home;
