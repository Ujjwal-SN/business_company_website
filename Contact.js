import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';
import {
  FadeInPro,
  HoverCard3D,
  StaggerReveal,
  MorphingBackground,
  CounterAnimation
} from '../components/ProfessionalAnimations';
import '../styles/advanced-animations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle hash fragment scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#start-project') {
      setTimeout(() => {
        const element = document.getElementById('start-project');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let didTimeout = false;
    const timeout = setTimeout(() => {
      didTimeout = true;
      setIsSubmitting(false);
      setSubmitStatus('error');
    }, 10000); // 10 seconds timeout
    try {
      // Save message to Firebase
      await push(ref(db, 'messages'), {
        ...formData,
        timestamp: new Date().toISOString()
      });
      if (!didTimeout) {
        clearTimeout(timeout);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      clearTimeout(timeout);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const services = [
    'Cruise Shipping',
    'Import/Export',
    'Construction',
    'E-commerce Solutions',
    'Digital Marketing',
    'Web Solutions',
    'Consulting Services',
    'UI/UX Design'
  ];

  const budgetRanges = [
    'Under Rs 10,000',
    'Rs 10,000 - Rs 20,0000',
    'Rs 20,0000 - Rs 25,0000',
    'Rs 25,0000 - Rs 35,0000',
    'Rs 35,0000 - Rs 50,0000',
    'Over Rs 1,00,00,0'
  ];

  const timelines = [
    '1-2 weeks',
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <MorphingBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <FadeInPro direction="down">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-400/30">
                💬 Get In Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Let's Start Something
                <br />Amazing Together
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your vision into reality? Get in touch with our expert team and let's discuss your next big project.
              </p>
            </FadeInPro>
          </div>
          
          {/* Stats Section */}
          <div className="mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <StaggerReveal>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    <CounterAnimation end={24} suffix="h" />
                  </div>
                  <p className="text-white text-sm font-medium">Response Time</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    <CounterAnimation end={500} suffix="+" />
                  </div>
                  <p className="text-white text-sm font-medium">Projects Delivered</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                    <CounterAnimation end={90} suffix="%" />
                  </div>
                  <p className="text-white text-sm font-medium">Client Satisfaction</p>
                </div>
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Multiple Ways to Connect
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose How You'd Like to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer multiple ways to get in touch. Choose the method that works best for you.
              </p>
            </FadeInPro>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <StaggerReveal>
              <HoverCard3D>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-blue-200">
                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">Get a detailed response within 24 hours</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">samudraaxis@gmail.com</p>
                    <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300"></p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </HoverCard3D>
              
              <HoverCard3D>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 cursor-pointer relative overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-green-200">
                    <svg className="w-8 h-8 text-white group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">Speak directly with our team</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">+91-7428693383</p>
                    <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Mon-Sat 10AM-6PM EST</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </HoverCard3D>
              
              <HoverCard3D>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 cursor-pointer relative overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-purple-200">
                    <svg className="w-8 h-8 text-white group-hover:animate-bounce transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">Instant support and quick answers</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg">
                    Start Chat
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </HoverCard3D>
              
              <HoverCard3D>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center h-full group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 cursor-pointer relative overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-orange-200">
                    <svg className="w-8 h-8 text-white group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Book Meeting</h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">Schedule a consultation call</p>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg">
                    Schedule Call
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </HoverCard3D>
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Advanced Contact Form */}
      <section id="start-project" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInPro>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Project</h2>
                  <p className="text-gray-600 mb-8">Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.</p>
                  
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Company Name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Project Details'
                      )}
                    </button>
                  </form>
                </div>
              </FadeInPro>
            </div>
            
            <div className="space-y-8">
              <FadeInPro delay={0.2}>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Why Choose Us?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>24-hour response guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Free consultation and quote</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Expert team with 5+ years experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>500+ successful projects delivered</span>
                    </li>
                  </ul>
                </div>
              </FadeInPro>
              
              <FadeInPro delay={0.4}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Visit Our Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Headquarters</p>
                        <p className="text-gray-600">Bhutani Alphathum<br />Sector-90 Near 137 Metro, 201304</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span>10:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </FadeInPro>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Got Questions? We've Got Answers
              </h2>
            </FadeInPro>
          </div>

          <StaggerReveal className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you start on my project?</h3>
              <p className="text-gray-600">We can typically start new projects within 1-2 weeks, depending on our current workload and your project requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer ongoing maintenance and support?</h3>
              <p className="text-gray-600">Yes! We provide comprehensive maintenance packages to keep your website or application running smoothly after launch.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in your project quotes?</h3>
              <p className="text-gray-600">Our quotes include design, development, testing, deployment, and 30 days of post-launch support. We're transparent about all costs upfront.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you work with our existing development team?</h3>
              <p className="text-gray-600">Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly with your existing workflows.</p>
            </div>
          </StaggerReveal>
        </div>
      </section>

    </div>
  );
};

export default Contact;
