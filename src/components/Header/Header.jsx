import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      setIsScrolled(window.scrollY > viewportHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed transition-all duration-500 z-50 ${isScrolled
      ? 'top-5 left-1/2 -translate-x-1/2 w-fit h-16 flex-row justify-center items-center bg-white/5'
      : 'left-4 top-1/2 -translate-y-1/2 h-auto w-16 flex-col items-center bg-white/5'
      } flex backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-4xl py-6 
    hover:bg-white/10 hover:border-white/20 hover:shadow-[0_4px_40px_rgba(0,0,0,0.15)] transition-all duration-300`}>

      {/* Logo - Only shown in vertical mode */}
      {!isScrolled && (
        <div className="w-12 h-12 mb-4 transition-all duration-500 
          rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
          <img
            src="/logo2-removebg-preview.png"
            alt="DevShastra Logo"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Main Navigation */}
      <div className={`${isScrolled
        ? 'flex-row space-x-8 px-8'
        : 'flex-col space-y-6'
        } flex items-center`}>
        <Link to="home" smooth={true} duration={500}
          className={`group transition-all duration-300 cursor-pointer ${isScrolled
            ? 'flex items-center space-x-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5'
            : 'w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm'
            }`}>
          {!isScrolled && (
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )}
          {isScrolled && <span className="text-sm font-medium tracking-wide">Home</span>}
        </Link>

        <Link to="about" smooth={true} duration={500}
          className={`group transition-all duration-300 cursor-pointer ${isScrolled
            ? 'flex items-center space-x-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5'
            : 'w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm'
            }`}>
          {!isScrolled && (
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {isScrolled && <span className="text-sm font-medium tracking-wide">About</span>}
        </Link>

        <Link to="themes" smooth={true} duration={500}
          className={`group transition-all duration-300 cursor-pointer ${isScrolled
            ? 'flex items-center space-x-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5'
            : 'w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm'
            }`}>
          {!isScrolled && (
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )}
          {isScrolled && <span className="text-sm font-medium tracking-wide">Themes</span>}
        </Link>

        <Link to="timeline" smooth={true} duration={500}
          className={`group transition-all duration-300 cursor-pointer ${isScrolled
            ? 'flex items-center space-x-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5'
            : 'w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm'
            }`}>
          {!isScrolled && (
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {isScrolled && <span className="text-sm font-medium tracking-wide">Timeline</span>}
        </Link>

        <Link to="faq" smooth={true} duration={500}
          className={`group transition-all duration-300 cursor-pointer ${isScrolled
            ? 'flex items-center space-x-2 text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5'
            : 'w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm'
            }`}>
          {!isScrolled && (
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {isScrolled && <span className="text-sm font-medium tracking-wide">FAQ</span>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
