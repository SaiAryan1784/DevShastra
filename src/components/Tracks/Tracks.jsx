// import React from 'react';
// import { Code, Brain, Wallet, Heart, Lightbulb, BookOpen } from 'lucide-react';
// import { motion } from 'framer-motion';

// function Tracks() {
//   const tracks = [
//     {
//       id: 1,
//       name: "Web3",
//       icon: <Code size={80} />,
//       description: "Explore blockchain technology, smart contracts, and decentralized applications."
//     },
//     {
//       id: 2,
//       name: "AI/ML",
//       icon: <Brain size={80} />,
//       description: "Build innovative solutions using artificial intelligence and machine learning."
//     },
//     {
//       id: 3,
//       name: "Fintech",
//       icon: <Wallet size={80} />,
//       description: "Revolutionize financial services with cutting-edge technology."
//     },
//     {
//       id: 4,
//       name: "HealthCare",
//       icon: <Heart size={80} />,
//       description: "Create solutions that improve healthcare delivery and patient outcomes."
//     },
//     {
//       id: 5,
//       name: "Open Innovation",
//       icon: <Lightbulb size={80} />,
//       description: "Think outside the box and bring your innovative ideas to life."
//     },
//     {
//       id: 6,
//       name: "Edtech",
//       icon: <BookOpen size={80} />,
//       description: "Transform education through technology and digital learning solutions."
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div id="tracks" className="min-h-screen py-20 px-6 relative">
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-center tracking-wider text-amber-200"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         CHOOSE YOUR QUEST
//       </motion.h2>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
//       >
//         {tracks.map((track) => (
//           <TrackCard key={track.id} track={track} variants={cardVariants} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// function TrackCard({ track, variants }) {
//   return (
//     <motion.div
//       variants={variants}
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//       className="relative"
//     >
//       {/* Main card */}
//       <div className="relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-8 border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20">
//         {/* Icon container with glow */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-amber-700/20 rounded-full filter blur-xl"></div>
//           <div className="relative text-amber-200 mb-6 flex justify-center transition-transform duration-200 hover:scale-105">
//             {track.icon}
//           </div>
//         </div>

//         {/* Content */}
//         <h3 className="text-2xl font-bold text-center mb-4 text-amber-200">
//           {track.name}
//         </h3>
//         <p className="text-amber-200/80 text-center">
//           {track.description}
//         </p>

//         {/* Decorative border */}
//         <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
//       </div>
//     </motion.div>
//   );
// }

// export default Tracks;


import React, { useState } from 'react';
import { Code, Brain, Wallet, Heart, Lightbulb, BookOpen, Cpu, Cog, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function Tracks() {
  const [activeCategory, setActiveCategory] = useState('software');

  const softwareTracks = [
    {
      id: 1,
      name: "Web3",
      icon: <Code size={80} />,
      description: "Explore blockchain technology, smart contracts, and decentralized applications."
    },
    {
      id: 2,
      name: "AI/ML",
      icon: <Brain size={80} />,
      description: "Build innovative solutions using artificial intelligence and machine learning."
    },
    {
      id: 3,
      name: "Fintech",
      icon: <Wallet size={80} />,
      description: "Revolutionize financial services with cutting-edge technology."
    },
    {
      id: 4,
      name: "HealthCare",
      icon: <Heart size={80} />,
      description: "Create solutions that improve healthcare delivery and patient outcomes."
    },
    {
      id: 5,
      name: "Open Innovation",
      icon: <Lightbulb size={80} />,
      description: "Think outside the box and bring your innovative ideas to life."
    },
    {
      id: 6,
      name: "Edtech",
      icon: <BookOpen size={80} />,
      description: "Transform education through technology and digital learning solutions."
    }
  ];

  const hardwareTracks = [
    {
      id: 7,
      name: "IoT",
      icon: <Cpu size={80} />,
      description: "Create connected devices and systems for smart homes, cities, and industries."
    },
    {
      id: 8,
      name: "Robotics",
      icon: <Cog size={80} />,
      description: "Design and build autonomous systems and robots for various applications."
    },
    {
      id: 9,
      name: "Renewable Energy",
      icon: <Zap size={80} />,
      description: "Develop sustainable energy solutions and technologies for a greener future."
    }
  ];

  const tracks = activeCategory === 'software' ? softwareTracks : hardwareTracks;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const toggleBackgroundVariants = {
    initial: {
      boxShadow: "0 0 0px rgba(217, 119, 6, 0.2)"
    },
    animate: {
      boxShadow: ["0 0 5px rgba(217, 119, 6, 0.2)", "0 0 15px rgba(217, 119, 6, 0.4)", "0 0 5px rgba(217, 119, 6, 0.2)"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="tracks" className="min-h-screen py-20 px-6 relative">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center tracking-wider text-amber-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CHOOSE YOUR QUEST
      </motion.h2>

      {/* Toggle Switch */}
      {/* Toggle Switch with Sliding Animation */}
      <div className="flex justify-center mb-12 ">
        <motion.div
          className="bg-stone-800/70 backdrop-blur-sm rounded-full p-1 border border-amber-700/30 inline-flex relative"
          variants={toggleBackgroundVariants}
          initial="initial"
          animate="animate"
        >
          {/* Sliding background */}
                <motion.div
                className="absolute top-1 bottom-1 left-2 right-2 rounded-full bg-amber-700/40 border border-amber-600/50 z-0"
                initial={{
                  width: "50%",
                  left: activeCategory === 'software' ? "0%" : "50%"
                }}
                animate={{
                  left: activeCategory === 'software' ? "0%" : "50%"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                />

                {/* Button text - Software */}
          <button
            className={`px-6 py-2  rounded-full text-lg font-medium transition-all relative z-10 focus:outline-none ${activeCategory === 'software'
                ? 'text-amber-200'
                : 'text-amber-200/60 hover:text-amber-200'
              }`}
            onClick={() => setActiveCategory('software')}
          >
            Software
          </button>

          {/* Button text - Hardware */}
          <button
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all relative z-10 focus:outline-none ${activeCategory === 'hardware'
                ? 'text-amber-200'
                : 'text-amber-200/60 hover:text-amber-200'
              }`}
            onClick={() => setActiveCategory('hardware')}
          >
            Hardware
          </button>
        </motion.div>
      </div>

      <motion.div
        key={activeCategory} 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} variants={cardVariants} />
        ))}
      </motion.div>
    </div>
  );
}

function TrackCard({ track, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      {/* Main card */}
      <div className="relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-8 border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20">
        {/* Icon container with glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-amber-700/20 rounded-full filter blur-xl"></div>
          <div className="relative text-amber-200 mb-6 flex justify-center transition-transform duration-200 hover:scale-105">
            {track.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-center mb-4 text-amber-200">
          {track.name}
        </h3>
        <p className="text-amber-200/80 text-center">
          {track.description}
        </p>

        {/* Decorative border */}
        <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

export default Tracks;