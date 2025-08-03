'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => 
        id === 'home' ? document.body : document.getElementById(id)
      );
      
      const currentSection = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection !== -1) {
        setActiveSection(sections[currentSection]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: '#', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/30 backdrop-blur-md py-3 shadow-lg shadow-indigo-500/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="relative group"
        >
          <span className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            AP
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              href={item.href} 
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="ml-4 bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-indigo-500/30"
          >
            Hire Me
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <motion.span 
              className="absolute top-2 right-0 w-6 h-0.5 bg-white rounded-full"
              animate={{ 
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="absolute top-4 right-0 w-6 h-0.5 bg-white rounded-full"
              animate={{ 
                opacity: isOpen ? 0 : 1,
                x: isOpen ? 20 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="absolute top-6 right-0 w-6 h-0.5 bg-white rounded-full"
              animate={{ 
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-black/95 to-indigo-950/95 backdrop-blur-lg absolute top-full left-0 right-0 border-t border-indigo-500/20 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.href} 
                  className={`text-lg font-medium transition-colors py-2 ${
                    activeSection === item.id 
                      ? 'text-white pl-3 border-l-2 border-indigo-500' 
                      : 'text-gray-300 hover:text-white hover:pl-3'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-center font-medium py-3 px-6 rounded-lg mt-4 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;