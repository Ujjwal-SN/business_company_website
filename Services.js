import React, { useState, useEffect } from 'react';
import {
  FadeInPro,
  HoverCard3D,
  StaggerReveal,
  CounterAnimation,
  MorphingBackground
} from '../components/ProfessionalAnimations';
import '../styles/advanced-animations.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [selectedService, setSelectedService] = useState('samudra-india');

  // Handle URL parameters for navbar dropdown
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedService(category);
    }
  }, []);

  const samudraIndiaServices = {
    development: {
      title: 'Development Services',
      description: 'Full-stack development solutions with cutting-edge technologies',
      services: [
        {
          title: 'Web Application Development',
          description: 'Custom web applications built with modern frameworks and optimized for performance',
          technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python'],
          features: [
            'Responsive Design & Mobile-First Approach',
            'Progressive Web App (PWA) Development',
            'Server-Side Rendering (SSR) & Static Generation',
            'API Integration & Microservices Architecture',
            'Database Design & Optimization',
            'Cloud Deployment & DevOps Integration'
          ],
          pricing: 'Starting from Rs 5,000',
          timeline: '4-12 weeks',
          icon: '💻'
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android',
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
          features: [
            'Cross-Platform & Native Development',
            'App Store & Play Store Optimization',
            'Push Notifications & Real-time Features',
            'Offline Functionality & Data Sync',
            'In-App Purchases & Payment Integration',
            'App Analytics & Performance Monitoring'
          ],
          pricing: 'Starting from Rs 8,000',
          timeline: '6-16 weeks',
          icon: '📱'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Complete e-commerce platforms with advanced features',
          technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'],
          features: [
            'Custom Shopping Cart & Checkout Process',
            'Payment Gateway Integration',
            'Inventory Management System',
            'Order Tracking & Customer Portal',
            'SEO Optimization & Marketing Tools',
            'Analytics & Reporting Dashboard'
          ],
          pricing: 'Starting from Rs 10,00,000',
          timeline: '8-20 weeks',
          icon: '🛒'
        }
      ]
    },
    design: {
      title: 'Design Services',
      description: 'Creative design solutions that captivate and convert',
      services: [
        {
          title: 'UI/UX Design',
          description: 'User-centered design that creates meaningful experiences',
          technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
          features: [
            'User Research & Persona Development',
            'Information Architecture & Wireframing',
            'Interactive Prototyping & Testing',
            'Visual Design & Brand Integration',
            'Design System Creation',
            'Accessibility & Usability Testing'
          ],
          pricing: 'Starting from Rs 3,00,000',
          timeline: '3-8 weeks',
          icon: '🎨'
        },
        {
          title: 'Brand Identity Design',
          description: 'Complete brand identity and visual communication systems',
          technologies: ['Adobe Illustrator', 'Photoshop', 'After Effects'],
          features: [
            'Logo Design & Brand Mark Creation',
            'Brand Guidelines & Style Guide',
            'Color Palette & Typography System',
            'Business Card & Stationery Design',
            'Marketing Collateral Design',
            'Digital Asset Creation'
          ],
          pricing: 'Starting from Rs 2,50,000',
          timeline: '2-6 weeks',
          icon: '🏢'
        }
      ]
    },
    consulting: {
      title: 'Consulting Services',
      description: 'Strategic guidance and technical expertise for your business',
      services: [
        {
          title: 'Digital Transformation',
          description: 'Strategic planning and implementation of digital initiatives',
          technologies: ['Cloud Platforms', 'AI/ML', 'IoT', 'Blockchain'],
          features: [
            'Digital Strategy Development',
            'Technology Stack Assessment',
            'Process Automation & Optimization',
            'Change Management & Training',
            'Performance Metrics & KPIs',
            'Ongoing Support & Maintenance'
          ],
          pricing: 'Starting from Rs 15,00,000',
          timeline: '12-24 weeks',
          icon: '🚀'
        },
        {
          title: 'Technical Architecture',
          description: 'Scalable and robust technical architecture design',
          technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
          features: [
            'System Architecture Design',
            'Database Architecture & Optimization',
            'Security Assessment & Implementation',
            'Performance Optimization',
            'Scalability Planning',
            'Documentation & Best Practices'
          ],
          pricing: 'Starting from Rs 12,00,000',
          timeline: '8-16 weeks',
          icon: '🏗️'
        }
      ]
    }
  };

  const samudraCruiseServices = {
    shipping: {
      title: 'Shipping Services',
      description: 'Comprehensive maritime shipping and logistics solutions',
      services: [
        {
          title: 'Container Shipping',
          description: 'Full container load and less container load shipping services worldwide',
          technologies: ['GPS Tracking', 'RFID Systems', 'IoT Sensors', 'Blockchain'],
          features: [
            'Real-time Container Tracking',
            'Temperature & Humidity Monitoring',
            'Customs Clearance Support',
            'Door-to-Door Delivery',
            'Insurance Coverage',
            '24/7 Customer Support'
          ],
          pricing: 'Starting from Rs 2,500 per container',
          timeline: '15-45 days',
          icon: '🚢'
        },
        {
          title: 'Bulk Cargo Services',
          description: 'Specialized handling of dry bulk and liquid cargo shipments',
          technologies: ['Automated Loading', 'Quality Control', 'Safety Systems'],
          features: [
            'Grain & Coal Transportation',
            'Liquid Bulk Handling',
            'Quality Assurance Testing',
            'Environmental Compliance',
            'Port-to-Port Services',
            'Cargo Insurance'
          ],
          pricing: 'Starting from Rs 1,800 per MT',
          timeline: '20-60 days',
          icon: '⚓'
        }
      ]
    },
    construction: {
      title: 'Marine Construction',
      description: 'Specialized marine and offshore construction services',
      services: [
        {
          title: 'Port Development',
          description: 'Complete port infrastructure development and modernization',
          technologies: ['Marine Engineering', 'Dredging Equipment', 'Pile Driving'],
          features: [
            'Berth Construction & Repair',
            'Dredging & Land Reclamation',
            'Breakwater Construction',
            'Port Equipment Installation',
            'Environmental Impact Assessment',
            'Project Management'
          ],
          pricing: 'Starting from Rs 50M per project',
          timeline: '2-5 years',
          icon: '🏗️'
        },
        {
          title: 'Offshore Platforms',
          description: 'Design and construction of offshore drilling and production platforms',
          technologies: ['Steel Fabrication', 'Welding Systems', 'Safety Equipment'],
          features: [
            'Platform Design & Engineering',
            'Steel Structure Fabrication',
            'Installation & Commissioning',
            'Safety System Integration',
            'Maintenance Services',
            'Decommissioning Support'
          ],
          pricing: 'Starting from Rs 100M per platform',
          timeline: '3-7 years',
          icon: '🛢️'
        }
      ]
    },
    importexport: {
      title: 'Import/Export Services',
      description: 'Complete international trade facilitation and logistics',
      services: [
        {
          title: 'Trade Documentation',
          description: 'Complete documentation and compliance services for international trade',
          technologies: ['Digital Documentation', 'Blockchain Verification', 'AI Processing'],
          features: [
            'Bill of Lading Processing',
            'Letter of Credit Management',
            'Customs Documentation',
            'Certificate of Origin',
            'Insurance Documentation',
            'Regulatory Compliance'
          ],
          pricing: 'Starting from Rs 500 per shipment',
          timeline: '3-7 days',
          icon: '📋'
        },
        {
          title: 'Freight Forwarding',
          description: 'End-to-end freight forwarding and logistics coordination',
          technologies: ['TMS Systems', 'EDI Integration', 'Track & Trace'],
          features: [
            'Multi-modal Transportation',
            'Warehouse & Distribution',
            'Cargo Consolidation',
            'Route Optimization',
            'Risk Management',
            'Supply Chain Visibility'
          ],
          pricing: 'Starting from Rs 1,200 per shipment',
          timeline: '10-30 days',
          icon: '🌐'
        }
      ]
    }
  };

  // Removed unused variable 'serviceCategories'

  const samudraIndiaTabs = [
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'consulting', name: 'Consulting', icon: '🚀' }
  ];

  const samudraCruiseTabs = [
    { id: 'shipping', name: 'Shipping', icon: '🚢' },
    { id: 'construction', name: 'Construction', icon: '🏗️' },
    { id: 'importexport', name: 'Import/Export', icon: '🌐' }
  ];

  const tabs = selectedService === 'samudra-cruise' ? samudraCruiseTabs : samudraIndiaTabs;

  // Update active tab when service changes
  useEffect(() => {
    if (selectedService === 'samudra-cruise') {
      setActiveTab('shipping');
    } else {
      setActiveTab('development');
    }
  }, [selectedService]);

  // Safety check to ensure activeTab exists in current service categories
  const currentServiceCategories = selectedService === 'samudra-cruise' ? samudraCruiseServices : samudraIndiaServices;
  const safeActiveTab = currentServiceCategories[activeTab] ? activeTab : Object.keys(currentServiceCategories)[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <MorphingBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <FadeInPro direction="down">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-400/30">
                🌟 Premium Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {selectedService === 'samudra-enclave' ? 'Samudra Enclave Services' : 'Samudra Axis Services'}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {selectedService === 'samudra-enclave' 
                  ? 'Professional Maritime & Trade Solutions'
                  : 'Empowering Businesses with Next-Gen Digital Solutions'}
              </p>
            </FadeInPro>
          </div>
          
          {/* Our Achievements Section */}
          <div className="mt-12">
            <FadeInPro direction="up" delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                Our Achievements
              </h2>
            </FadeInPro>
            
            {/* Horizontal Row Layout with Rounded Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
              <StaggerReveal className="flex w-full flex-col md:flex-row gap-4 md:gap-6">
                {/* Projects Delivered Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">📂</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={500} suffix="+" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">Projects Delivered</p>
                </div>
                {/* Happy Clients Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">👥</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={150} suffix="+" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">Happy Clients</p>
                </div>
                {/* Success Rate Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">📈</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={98} suffix="%" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">Success Rate</p>
                </div>
                {/* Dedicated Support Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">⏰</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={24} suffix="/7" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">Dedicated Support</p>
                </div>
              </StaggerReveal>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <FadeInPro direction="up" delay={0.6}>
                <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Our Services
                </button>
              </FadeInPro>
            </div>
          </div>
        </div>
      </section>

      {/* Service Category Selector */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="relative inline-block">
              <select 
                className="appearance-none bg-white border-2 border-blue-200 rounded-xl px-8 py-4 pr-12 text-gray-700 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onChange={(e) => setSelectedService(e.target.value)}
                value={selectedService}
              >
                <option value="samudra-axis">🚀 Samudra Axis Services</option>
                <option value="samudra-enclave">🌊 Samudra Enclave Services</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  safeActiveTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {currentServiceCategories[safeActiveTab]?.title || 'Our Services'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentServiceCategories[safeActiveTab]?.description || 'Professional services tailored to your needs'}
              </p>
            </FadeInPro>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(currentServiceCategories[safeActiveTab]?.services || []).map((service, index) => (
              <FadeInPro key={index} delay={index * 0.2}>
                <HoverCard3D>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100/50 h-full backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="ml-3 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {service.pricing}
                          </span>
                          <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {service.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">{service.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-md text-xs font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-xs font-medium">
                            +{service.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Key Features</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-xs leading-relaxed font-medium">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 ml-6">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-sm hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg relative overflow-hidden group">
                      <span className="relative z-10">Get Free Consultation</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </HoverCard3D>
              </FadeInPro>
            ))}
          </div>
        </div>
      </section>

      {/* Our Simple Process - Premium */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                🎆 Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Simple Steps to Success
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A clear, efficient process designed to deliver exceptional results every time.
              </p>
            </FadeInPro>
          </div>

          {/* Process Steps Layout - Mobile First */}
          <div className="max-w-4xl mx-auto">
            <StaggerReveal>
              {/* Step 1 - Discovery */}
              <div className="flex flex-col items-center text-center mb-16 md:flex-row md:text-left md:items-start">
                <div className="relative mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🔍</span>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    Understanding your needs and goals through detailed consultation
                  </p>
                </div>
              </div>

              {/* Step 2 - Planning */}
              <div className="flex flex-col items-center text-center mb-16 md:flex-row-reverse md:text-right md:items-start">
                <div className="relative mb-6 md:mb-0 md:ml-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">📝</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Planning</h3>
                  <p className="text-gray-600">
                    Creating a detailed roadmap and technical architecture
                  </p>
                </div>
              </div>

              {/* Step 3 - Development */}
              <div className="flex flex-col items-center text-center mb-16 md:flex-row md:text-left md:items-start">
                <div className="relative mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">⚙️</span>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Development</h3>
                  <p className="text-gray-600">
                    Building your solution with regular updates and feedback
                  </p>
                </div>
              </div>

              {/* Step 4 - Launch */}
              <div className="flex flex-col items-center text-center mb-8 md:flex-row-reverse md:text-right md:items-start">
                <div className="relative mb-6 md:mb-0 md:ml-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-white">🚀</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">04</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Launch</h3>
                  <p className="text-gray-600">
                    Deployment, testing, and ongoing support for your success
                  </p>
                </div>
              </div>
            </StaggerReveal>
          </div>

          {/* Get Started Button */}
          <div className="text-center mt-16">
            <FadeInPro delay={0.6}>
              <a href="/contact#start-project" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </a>
            </FadeInPro>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
