import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      setIsVisible(window.scrollY > viewportHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 h-auto w-16 flex flex-col items-center 
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-50 rounded-4xl py-6 space-y-6">
      {/* Logo Section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 flex items-center justify-center">
          <span className="text-xl font-bold text-white">C</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full flex flex-col items-center space-y-6">
        <Link to="home" smooth={true} duration={500}
          className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center group transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>

        <Link to="about" smooth={true} duration={500}
          className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center group transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>

        <Link to="prizes" smooth={true} duration={500}
          className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center group transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </Link>

        <Link to="sponsors" smooth={true} duration={500}
          className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center group transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>

        <Link to="faq" smooth={true} duration={500}
          className="w-10 h-10 rounded-lg hover:bg-white/20 flex items-center justify-center group transition-colors cursor-pointer">
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
      </div>

      {/* Register Button */}
      <div className="w-full flex items-center justify-center">
        <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-700 to-amber-900 flex items-center justify-center hover:opacity-90 transition-opacity">
          <span className="text-xs font-medium text-white">Reg</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
