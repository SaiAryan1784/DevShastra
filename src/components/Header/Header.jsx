import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to toggle the isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define heights in pixels (h-16 ~ 64px, h-14 ~ 56px)
  const navbarHeight = isScrolled ? 56 : 64;

  return (
    <div className=''>
      {/* Spacer div to reserve the navbar's space and avoid content overlap */}
      <div style={{ height: navbarHeight }} />

      <nav
        className={`fixed top-2 z-50 transition-all duration-300 flex items-center justify-center
          ${
            isScrolled
              ? "w-[60%] m-7 h-14 left-1/2 transform -translate-x-1/2 text-[#783128] bg-gray-500/20 bg-clip-padding border-b-1 backdrop-filter backdrop-blur-sm"
              : "w-[70%] h-16 left-1/2 transform -translate-x-1/2 text-[#fff4e4] bg-[#783128] bg-opacity-90"
          }
          rounded-xl shadow-md`}
      >
        <div className="flex items-center justify-evenly w-full h-full">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About
          </Link>
          <Link to="tracks" smooth={true} duration={500} className="cursor-pointer">
            Tracks
          </Link>
          <Link to="sponsors" smooth={true} duration={500} className="cursor-pointer">
            Sponsors
          </Link>
          <Link to="prizes" smooth={true} duration={500} className="cursor-pointer">
            Prizes
          </Link>
          <Link to="faq" smooth={true} duration={500} className="cursor-pointer">
            FAQ
          </Link>
          <Link to="contactUs" smooth={true} duration={500} className="cursor-pointer">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
