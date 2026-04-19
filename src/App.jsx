import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } }
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><Home /></motion.div>} />
        <Route path="/services" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><Services /></motion.div>} />
        <Route path="/gallery" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><Gallery /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><About /></motion.div>} />
        <Route path="/reviews" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><Reviews /></motion.div>} />
        <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit"><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

