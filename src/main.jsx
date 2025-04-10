import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Faq from './components/Faq/Faq.jsx'
import Prizes from './components/Prizes/Prizes.jsx'
import Footer from './components/Footer/Footer.jsx'
import ThemeSection from './components/Theme.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home id="home" />,
      },
      {
        path: '/about',
        element: <About id="about" />,
      },
      {
        path: '/theme.jsx',
        element: <ThemeSection id="theme" />,
      },
      {
        path: '/tracks',
        element: <Tracks id="tracks" />,
      },
      {
        path: '/timeline',
        element: <Timeline id="timeline" />,
      },
      {
        path: '/sponsors',
        element: <Sponsors id="sponsors" />,
      },
      {
        path: '/prizes',
        element: <Prizes id="prizes" />,
      },
      {
        path: '/faq',
        element: <Faq id="faq" />,
      },
      {
        path: '/contactUs',
        element: <Footer id="contactUs" />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
