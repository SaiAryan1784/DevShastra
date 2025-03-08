import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6" id="contactUs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 p-4">
        {/* DevShastra */}
        <div className="col-span-1">
          <h3 className="font-audiowide text-4xl mb-4">DevShastra</h3>
          <p className="text-gray-400 mb-4">
            Join us for an exciting journey of coding, innovation, and
            creativity. Where innovation meets code and dreams become reality.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white font-semibold rounded-full overflow-hidden transition-all duration-500 ease-out hover:pr-12 hover:pl-6 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] hover:translate-y-[-2px]">
            <span className="relative z-10 flex items-center gap-1 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              Register
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:animate-gradient-x" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
          </button>
        </div>
        <div className="w-full col-span-1 justify-items-center m-l-10">
          <h3 className="font-audiowide text-xl mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 justify-items-start">
            <li>
              <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="timeline" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                Timeline
              </Link>
            </li>
            <li>
              <Link to="tracks" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                Tracks
              </Link>
            </li>
            <li>
              <Link to="sponsors" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                Sponsors
              </Link>
            </li>
            <li>
              <Link to="prizes" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                Prizes
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 justify-items-start">
          <h3 className="font-audiowide text-xl mb-4">CONTACT</h3>
          <ul className="space-y-2 justify-items-start">
            <li className="text-gray-400">
              <a
                href="mailto:business.codegeeks@gmail.com"
                className="hover:text-white"
              >
                business.codegeeks@gmail.com
              </a>
            </li>
            <li className="text-gray-400">+91 8279437447</li>
            <li className="text-gray-400">Delhi, India</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="col-span-1 justify-items-start">
          <h3 className="font-audiowide text-xl mb-4">CONNECT WITH US</h3>
          <div className="flex space-x-4 justify-items-start">
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 DevShastra. All rights reserved.
          </p>
          <p className="text-gray-400">
            Made with <span className="text-red-500">❤</span> by Awesome People
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
