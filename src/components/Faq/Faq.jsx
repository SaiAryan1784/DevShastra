import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "When will I get hackathon event details?",
    answer:
      "You will receive an email with all details at least 5 days before the event.",
  },
  {
    question: "What if I don’t have a team?",
    answer: "No worries! We’ll help match you with other solo participants.",
  },
  {
    question: "Can I submit projects built before the hackathon?",
    answer: "No. All projects must be built during the event hours only.",
  },
  {
    question: "Is there any registration fee?",
    answer: "Nope! It's absolutely free to participate.",
  },
  {
    question: "Do you allow offline and online combined groups?",
    answer:
      "Yes! We support hybrid teams with both offline and online members.",
  },
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
        background: "linear-gradient(to bottom, #331316, #582422)",
      }}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#d69040] mb-12">
        FAQ
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

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z"
            fill="#331316"
          />
        </svg>
      </div>
    </div>
  );
}

export default Faq;
