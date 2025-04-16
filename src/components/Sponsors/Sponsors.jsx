// import React from "react";
// import { motion } from "framer-motion";

// const sponsors = {
//   gold: [
//     {
//       name: "Devfolio",
//       image: "/Devfolio_Logo-White.svg",
//       level: "gold"
//     }
//   ],
//   silver: [
//     {
//       name: "ETHIndia",
//       image: "/ethindia-light.svg",
//       level: "silver"
//     },
//     {
//       name: "Polygon",
//       image: "/polygon.png",
//       level: "silver"
//     }
//   ],
//   bronze: [
//     {
//       name: "Coming Soon",
//       image: "/coming_soon.png",
//       level: "bronze"
//     }
//   ]
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//       type: "spring",
//       stiffness: 70,
//     },
//   }),
// };

// const SponsorSection = ({ title, sponsors }) => (
//   <div className="mb-16 last:mb-0">
//     <motion.h3
//       initial={{ opacity: 0, y: -20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-center text-2xl font-bold mb-8 tracking-wider text-amber-200"
//     >
//       {title}
//     </motion.h3>
//     <div className="flex justify-center flex-wrap gap-6">
//       {sponsors.map((sponsor, index) => (
//         <motion.div
//           key={index}
//           variants={cardVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={index}
//           whileHover={{ y: -5 }}
//           transition={{ duration: 0.2 }}
//           className="relative w-full md:w-[400px]"
//         >
//           <div className="relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-4 border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20 h-32">
//             <div className="flex items-center gap-4">
//               <div className="w-24 h-24 relative flex-shrink-0">
//                 <img
//                   src={sponsor.image}
//                   alt={sponsor.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h4 className="text-lg font-semibold text-amber-200">
//                   {sponsor.name}
//                 </h4>
//               </div>
//             </div>
//             {/* Decorative border */}
//             <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );

// function Sponsors() {
//   return (
//     <div
//       id="sponsors"
//       className="relative py-20 px-6 text-white overflow-hidden"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center text-4xl font-bold mb-16 tracking-wider text-amber-200"
//       >
//         POWERED BY GIANTS
//       </motion.h2>

//       <div className="max-w-7xl mx-auto">
//         <SponsorSection
//           title="GOLD SPONSORS"
//           sponsors={sponsors.gold}
//         />
//         <SponsorSection
//           title="SILVER SPONSORS"
//           sponsors={sponsors.silver}
//         />
//         <SponsorSection
//           title="BRONZE SPONSORS"
//           sponsors={sponsors.bronze}
//         />
//       </div>
//     </div>
//   );
// }

// export default Sponsors;


import React from "react";
import { motion } from "framer-motion";

const sponsors = {
  gold: [
    {
      name: "DEVFOLIO LOGO",
      image: "/Devfolio_Logo-White.svg",
      level: "gold"
    },
    {
      name: "GENERO LOGO",
      image: "/genero.svg",
      level: "gold"
    }
  ],
  silver: [
    {
      name: "ETHINDIA LOGO",
      image: "/ethindia-light.svg",
      level: "silver"
    },
    {
      name: "POLYGON LOGO",
      image: "/polygon.png",
      level: "silver"
    }
  ],
  bronze: [
    {
      name: "COMING SOON",
      image: "/coming_soon.png",
      level: "bronze"
    }
  ]
};

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 70,
    },
  }
};

// Get tier specific styles
const getTierStyles = (level) => {
  switch(level) {
    case 'gold':
      return {
        cardBg: "bg-gradient-to-br from-amber-900/30 to-stone-900/90",
        borderColor: "border-amber-500/50",
        hoverBorder: "hover:border-amber-400",
        shadow: "shadow-amber-700/30 hover:shadow-amber-500/30",
        nameColor: "text-amber-300",
        size: "md:w-[400px] h-34"
      };
    case 'silver':
      return {
        cardBg: "bg-gradient-to-br from-slate-800/30 to-stone-900/90",
        borderColor: "border-slate-400/40",
        hoverBorder: "hover:border-slate-300",
        shadow: "shadow-slate-700/20 hover:shadow-slate-500/20",
        nameColor: "text-slate-200",
        size: "md:w-[400px] h-32"
      };
    case 'bronze':
      return {
        cardBg: "bg-gradient-to-br from-orange-900/20 to-stone-900/90",
        borderColor: "border-orange-700/30",
        hoverBorder: "hover:border-orange-600",
        shadow: "shadow-orange-900/20 hover:shadow-orange-800/20",
        nameColor: "text-orange-200",
        size: "md:w-[350px] h-28"
      };
    default:
      return {
        cardBg: "bg-stone-800/70",
        borderColor: "border-amber-700/30",
        hoverBorder: "hover:border-amber-600/50",
        shadow: "shadow-amber-900/20",
        nameColor: "text-amber-200",
        size: "md:w-[400px] h-32"
      };
  }
};

const SponsorCard = ({ sponsor, index }) => {
  const styles = getTierStyles(sponsor.level);
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      className={`relative w-full ${styles.size}`}
    >
      <div className={`relative ${styles.cardBg} backdrop-blur-md rounded-xl p-6 border ${styles.borderColor} shadow-lg transition-all duration-300 ${styles.hoverBorder} hover:shadow-xl ${styles.shadow} h-full`}>
        <div className="flex items-center gap-6 h-full">
          <div className="w-24 h-24 relative flex-shrink-0 flex items-center justify-center">
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <div className="flex-grow">
            <h4 className={`text-xl font-bold ${styles.nameColor}`}>
              {sponsor.name}
            </h4>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1 left-1 right-1 bottom-1 border border-white/5 rounded-lg pointer-events-none"></div>
        <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
      </div>
    </motion.div>
  );
};

const SponsorSection = ({ title, sponsors, level }) => (
  <div className="mb-20 last:mb-0">
    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center text-3xl font-bold mb-12 tracking-wider ${level === 'gold' ? 'text-amber-300' : level === 'silver' ? 'text-slate-200' : 'text-orange-200'}`}
    >
      {title}
    </motion.h3>
    <motion.div 
      className="flex flex-wrap justify-center gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} index={index} />
      ))}
    </motion.div>
  </div>
);

function Sponsors() {
  return (
    <div
      id="sponsors"
      className="relative py-28 px-6 text-white overflow-hidden bg-gradient-to-b from-stone-900 to-black"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-orange-700/10 rounded-full blur-3xl"></div>
      </div>
    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold tracking-wider text-amber-200 mb-4">
            POWERED BY GIANTS
          </h2>
          <p className="text-lg text-amber-100/60 max-w-2xl mx-auto">
            Our incredible sponsors make this event possible, bringing innovation and opportunities to our community.
          </p>
        </motion.div>

        <div className="space-y-24">
          <SponsorSection
            title="GOLD SPONSORS"
            sponsors={sponsors.gold}
            level="gold"
          />
          <SponsorSection
            title="SILVER SPONSORS"
            sponsors={sponsors.silver}
            level="silver"
          />
          <SponsorSection
            title="BRONZE SPONSORS"
            sponsors={sponsors.bronze}
            level="bronze"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Sponsors;