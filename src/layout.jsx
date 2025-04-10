import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Prizes from './components/Prizes/Prizes.jsx'
import Faq from './components/Faq/Faq.jsx'
import ThemeSection from './components/Theme.jsx'
import { motion, useScroll, useSpring } from 'framer-motion'
import BackgroundGrid from './components/BackgroundGrid/BackgroundGrid'
import './styles/layout.css'

function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    rest: 0.001
  });

  return (
    <>
      <div
        className='min-h-screen text-white relative overflow-hidden'
        style={{
          background: 'linear-gradient(to bottom, #2e1f26, #1c1c2a, #1c1c2a, #0f1a15)'
        }}
      >
        <Home />
        {/* <div className="relative"> */}
        {/* <BackgroundGrid /> */}
        <div className="relative z-10">
          <Header />
          <About />
          <ThemeSection />
          <Tracks />
          <Timeline />
          <Sponsors />
          <Prizes />
          <Faq />
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Layout



