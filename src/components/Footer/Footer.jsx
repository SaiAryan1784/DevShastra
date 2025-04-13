import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-white py-6 px-4 sm:px-6 rounded-t-3xl border-t border-white/10 shadow-lg" id="contactUs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 p-2">
        {/* DevShastra */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <motion.h3
            className="font-audiowide text-3xl sm:text-4xl mb-4 sm:mb-2 bg-[#F5CC96] bg-clip-text text-transparent font-bold tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 15px rgba(255,255,255,0.5)"
            }}
          >
            DevShastra
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join us for an exciting journey of coding, innovation, and
            creativity. Where innovation meets code and dreams become reality.
          </motion.p>
          <motion.button
            className="group relative px-6 py-2 bg-gradient-to-r from-[#2e1f26] to-[#0f1a15] text-white font-semibold rounded-full overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_0_15px_rgba(46,31,38,0.5)] hover:translate-y-[-2px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-1">
              Register
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#0f1a15] to-[#2e1f26] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.4),rgba(255,255,255,0))]"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
        <div className="w-full col-span-1 sm:col-span-1">
          <motion.h3
            className="font-audiowide text-lg mb-2 text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            QUICK LINKS
          </motion.h3>
          <ul className="space-y-1 justify-items-start">
            {["About", "Timeline", "Tracks", "Sponsors", "Prizes", "FAQ"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#2e1f26] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 sm:col-span-1">
          <motion.h3
            className="font-audiowide text-lg mb-2 text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CONTACT
          </motion.h3>
          <ul className="space-y-1 justify-items-start">
            <motion.li
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <a
                href="mailto:business.codegeeks@gmail.com"
                className="hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="w-1 h-1 bg-[#2e1f26] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                business.codegeeks@gmail.com
              </a>
            </motion.li>
            <motion.li
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className="flex items-center group">
                <span className="w-1 h-1 bg-[#2e1f26] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                +91 8279437447
              </span>
            </motion.li>
            <motion.li
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="flex items-center group">
                <span className="w-1 h-1 bg-[#2e1f26] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                Delhi, India
              </span>
            </motion.li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="col-span-1 sm:col-span-1">
          <motion.h3
            className="font-audiowide text-lg mb-2 text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            CONNECT WITH US
          </motion.h3>
          <motion.div
            className="flex space-x-4 justify-items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDiscord size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <motion.p
            className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
            whileHover={{ color: "rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.3 }}
          >
            © 2025 DevShastra. All rights reserved.
          </motion.p>
          <motion.p
            className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
            whileHover={{ color: "rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.3 }}
          >
            Made with <motion.span
              className="text-red-500 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >❤</motion.span> by Awesome People
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
