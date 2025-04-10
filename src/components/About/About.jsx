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
    const cards = containerRef.current.querySelectorAll('.floaty');
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
    <div style={styles.page} ref={containerRef}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .glow-border {
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 0 10px #AB7B43, 0 0 20px #89432A inset;
          animation: pulse 3s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 10px #AB7B43, 0 0 20px #89432A inset;
          }
          50% {
            box-shadow: 0 0 25px #89432A, 0 0 40px #AB7B43 inset;
          }
        }
      `}</style>

      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.description}>
        We are the Technical Society of ABES Engineering College, hosting the annual fest <strong>Genero</strong>.
        A celebration of code, creativity, and community, Genero brings together curious minds, bold ideas, and futuristic visions.
        Join us as we shape tomorrow—one line of code at a time.
      </p>

      <div style={styles.cardContainer}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="floaty glow-border"
            style={styles.card}
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
              style={styles.icon}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
              }}
            >
              {card.icon}
            </motion.div>
            <div style={styles.title}>{card.title}</div>
            <div style={styles.text}>{card.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Cinzel Decorative', cursive",
    backgroundColor: '#331316',
    color: '#fcebd5',
    padding: '4rem 2rem',
    textAlign: 'center',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: '#AB7B43',
    textShadow: '0 0 10px #89432A',
  },
  description: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 4rem',
    lineHeight: '1.6',
    color: '#e4d3ba',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  card: {
    width: '250px',
    height: '320px',
    background: 'linear-gradient(to bottom right, rgba(137, 67, 42, 0.3), rgba(171, 123, 67, 0.1))',
    borderRadius: '20px',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.4s ease',
    position: 'relative',
    color: '#fff',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#AB7B43',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#f9d8a1',
  },
  text: {
    fontSize: '1rem',
    color: '#f0e3ce',
    textAlign: 'center',
  },
};

export default About;