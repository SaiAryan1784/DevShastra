import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      to: "home",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      label: "Home"
    },
    {
      to: "about",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      label: "About"
    },
    {
      to: "tracks",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
      label: "Tracks"
    },
    {
      to: "timeline",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      isDynamic: true,
      ignoreCancelEvents: true,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      label: "Timeline"
    },
    {
      to: "prizes",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      label: "Prizes"
    },
    {
      to: "faq",
      spy: true,
      smooth: true,
      duration: 500,
      offset: -100,
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      label: "FAQ"
    }
  ];

  return (
    <>
      {/* Mobile Menu Container */}
      <div
        className={`md:hidden fixed top-4 right-4 z-40 transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'opacity-100 scale-100'
          : 'opacity-100 scale-100'
          }`}
        style={{ width: '256px' }}
      >
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-0 right-0 z-50 p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Content */}
        <div
          className={`bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 w-full origin-top-right transition-all duration-300 ease-in-out mt-12 ${isMenuOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-[-10px] pointer-events-none'
            }`}
        >
          {/* Logo */}
          <div className="w-12 h-12 mb-6 transition-all duration-500 ease-in-out transform
            rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
            <img
              src="/logo2-removebg-preview.png"
              alt="DevShastra Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={item.spy}
                smooth={item.smooth}
                duration={item.duration}
                offset={item.offset}
                isDynamic={item.isDynamic}
                ignoreCancelEvents={item.ignoreCancelEvents}
                onClick={toggleMenu}
                className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 h-auto w-16 flex-col items-center bg-white/5 ml-8 z-50
        backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-4xl py-6 
        hover:bg-white/10 hover:border-white/20 hover:shadow-[0_4px_40px_rgba(0,0,0,0.15)] transition-all duration-500">

        {/* Logo */}
        <div className="w-12 h-12 mb-4 transition-all duration-500 ease-in-out transform
          rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
          <img
            src="/logo2-removebg-preview.png"
            alt="DevShastra Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex flex-col space-y-6 items-center transition-all duration-500 ease-in-out">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={item.spy}
              smooth={item.smooth}
              duration={item.duration}
              offset={item.offset}
              isDynamic={item.isDynamic}
              ignoreCancelEvents={item.ignoreCancelEvents}
              className="group transition-all duration-500 ease-in-out cursor-pointer w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
