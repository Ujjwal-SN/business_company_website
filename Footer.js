import React from 'react';
import { motion } from 'framer-motion';
import { MagneticHover, FadeInPro, StaggerReveal } from './AdvancedAnimations';
import '../styles/advanced-animations.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <FadeInPro>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated with Our Latest Innovations
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about cutting-edge solutions and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </FadeInPro>
        
        <StaggerReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Samudra Axis Pvt Ltd...
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              "Your reliable partner in Smart Shipping, Modern Construction, and Import/Export.
              Delivering innovation, quality, and trust across the globe."
              </p>
              <div className="flex space-x-4">
                <MagneticHover strength={0.3}>
                  <button type="button" className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-500 transition-all duration-300 group border border-blue-500/20 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25" aria-label="Facebook">
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </button>
                </MagneticHover>
                <MagneticHover strength={0.3}>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-cyan-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-cyan-600 hover:to-cyan-500 transition-all duration-300 group border border-cyan-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25" aria-label="Twitter">
                    <svg className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.3}>
                  <button type="button" className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-purple-500 transition-all duration-300 group border border-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25" aria-label="LinkedIn">
                    <svg className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </MagneticHover>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Services</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">Cruise Shipping</li>
                <li className="text-gray-400">Import/Export</li>
                <li className="text-gray-400">Construction</li>
                <li className="text-gray-400">Web Solutions</li>
                <li className="text-gray-400">Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p>samudraaxis@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p>+91-7428693383</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p>Bhutani Alphathum,sector-90 Near 137 Metro, 201304</p>
                </div>
              </div>
            </div>
          </div>
        </StaggerReveal>
        
        <motion.div 
          className="border-t border-gray-800/50 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2018 Samudra Axis Pvt Ltd. All rights reserved. Crafted with passion and precision.
            </p>
            <div className="flex space-x-6">
              <button type="button" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none p-0 cursor-pointer">Privacy Policy</button>
              <button type="button" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none p-0 cursor-pointer">Terms of Service</button>
              <button type="button" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none p-0 cursor-pointer">Cookie Policy</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
