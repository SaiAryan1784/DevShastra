import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Prizes from './components/Prizes/Prizes.jsx'
import Faq from './components/Faq/Faq.jsx'


function Layout() {
  return (
    <>
    <Header/>
    <Timeline />
    <Home />
    <About />
    <Tracks />
    <Sponsors />
    <Prizes />
    <Faq />
    {/* <Footer /> */}
    </>
  )
}

export default Layout