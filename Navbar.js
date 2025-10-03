import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/advanced-animations.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { 
      name: 'Samudra Axis', 
      path: '/services?category=samudra-axis',
      description: 'Web Development, UI/UX Design, Data Analytics',
      icon: '🚀'
    },
    { 
      name: 'Samudra Enclave', 
      path: '/services?category=samudra-enclave',
      description: 'Shipping, Marine Construction, Import/Export',
      icon: '🌊'
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white/20 backdrop-blur-md shadow-xl border-2 border-white/30 hover:border-cyan-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                <img 
                  src={`${process.env.PUBLIC_URL}/dromkart-logo.jpeg`}
                alt="Samudra Axis Logo"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzNhODBmZiIgZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIvPjxwYXRoIGZpbGw9IiM4ZTQ1ZjUiIGQ9Ik0xMiA0QzcuNTgyIDQgNCA3LjU4MiA0IDEyczMuNTgyIDggOCA4IDgtMy41ODIgOC04LTMuNTgyLTgtOC04eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiA2Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02em0wIDJjMi4yMDkgMCA0IDEuNzkxIDQgNHMtMS43OTEgNC00IDQtNC0xLjc5MS00LTRzMS43OTEtNCA0LTR6Ii8+PC9zdmc+'
                  }}
                />
              </div>
              <span className={`text-2xl font-black tracking-wider ${scrolled ? 'text-blue-600' : 'bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent'} font-sans drop-shadow-[0_0_8px_rgba(165,243,252,0.5)]`}>
                SAMUDRA AXIS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group flex items-center ${
                        scrolled
                          ? location.pathname === item.path
                            ? 'text-blue-600 bg-blue-50/80'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                          : location.pathname === item.path
                            ? 'text-white bg-white/10 backdrop-blur-sm'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {/* Animated underline */}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                    
                    {/* Services Dropdown */}
                    <motion.div
                      className={`absolute top-full left-0 mt-2 w-80 rounded-xl shadow-2xl overflow-hidden ${
                        scrolled 
                          ? 'bg-white/95 backdrop-blur-xl border border-gray-200' 
                          : 'bg-white/10 backdrop-blur-xl border border-white/10'
                      }`}
                      initial={{ opacity: 0, y: -10, pointerEvents: 'none' }}
                      animate={{ 
                        opacity: servicesDropdownOpen ? 1 : 0,
                        y: servicesDropdownOpen ? 0 : -10,
                        display: servicesDropdownOpen ? 'block' : 'none',
                        pointerEvents: servicesDropdownOpen ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      {serviceItems.map((serviceItem) => (
                        <Link
                          key={serviceItem.name}
                          to={serviceItem.path}
                          className={`block px-6 py-4 transition-all duration-200 last:border-b-0 backdrop-blur-sm ${
                            scrolled
                              ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100'
                              : 'text-white/90 hover:bg-white/10 hover:text-white border-b border-white/5'
                          }`}
                        >
                          <div className="flex items-start">
                            <span className="text-2xl mr-3 mt-1">{serviceItem.icon}</span>
                            <div>
                              <div className="font-semibold text-base mb-1 text-white">{serviceItem.name}</div>
                              <div className="text-sm text-white/70">{serviceItem.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      scrolled
                        ? location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50/80'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                        : location.pathname === item.path
                          ? 'text-white bg-white/10 backdrop-blur-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors duration-300 p-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className={`backdrop-blur-xl px-4 py-6 space-y-2 ${scrolled ? 'bg-white/95 border-t border-gray-200' : 'bg-gradient-to-b from-black/80 to-black/90 border-t border-white/10'}`}>
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="space-y-2">
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    scrolled
                      ? location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50/80'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                      : location.pathname === item.path
                        ? 'text-white bg-white/10 backdrop-blur-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
                <div className="ml-4 space-y-2">
                  {serviceItems.map((serviceItem) => (
                    <Link
                      key={serviceItem.name}
                      to={serviceItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${scrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                    >
                      <div className="flex items-start">
                        <span className="text-lg mr-2">{serviceItem.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{serviceItem.name}</div>
                          <div className={`mt-2 pl-6 space-y-2 border-l-2 ${scrolled ? 'border-gray-200' : 'border-white/10'}`}>{serviceItem.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                  scrolled
                    ? location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50/80'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    : location.pathname === item.path
                      ? 'text-white bg-white/10 backdrop-blur-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
