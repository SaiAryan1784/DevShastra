import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Tracks from './components/Tracks/Tracks.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Faq from './components/Faq/Faq.jsx'
import Prizes from './components/Prizes/Prizes.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,

      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/tracks',
        element: <Tracks />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      },
      {
        path: '/sponsors',
        element: <Sponsors />,

      },
      {
        path: '/prizes',
        element: <Prizes />,
      },
      {
        path: '/faq',
        element: <Faq />,
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>

    </RouterProvider>

  </StrictMode>,
)
