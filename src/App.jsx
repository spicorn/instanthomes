import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import Hero from './components/Hero'
import HeroMobile from './components/HeroMobile'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Team from './components/Team'
import MissionVision from './components/MissionVision'
import CompanyStory from './components/CompanyStory'
import CoreValues from './components/CoreValues'
import Partners from './components/Partners'
import PortfolioIntro from './components/PortfolioIntro'
import PortfolioTestimonials from './components/PortfolioTestimonials'
import ContactInfo from './components/ContactInfo'
import ContactFAQ from './components/ContactFAQ'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col">
      {/* Desktop Navbar */}
      <div className="hidden md:block"><Navbar /></div>
      {/* Mobile/Tablet Navbar */}
      <div className="md:hidden"><MobileNavbar /></div>
      <div className="pt-20 sm:pt-24 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 80, backgroundColor: '#68AAFF' }}
            animate={{ opacity: 1, y: 0, backgroundColor: 'transparent' }}
            exit={{ opacity: 0, y: -80, backgroundColor: '#68AAFF' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="min-h-[60vh]"
          >
            <Routes location={location}>
          <Route path="/" element={
            <>
              {/* Desktop Hero */}
              <div className="hidden md:block"><Hero /></div>
              {/* Mobile/Tablet Hero */}
              <div className="md:hidden"><HeroMobile /></div>
              <About />
              <Services />
              <WhyChooseUs />
              <Portfolio />
              <Testimonials />
              <FAQ />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <MissionVision />
              <CompanyStory />
              <CoreValues />
              <Team />
              <Partners />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <PortfolioIntro />
              <Portfolio />
              <PortfolioTestimonials />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ContactInfo />
              <Contact />
              <ContactFAQ />
              <Footer />
            </>
          } />
        </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
