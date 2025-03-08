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
    <div
      className='min-h-screen'
      style={{
        backgroundImage: "url('/background.svg')",
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        backgroundColor: '#fff4e4'
      }}
    >
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
  )
}

export default Layout