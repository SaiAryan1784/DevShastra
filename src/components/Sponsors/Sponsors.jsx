import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Gold Sponsor",
    image: "/Devfolio_Logo-White.svg",
    bgColor: "rgba(171, 123, 67, 0.2)", // glass style
    borderColor: "#AB7B43",
    blurColor: "#AB7B43",
  },
  {
    name: "Silver Sponsor",
    image: "/ethindia-light.svg",
    bgColor: "rgba(137, 67, 42, 0.2)",
    borderColor: "#89432A",
    blurColor: "#89432A",
  },
  {
    name: "Bronze Sponsor",
    image: "/images/bronze-sponsor.png",
    bgColor: "rgba(88, 36, 34, 0.2)",
    borderColor: "#582422",
    blurColor: "#582422",
  },
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

function Sponsors() {
  return (
    <div
      id="sponsors"
      className="relative py-20 px-6 bg-[#331316] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#AB7B43] opacity-20 rounded-full blur-3xl z-0" />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-14 z-10 relative tracking-widest"
      >
        SPONSORS
      </motion.h2>

      <div className="flex justify-center gap-12 flex-wrap z-10 relative">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-64 h-60 flex flex-col justify-center items-center rounded-2xl p-6 backdrop-blur-md bg-opacity-10 border hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
            style={{
              backgroundColor: sponsor.bgColor,
              borderColor: sponsor.borderColor,
              borderWidth: "1.5px",
            }}
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="w-56 h-auto object-contain mx-auto"
            />
            <p className="mt-6 text-xl font-semibold text-center tracking-wide">
              {sponsor.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
