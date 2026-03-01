import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/AboutUs//About'
import PackageCategory from './pages/PackageCategory/PackageCategory'
import TourDetails from './pages/TourDetails/TourDetails'
import Footer from './components/Footer/Footer'
import FQ from './pages/F&Q/F&Q'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
