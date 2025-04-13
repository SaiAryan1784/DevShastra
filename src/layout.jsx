import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Prizes from './components/Prizes/Prizes.jsx'
import Faq from './components/Faq/Faq.jsx'
import BackgroundAudio from './components/BackgroundAudio/BackgroundAudio.jsx'
// import ThemeSection from './components/Theme.jsx'
import { motion, useScroll, useSpring } from 'framer-motion'
import BackgroundGrid from './components/BackgroundGrid/BackgroundGrid'
import GlowingOrbs from './components/BackgroundGrid/GlowingOrbs'
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
        className='min-h-screen text-white relative overflow-hidden bg-stone-950/95 bg-red-950/10'>
        <BackgroundAudio />
        <Home />
        {/* <div className="relative"> */}
        {/* <BackgroundGrid /> */}
        <div className="relative z-10">
          <Header />
          <div className="relative">
            <GlowingOrbs variant="alternate" />
            <About />
          </div>
          <div className="relative">
            <GlowingOrbs variant="alternate" />
            <Tracks />
          </div>
          <div className="relative">
            <GlowingOrbs variant="default" />
            <Timeline />
          </div>
          <div className="relative">
            <GlowingOrbs variant="alternate" />
            <Sponsors />
          </div>
          <div className="relative">
            <GlowingOrbs variant="default" />
            <Prizes />
          </div>
          <div className="relative">
            <GlowingOrbs variant="alternate" />
            <Faq />
          </div>
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Layout

