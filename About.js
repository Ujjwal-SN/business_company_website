import React from 'react';
import PremiumAboutCarousel from '../components/PremiumAboutCarousel';
import {
  FadeInPro,
  HoverCard3D,
  StaggerReveal,
  CounterAnimation
} from '../components/ProfessionalAnimations';
import '../styles/advanced-animations.css';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium About Carousel */}
      <PremiumAboutCarousel />

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                ✨ Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Stand For</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core principles guide everything we do, ensuring we deliver exceptional value to our clients and partners.
              </p>
            </FadeInPro>
          </div>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HoverCard3D>
              <div className="value-card relative bg-white p-8 rounded-2xl shadow-lg group h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(219, 234, 254, 0.7)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-300 drop-shadow-sm">Integrity First</h3>
                  <p className="text-gray-700 mb-4 flex-grow group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    We believe in transparent, honest communication and ethical business practices in all our interactions.
                  </p>
                  <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="value-card relative bg-white p-8 rounded-2xl shadow-lg group h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(220, 252, 231, 0.7)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-green-700 transition-colors duration-300 drop-shadow-sm">Innovation</h3>
                  <p className="text-gray-700 mb-4 flex-grow group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    We embrace creativity and forward-thinking to develop cutting-edge solutions for our clients.
                  </p>
                  <div className="w-12 h-1 bg-green-500 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="value-card relative bg-white p-8 rounded-2xl shadow-lg group h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(237, 233, 254, 0.7)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-purple-700 transition-colors duration-300 drop-shadow-sm">Collaboration</h3>
                  <p className="text-gray-700 mb-4 flex-grow group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    We believe in the power of teamwork and building strong partnerships with our clients.
                  </p>
                  <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="value-card relative bg-white p-8 rounded-2xl shadow-lg group h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(254, 226, 226, 0.7)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-red-700 transition-colors duration-300 drop-shadow-sm">Excellence</h3>
                  <p className="text-gray-700 mb-4 flex-grow group-hover:text-gray-900 transition-colors duration-300 font-medium">
                    We are committed to delivering exceptional quality and exceeding expectations in everything we do.
                  </p>
                  <div className="w-12 h-1 bg-red-500 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </HoverCard3D>
          </StaggerReveal>
        </div>
      </section>
      
      {/* Success Metrics - Simple & Premium */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInPro>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                ✨ Our Success Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Building Digital Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple numbers that showcase our commitment to delivering exceptional digital solutions.
              </p>
            </FadeInPro>
          </div>
          
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <HoverCard3D>
              <div className="success-metric-card text-center p-8 rounded-2xl shadow-lg border-0 relative overflow-visible">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg z-10">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <CounterAnimation end={500} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Projects Delivered</p>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="success-metric-card text-center p-8 rounded-2xl shadow-lg border-0 relative overflow-visible">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg z-10">
                  <span className="text-3xl text-white">😊</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <CounterAnimation end={150} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Happy Clients</p>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="success-metric-card text-center p-8 rounded-2xl shadow-lg border-0 relative overflow-visible">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg z-10">
                  <span className="text-3xl text-white">👥</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <CounterAnimation end={20} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Team Members</p>
                </div>
              </div>
            </HoverCard3D>
            
            <HoverCard3D>
              <div className="success-metric-card text-center p-8 rounded-2xl shadow-lg border-0 relative overflow-visible">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg z-10">
                  <span className="text-3xl text-white">🏆</span>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <CounterAnimation end={8} suffix="+" />
                  </div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </HoverCard3D>
          </StaggerReveal>
        </div>
      </section>

    </div>
  );
};

export default About;
