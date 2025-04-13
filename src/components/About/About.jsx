import { motion } from "framer-motion"
import { Code, Brain, Trophy, Sparkles } from "lucide-react"

export default function About() {
  const cards = [
    {
      icon: <Code className="h-10 w-10 text-amber-200" />,
      title: "Web3 Innovation",
      description: "Dive into blockchain and decentralized applications with our dedicated Web3 track.",
    },
    {
      icon: <Brain className="h-10 w-10 text-amber-200" />,
      title: "AI/ML Track",
      description: "Create cutting-edge solutions using artificial intelligence and machine learning.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-amber-200" />,
      title: "Amazing Prizes",
      description: "Compete for prizes worth ₹1,00,000+ and exclusive sponsorship opportunities.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-amber-200" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry experts throughout your 24-hour innovation journey.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-center tracking-wider text-amber-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DECODE THE JOURNEY
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-amber-100/90 text-center leading-relaxed max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          DevShastra is ABES Engineering College's premier hackathon, bringing together the brightest minds for an exhilarating 24-hour journey of innovation. Transform your ideas into impactful solutions while collaborating with fellow innovators.
        </motion.p>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative rounded-xl p-8 flex flex-col items-center text-center bg-stone-800/70 backdrop-blur-sm border border-amber-700/30 shadow-lg transition-all duration-200 hover:border-amber-600/50 hover:shadow-amber-900/20"
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/30">
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-amber-200 mb-4">{card.title}</h3>

              {/* Description */}
              <p className="text-amber-100/80 text-lg">{card.description}</p>

              {/* Decorative border */}
              <div className="absolute top-1 left-1 right-1 bottom-1 border border-amber-700/10 rounded-lg pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}