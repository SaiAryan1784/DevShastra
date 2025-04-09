import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Prizes from './components/Prizes/Prizes.jsx'
import Faq from './components/Faq/Faq.jsx'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import BackgroundGrid from './components/BackgroundGrid/BackgroundGrid'
import './styles/layout.css'

function layout() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    rest: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className='min-h-screen text-white relative overflow-hidden'
        style={{
          background: 'linear-gradient(to bottom, #2e1f26, #1c1c2a, #1c1c2a, #0f1a15)'
        }}
      >
        <BackgroundGrid scrollPosition={scrollPosition} />

        <div className="relative z-10">
          <Header />
          <Home />
          <About />
          <Tracks />
          <Timeline />
          <Sponsors />
          <Prizes />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default layout