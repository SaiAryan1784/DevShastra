import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Different direction variants for each grid item
  const fromTopVariant = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const fromBottomVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const fromLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const fromRightVariant = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const fromCenterVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center pl-20 py-6 overflow-x-hidden">
      <motion.div
        className="grid h-full w-[90%] gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4
          grid-cols-2 sm:grid-cols-2 md:grid-cols-3
          grid-rows-[6] sm:grid-rows-[4] md:grid-rows-3
          rounded-lg shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="col-span-1 row-span-1 bg-pink-200 rounded-lg shadow-md flex items-center justify-center"
          variants={fromTopVariant}
        >
          <p className="text-sm sm:text-base">Salmon</p>
        </motion.div>

        <div className="col-span-1 sm:col-span-1 md:col-span-1 row-span-2 sm:row-span-2 md:row-span-3
          flex flex-col gap-2 sm:gap-3 md:gap-4 h-full">
          <motion.div
            className="flex-[3] bg-lime-200 rounded-lg shadow-md flex items-center justify-center"
            variants={fromRightVariant}
          >
            <p className="text-sm sm:text-base">Broccoli Upper</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-lime-200 rounded-lg shadow-md flex items-center justify-center"
            variants={fromRightVariant}
          >
            <p className="text-sm sm:text-base">Broccoli Lower</p>
          </motion.div>
        </div>

        <motion.div
          className="col-span-2 sm:col-span-2 md:col-span-1 row-span-1 sm:row-span-1 md:row-span-2
            bg-yellow-200 rounded-lg shadow-md flex items-center justify-center"
          variants={fromLeftVariant}
        >
          <p className="text-sm sm:text-base">Tamago</p>
        </motion.div>

        <motion.div
          className="col-span-1 row-span-1 sm:row-span-2 md:row-span-2
            bg-amber-200 rounded-lg shadow-md flex items-center justify-center"
          variants={fromBottomVariant}
        >
          <p className="text-sm sm:text-base">Pork</p>
        </motion.div>

        <motion.div
          className="col-span-1 row-span-1 bg-green-200 rounded-lg shadow-md flex items-center justify-center"
          variants={fromCenterVariant}
        >
          <p className="text-sm sm:text-base">Edamame</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;