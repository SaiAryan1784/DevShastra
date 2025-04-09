import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fromTopVariant = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
  };

  const fromBottomVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
  };

  const fromLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } },
  };

  const fromRightVariant = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } },
  };

  const fromCenterVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", duration: 0.8 } },
  };

  const glassCardStyle =
    "relative backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden";

  const shineEffect = (
    <div className="absolute inset-0">
      <div className="absolute w-full h-full -left-1/4 -top-1/4 bg-gradient-to-br from-white/30 to-transparent rotate-12 opacity-20 pointer-events-none" />
    </div>
  );

  const card = (content, variant, index) => {
    const isHovered = hoveredCard === index;

    return (
      <motion.div
        className={`${glassCardStyle} relative cursor-pointer`}
        variants={variant}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
      >
        {shineEffect}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#2e1f26]/20 to-[#0f1a15]/20 opacity-0"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        <p
          className="text-sm sm:text-base text-white z-10 font-medium"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            textShadow: isHovered ? "0 0 8px rgba(255,255,255,0.5)" : "none"
          }}
        >
          {content}
        </p>

        <div
          className="absolute bottom-2 right-2 w-2 h-2 bg-white/80 rounded-full"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </motion.div>
    );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center pl-20 py-6 overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-0"
      >
        <div className="absolute w-full h-full bg-[#1c1c2a]/30"></div>
      </motion.div>

      <motion.div
        className="grid h-full w-[90%] gap-1 sm:gap-2 md:gap-3 p-1 sm:p-2 md:p-3
          grid-cols-[1fr_1.35fr_1fr] sm:grid-cols-[1fr_1.35fr_1fr] md:grid-cols-[1fr_1.75fr_1fr]
          grid-rows-[6] sm:grid-rows-[4] md:grid-rows-3
          rounded-lg shadow-md relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {card("Salmon", fromTopVariant, 1)}

        <div
          className="col-span-1 sm:col-span-1 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3 flex flex-col gap-1 sm:gap-2 md:gap-3 h-full"
        >
          <motion.div
            className={`flex-[3] ${glassCardStyle} cursor-pointer`}
            variants={fromRightVariant}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {shineEffect}
            <p
              className="text-sm sm:text-base text-white z-10"
            >
              Broccoli Upper
            </p>
          </motion.div>

          <motion.div
            className={`flex-1 ${glassCardStyle} cursor-pointer`}
            variants={fromRightVariant}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {shineEffect}
            <p
              className="text-sm sm:text-base text-white z-10"
            >
              Broccoli Lower
            </p>
          </motion.div>
        </div>

        <motion.div
          className={`col-span-2 sm:col-span-2 md:col-span-1 row-span-1 sm:row-span-1 md:row-span-2 ${glassCardStyle} cursor-pointer`}
          variants={fromLeftVariant}
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {shineEffect}
          <div className="relative z-10 flex flex-col items-center">
            <p
              className="text-sm sm:text-base text-white"
            >
              Tamago
            </p>
            <div
              className="w-0 h-0.5 bg-white/50 mt-1"
            />
          </div>
        </motion.div>

        <motion.div
          className={`col-span-1 row-span-1 sm:row-span-2 md:row-span-2 ${glassCardStyle} cursor-pointer`}
          variants={fromBottomVariant}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {shineEffect}
          <p
            className="text-sm sm:text-base text-white z-10"
          >
            Pork
          </p>
          <div
            className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#2e1f26]/20 rounded-full opacity-0"
          />
        </motion.div>

        {card("Edamame", fromCenterVariant, 5)}
      </motion.div>

      <div
        className="absolute bottom-4 right-4"
      >
        <div
          className="p-2 bg-white/5 backdrop-blur-md rounded-full"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;