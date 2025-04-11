import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    { icon: '🌟', title: 'Innovate', text: 'Explore the next frontier of innovation with us.' },
    { icon: '🛠️', title: 'Build', text: 'Turn ideas into impactful tech creations.' },
    { icon: '💡', title: 'Learn', text: 'Upskill and grow through challenges and collaboration.' },
    { icon: '🤝', title: 'Collaborate', text: 'Network with passionate developers and leaders.' }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.About-floaty');
    cards.forEach((card) => {
      card.animate(
        [
          { transform: 'translateY(0px) translateX(0px)' },
          { transform: `translateY(${Math.random() * 10}px) translateX(${Math.random() * 10}px)` },
          { transform: 'translateY(0px) translateX(0px)' }
        ],
        {
          duration: 3000 + Math.random() * 2000,
          iterations: Infinity,
          direction: 'alternate',
          easing: 'ease-in-out',
        }
      );
    });
  }, []);

  return (
    <div className="About-page" ref={containerRef}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
        rel="stylesheet"
      />
      
      {/* Scoped styles with About- prefix */}
      <style jsx>{`
        .About-page {
          font-family: 'Cinzel Decorative', cursive;
          background-color: #331316;
          color: #fcebd5;
          padding: 4rem 2rem;
          text-align: center;
          min-height: 100vh;
        }

        .About-heading {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #AB7B43;
          text-shadow: 0 0 10px #89432A;
        }

        .About-description {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 4rem;
          line-height: 1.6;
          color: #e4d3ba;
        }

        .About-cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .About-card {
          width: 250px;
          height: 320px;
          background: linear-gradient(to bottom right, rgba(137, 67, 42, 0.3), rgba(171, 123, 67, 0.1));
          border-radius: 20px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.4s ease;
          position: relative;
          color: #fff;
        }

        .About-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #AB7B43;
        }

        .About-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #f9d8a1;
        }

        .About-text {
          font-size: 1rem;
          color: #f0e3ce;
          text-align: center;
        }

        .About-glow-border {
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 0 10px #AB7B43, 0 0 20px #89432A inset;
          animation: About-pulse 3s infinite;
        }

        @keyframes About-pulse {
          0%, 100% {
            box-shadow: 0 0 10px #AB7B43, 0 0 20px #89432A inset;
          }
          50% {
            box-shadow: 0 0 25px #89432A, 0 0 40px #AB7B43 inset;
          }
        }
      `}</style>

      <h1 className="About-heading">About Us</h1>
      <p className="About-description">
        We are the Technical Society of ABES Engineering College, hosting the annual fest <strong>Genero</strong>.
        A celebration of code, creativity, and community, Genero brings together curious minds, bold ideas, and futuristic visions.
        Join us as we shape tomorrow—one line of code at a time.
      </p>

      <div className="About-cardContainer">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="About-floaty About-glow-border About-card"
            whileHover={{
              rotateY: 15,
              rotateX: -15,
              scale: 1.1,
              transition: { type: 'spring', stiffness: 200, damping: 15 }
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className="About-icon"
              animate={{
                rotate: [0,0]
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
              }}
            >
              {card.icon}
            </motion.div>
            <div className="About-title">{card.title}</div>
            <div className="About-text">{card.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;