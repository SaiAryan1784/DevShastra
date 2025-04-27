import React from "react";
import { motion } from "framer-motion";

const sponsors = {
  organisers: [
    {
      alt: "CodeChef ABES Chapter",
      link: "https://codechefabesec.netlify.app",
      name: "CodeChef ABESEC Chapter",
      image: "/logo_ccnew.png",
      level: "organiser"
    },
    {
      alt: "GENERO logo",
      link: "#",
      name: "Genero'25",
      image: "/genero.svg",
      level: "organiser"
    }
  ],
  // venuePartner: [
  //   {
  //     alt: "Abes logo",
  //     link: "https://abes.ac.in/",
  //     name: "ABES Engineering College",
  //     image: "/logoabes.png",
  //     level: "venue"
  //   }
  // ],
  gold: [
    {
      alt: "DEVFOLIO LOGO",
      link: "https://devfolio.co/",
      name: "Devfolio",
      image: "/Devfolio_Logo-White.svg",
      level: "gold"
    },
    {
      alt: "GENERO LOGO",
      link: "https://devshastra.tech/",
      name: "Genero",
      image: "/genero.svg",
      level: "gold"
    }
  ],
  silver: [
    {
      alt: "ETHINDIA LOGO",
      link: "https://ethindia2024.devfolio.co/",
      name: "ETHIndia",
      image: "/ethindia-light.svg",
      level: "silver"
    },
    {
      alt: "CODECRAFTERS LOGO",
      link: "https://codecrafters.io/",
      name: "CodeCrafters",
      image: "/codecrafters.png",
      level: "silver"
    }
  ],
  bronze: [
    {
      alt: "GITHUB LOGO",
      link: "https://github.com/", 
      name: "GitHub",
      image: "/github-mark-white.svg",
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
  switch (level) {
    case 'venue':
      return {
        cardBg: "bg-gradient-to-br from-purple-900/30 to-stone-900/90",
        borderColor: "border-purple-500/50",
        hoverBorder: "hover:border-purple-400",
        shadow: "shadow-purple-700/30 hover:shadow-purple-500/30",
        nameColor: "text-purple-300",
        size: "md:w-[450px] h-36"
      };
    case 'organiser':
      return {
        cardBg: "bg-gradient-to-br from-blue-900/30 to-stone-900/90",
        borderColor: "border-blue-500/50",
        hoverBorder: "hover:border-blue-400",
        shadow: "shadow-blue-700/30 hover:shadow-blue-500/30",
        nameColor: "text-blue-300",
        size: "md:w-[460px] h-36"
      };
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
    <motion.a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`relative w-full ${styles.size} block`}
    >
      <div className={`relative ${styles.cardBg} backdrop-blur-md rounded-xl p-6 border ${styles.borderColor} shadow-lg transition-all duration-300 ${styles.hoverBorder} hover:shadow-xl ${styles.shadow} h-full`}>
        <div className="flex items-center gap-6 h-full">
          <div className="w-24 h-24 relative flex-shrink-0 flex items-center justify-center">
            <img
              src={sponsor.image}
              alt={sponsor.alt}
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
    </motion.a>
  );
};

const SponsorSection = ({ title, sponsors, level }) => {
  // Set text color based on level
  let titleColor = "text-amber-300"; // default

  if (level === 'venue') {
    titleColor = "text-purple-300";
  } else if (level === 'organiser') {
    titleColor = "text-blue-300";
  } else if (level === 'gold') {
    titleColor = "text-amber-300";
  } else if (level === 'silver') {
    titleColor = "text-slate-200";
  } else if (level === 'bronze') {
    titleColor = "text-orange-200";
  }

  return (
    <div className="mb-20 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-center text-3xl font-bold mb-12 tracking-wider ${titleColor}`}
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
};

function Sponsors() {
  return (
    <div
      id="sponsors"
      className="relative py-28 px-6 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-orange-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-12 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>
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
            Our incredible Partners make this event possible, bringing innovation and opportunities to our community.
          </p>
        </motion.div>

        <div className="space-y-24">
          <SponsorSection
            title="ORGANISERS"
            sponsors={sponsors.organisers}
            level="organiser"
          />
          {/* <SponsorSection
            title="VENUE PARTNER"
            sponsors={sponsors.venuePartner}
            level="venue"
          /> */}
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