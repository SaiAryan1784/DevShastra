import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code, Brain, Users } from "lucide-react";

const prizes = [
  {
    title: "First Prize",
    amount: "₹50,000",
    icon: <Trophy size={64} className="text-yellow-400" />
  },
  {
    title: "Second Prize",
    amount: "₹30,000",
    icon: <Trophy size={64} className="text-gray-300" />
  },
  {
    title: "Third Prize",
    amount: "₹20,000",
    icon: <Trophy size={64} className="text-amber-600" />
  }
];

const trackPrizes = [
  {
    title: "Web3 Track",
    amount: "₹2,000",
    icon: <Code size={48} className="text-blue-400" />
  },
  {
    title: "AI/ML Track",
    amount: "₹2,000",
    icon: <Brain size={48} className="text-purple-400" />
  },
  {
    title: "All Girls Track",
    amount: "₹2,000",
    icon: <Users size={48} className="text-pink-400" />
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
    },
  }),
};

const trackCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 12
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

function Prizes() {
  return (
    <div id="prizes" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Main Prizes Section */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-16 tracking-wider text-amber-200"
      >
        TREASURE TROVE
      </motion.h2>

      <div className="flex justify-center items-end gap-8 flex-wrap z-10 relative mb-20">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className={`relative ${index === 0
              ? "w-72 order-2"
              : index === 1
                ? "w-64 order-1"
                : "w-64 order-3"
              }`}
          >
            <div className={`relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-8 border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20 ${index === 0
              ? "h-80"
              : index === 1
                ? "h-72"
                : "h-64"
              }`}>
              <div className={`relative ${index === 0 ? "mb-8" : index === 1 ? "mb-7" : "mb-6"
                } flex justify-center transition-transform duration-200 hover:scale-105`}>
                {prize.icon}
              </div>

              <h3 className={`${index === 0 ? "text-3xl" : "text-2xl"
                } font-bold text-center mb-4 text-amber-200`}>
                {prize.title}
              </h3>
              <p className={`${index === 0 ? "text-4xl" : "text-3xl"
                } font-bold text-center text-amber-200/90`}>
                {prize.amount}
              </p>

              {/* Decorative border */}
              <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Track Prizes Section */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mb-12 tracking-wider text-amber-200"
      >
        TRACK PRIZES
      </motion.h3>

      <div className="flex justify-center gap-8 flex-wrap z-10 relative">
        {trackPrizes.map((prize, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={trackCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2 }}
            className="relative w-64"
          >
            <motion.div
              className="relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-8 border border-amber-700/30 shadow-lg transition-colors duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20 h-64"
              whileHover={{
                boxShadow: "0 8px 30px rgba(251, 191, 36, 0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="relative mb-6 flex justify-center"
                variants={iconVariants}
              >
                {prize.icon}
              </motion.div>

              <motion.h3
                className="text-2xl font-bold text-center mb-4 text-amber-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {prize.title}
              </motion.h3>

              <motion.p
                className="text-2xl font-bold text-center text-amber-200/90"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {prize.amount}
              </motion.p>

              {/* Decorative border */}
              <motion.div
                className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"
                whileHover={{
                  borderColor: "rgba(217, 119, 6, 0.2)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Prizes;
