import { useEffect } from 'react'
import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/AboutUs//About'
import Packages from './pages/Packages/Packages'
import PackageCategory from './pages/PackageCategory/PackageCategory'
import TourDetails from './pages/TourDetails/TourDetails'
import Footer from './components/Footer/Footer'
import FQ from './pages/F&Q/F&Q'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      window.history.scrollRestoration = 'auto'
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FQ />} />
        <Route path="/packages/:category" element={<PackageCategory />} />
        <Route path="/tours/:tourId" element={<TourDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
