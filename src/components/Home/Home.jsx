import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Squares from '../Squares/Squares';
import '../../styles/Home.css';

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(true);

  const floatControls = useAnimation();
  const bgControls = useAnimation();
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 500], ['0%', '-35%']);
  const logoX = useTransform(scrollY, [0, 500], ['0%', '-82%']);
  const logoScale = useTransform(scrollY, [0, 500], [1, 0.32]);
  const contentOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowScroll(scrollPosition < windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const targetDate = new Date('2025-05-15T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Start the floating animation
    floatControls.start({
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });

    // Start the background animation
    bgControls.start({
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, [floatControls, bgControls]);

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.3,
      color: "#7C3AED",
      textShadow: "0 0 15px rgba(124, 58, 237, 0.9), 0 0 30px rgba(124, 58, 237, 0.6)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeOut"
      }
    }
  };

  const countdownVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(124, 58, 237, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const loadingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const loadingDotVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const titleLetters = "DEVSHASTRA".split("");
  const taglineWords = ["CODE", "COLLAB", "CONQUER"];

  // Loading screen
  // if (isLoading) {
  //   return (
  //     <div className="loading-screen">
  //       <motion.div
  //         className="loading-content"
  //         variants={loadingContainerVariants}
  //         initial="hidden"
  //         animate="visible"
  //       >
  //         <motion.div
  //           className="loading-text-container"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 1, ease: "easeOut" }}
  //         >
  //           {titleLetters.map((letter, i) => (
  //             <motion.span
  //               key={i}
  //               className="loading-letter"
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{
  //                 opacity: 1,
  //                 y: 0,
  //                 textShadow: [
  //                   "0 0 10px rgba(255, 255, 255, 0.3)",
  //                   "0 0 20px rgba(255, 255, 255, 0.5)",
  //                   "0 0 10px rgba(255, 255, 255, 0.3)"
  //                 ]
  //               }}
  //               transition={{
  //                 duration: 1,
  //                 delay: i * 0.1,
  //                 textShadow: {
  //                   duration: 2,
  //                   repeat: Infinity,
  //                   ease: "easeInOut"
  //                 }
  //               }}
  //               style={{
  //                 color: '#FFFFFF'
  //               }}
  //             >
  //               {letter}
  //             </motion.span>
  //           ))}
  //         </motion.div>
  //         <motion.div
  //           className="tagline"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 1, duration: 0.8 }}
  //         >
  //           {["CODE", "COLLAB", "CONQUER"].map((word, index) => (
  //             <motion.span
  //               key={index}
  //               className="gradient-text"
  //               initial={{ opacity: 0, y: 10 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{
  //                 delay: 1.2 + (index * 0.2),
  //                 duration: 0.8,
  //                 ease: "easeOut"
  //               }}
  //               whileHover={{
  //                 scale: 1.1,
  //                 textShadow: "0 0 20px rgba(124, 58, 237, 0.8)",
  //               }}
  //             >
  //               {word}
  //             </motion.span>
  //           ))}
  //         </motion.div>
  //       </motion.div>
  //     </div>
  //   );
  // }

  return (
    <div className="hero-container">
      {/* Animated Logo */}
      <motion.img
        src="../../public/logo.png"
        alt="DevShastra Logo"
        className="main-logo"
        style={{
          y: logoY,
          x: logoX,
          scale: logoScale,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      />

      {/* Animated Background Elements */}
      <motion.div>
        <Squares
          speed={0.5}
          squareSize={50}
          direction='diagonal'
          borderColor='rgba(124, 58, 237, 0.15)'
          hoverFillColor='rgba(124, 58, 237, 0.2)'
          className="background-squares"
        />
        <div className="glowing-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </motion.div>

      <motion.div
        className="content-wrapper"
        style={{ opacity: contentOpacity }}
      >
        {/* Event Date */}
        <motion.div
          className="event-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05, color: "#a78bfa" }}
        >
          <span className="date-glow">15-16th May, 2025</span>
        </motion.div>

        {/* New Tagline */}
        <motion.div
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {["The", "Ultimate", "Battle", "of", "the", "Brightest", "Minds"].map((word, index) => (
            <motion.span
              key={index}
              className="gradient-text"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + (index * 0.2) }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 20px rgba(124, 58, 237, 0.8)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="countdown-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: "easeOut"
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <TimeBox value={timeLeft.days} label="Days" color="purple" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <TimeBox value={timeLeft.hours} label="Hours" color="blue" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <TimeBox value={timeLeft.minutes} label="Minutes" color="orange" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            <TimeBox value={timeLeft.seconds} label="Seconds" color="green" />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="cta-button"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(124, 58, 237, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="btn-content"
            whileHover={{ color: "#ffffff" }}
          >
            <img src="https://devfolio.co/logo-light.svg" alt="Devfolio" className="h-6" />
            <span>Go to projects</span>
          </motion.div>
          <motion.div
            className="btn-shine"
            animate={{
              x: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const TimeBox = ({ value, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (prevValue !== value) {
      setIsFlipping(true);
      const timer = setTimeout(() => setIsFlipping(false), 600);
      setPrevValue(value);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <motion.div
      className={`countdown-box ${color}`}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 25px rgba(124, 58, 237, 0.4)`,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className="countdown-number"
        animate={
          isFlipping
            ? {
              scale: [1, 0.8, 1],
              rotateX: [0, -180, 0],
              transition: { duration: 0.6 }
            }
            : isHovered
              ? {
                scale: [1, 1.2, 1],
                color: ["#FFFFFF",
                  color === "purple" ? "#C4B5FD" :
                    color === "blue" ? "#93C5FD" :
                      color === "orange" ? "#FDBA74" :
                        "#86EFAC",
                  "#FFFFFF"
                ],
                transition: { duration: 0.8 }
              }
              : {}
        }
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <motion.span
        className="countdown-label"
        animate={
          isHovered
            ? {
              y: [-2, 2, -2],
              transition: { duration: 1, repeat: Infinity }
            }
            : {}
        }
      >
        {label}
      </motion.span>

      {/* Pulse effect when values change to multiple of 10 */}
      {value % 10 === 0 && value > 0 && (
        <motion.div
          className="countdown-pulse"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />
      )}

      {/* Additional glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${color === "purple" ? "rgba(124, 58, 237, 0.3)" :
              color === "blue" ? "rgba(59, 130, 246, 0.3)" :
                color === "orange" ? "rgba(249, 115, 22, 0.3)" :
                  "rgba(34, 197, 94, 0.3)"
              }, transparent 70%)`
          }}
        />
      )}
    </motion.div>
  );
};

export default Home;