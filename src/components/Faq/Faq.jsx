import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "When do I get the magical scroll of event details? 📜",
    answer: "Your owl (okay, email) will arrive 5 days before the event with all the enchanted details. No Hogwarts acceptance letter, but just as exciting!"
  },
  {
    question: "Help! I'm a solo player in this multiplayer game! 🎮",
    answer: "Fear not, lone wolf! Our matchmaking system (think tech-dating but for coding) will help you find your dream team. No swiping required!"
  },
  {
    question: "Can I bring my pre-built project from my secret laboratory? 🧪",
    answer: "Nice try, but nope! All code must be fresh and created during the hackathon. Think of it as cooking a meal - no pre-cooked ingredients allowed!"
  },
  {
    question: "Is this quest going to cost me gold coins? 💰",
    answer: "Not a single rupee! This adventure is completely free. Save your money for energy drinks and midnight snacks instead!"
  },
  {
    question: "What weapons (tools) should I bring to battle? 🛠️",
    answer: "Your trusty laptop, charger (very important!), and your brain loaded with creativity. We'll provide the wifi, snacks, and good vibes!"
  },
  {
    question: "Will there be wise mentors to guide our quest? 🧙‍♂️",
    answer: "Indeed! Our council of tech wizards (industry experts) will be there to help when you're stuck or need direction. They don't have long beards, but they do have long experience!"
  },
  {
    question: "What if my code decides to throw a tantrum? 😱",
    answer: "Don't panic! Our technical support team (aka the bug busters) will be available 24/7 during the event. They've seen it all and fixed most of it!"
  }
];

import PropTypes from "prop-types";

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="mb-4 border-b border-[#89432A] pb-4">
    <button
      onClick={onClick}
      className="w-full text-left text-lg md:text-xl font-semibold text-[#AB7B43] hover:text-white transition duration-200"
    >
      {faq.question}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.p
          className="mt-2 text-[#e2ddd8] leading-relaxed"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25 }}
        >
          {faq.answer}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
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
    <div
      id="faq"
      className="relative pt-20 pb-16 px-4 text-white"
      style={{
        // background: "linear-gradient(to bottom, #331316, #582422)",
      }}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#d69040] mb-12">
        Curious Coder's Guide 🤔
      </h2>

      <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-[#AB7B43]/30 rounded-xl p-6 md:p-10 shadow-xl">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
