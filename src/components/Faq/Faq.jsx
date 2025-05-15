import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "When do I get the magical scroll of event details? 📜",
    answer:
      "Your owl (okay, email) will arrive 5 days before the event with all the enchanted details. No Hogwarts acceptance letter, but just as exciting!",
  },
  {
    question: "Can I bring my pre-built project from my secret laboratory? 🧪",
    answer:
      "Nice try, but nope! All code must be fresh and created during the hackathon. Think of it as cooking a meal - no pre-cooked ingredients allowed!",
  },
  {
    question: "Is this quest going to cost me gold coins? 💰",
    answer:
      "Not a single rupee! This adventure is completely free. Save your money for energy drinks and midnight snacks instead!",
  },
  {
    question: "What weapons (tools) should I bring to battle? 🛠️",
    answer:
      "Your trusty laptop, charger (very important!), and your brain loaded with creativity. We'll provide the wifi, snacks, and good vibes!",
  },
  {
    question: "Will there be wise mentors to guide our quest? 🧙‍♂️",
    answer:
      "Indeed! Our council of tech wizards (industry experts) will be there to help when you're stuck or need direction. They don't have long beards, but they do have long experience!",
  },
  {
    question: "What if my code decides to throw a tantrum? 😱",
    answer:
      "Don't panic! Our technical support team (aka the bug busters) will be available 24/7 during the event. They've seen it all and fixed most of it!",
  },
];

import PropTypes from "prop-types";


const FAQItem = ({ faq, isOpen, onClick, custom }) => (
  <motion.div
    className="mb-4 border-b border-[#89432A] pb-4 relative"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay: custom * 0.08 }}
    layout
    whileHover={{ y: -3, boxShadow: "0 4px 24px 0 rgba(171,123,67,0.13)" }}
  >
    {/* Glowing highlight for open question */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.23, scale: 1 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ duration: 0.35 }}
          className="absolute left-0 top-0 w-full h-full rounded-lg pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #ab7b43 0%, transparent 80%)",
            zIndex: 0,
          }}
        />
      )}
    </AnimatePresence>
    <motion.button
      onClick={onClick}
      className="w-full text-left text-lg md:text-xl font-semibold text-[#AB7B43] flex items-center relative z-10"
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-expanded={isOpen}
    >
      {faq.question}
    </motion.button>
    {/* Animated divider */}
    <motion.div
      className="h-1 w-full rounded-full bg-gradient-to-r from-[#ab7b43]/60 to-transparent mt-2 mb-1"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isOpen ? 1 : 0.6 }}
      transition={{ duration: 0.5, type: "spring" }}
      style={{ originX: 0 }}
    />
    {isOpen && (
  <div style={{ overflow: 'hidden' }}>
    <p className="mt-2 text-[#e2ddd8] leading-relaxed">
      {faq.answer}
    </p>
  </div>
) }
  </motion.div>
);

FAQItem.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      id="faq"
      className="relative pt-20 pb-16 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-[#d69040] mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Curious Coder's Guide 🤔
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-[#AB7B43]/30 rounded-xl p-6 md:p-10 shadow-xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            custom={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Faq;
