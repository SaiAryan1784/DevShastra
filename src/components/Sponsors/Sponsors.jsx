import React from "react";
import { motion } from "framer-motion";

const sponsors = {
  gold: [
    {
      name: "Devfolio",
      image: "/Devfolio_Logo-White.svg",
      level: "gold"
    }
  ],
  silver: [
    {
      name: "ETHIndia",
      image: "/ethindia-light.svg",
      level: "silver"
    }
  ],
  bronze: [
    {
      name: "Bronze Sponsor",
      image: "/images/bronze-sponsor.png",
      level: "bronze"
    }
  ]
};

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

const SponsorSection = ({ title, sponsors }) => (
  <div className="mb-16 last:mb-0">
    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center text-2xl font-bold mb-8 tracking-wider text-amber-200"
    >
      {title}
    </motion.h3>
    <div className="flex justify-center flex-wrap gap-6">
      {sponsors.map((sponsor, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="relative w-full md:w-[400px]"
        >
          <div className="relative bg-stone-800/70 backdrop-blur-sm rounded-xl p-4 border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20 h-24">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-amber-200">
                  {sponsor.name}
                </h4>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

function Sponsors() {
  return (
    <div
      id="sponsors"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-16 tracking-wider text-amber-200"
      >
        POWERED BY GIANTS
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <SponsorSection
          title="GOLD SPONSORS"
          sponsors={sponsors.gold}
        />
        <SponsorSection
          title="SILVER SPONSORS"
          sponsors={sponsors.silver}
        />
        <SponsorSection
          title="BRONZE SPONSORS"
          sponsors={sponsors.bronze}
        />
      </div>
    </div>
  );
}

export default Sponsors;
