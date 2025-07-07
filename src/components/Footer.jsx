import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const socials = [
  { name: 'Facebook', url: '#', icon: <FaFacebook /> },
  { name: 'Instagram', url: '#', icon: <FaInstagram /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
]

const iconVariants = {
  hover: { scale: 1.2, rotate: 8, boxShadow: '0 4px 16px #68AAFF44' }
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce-in bottom-4 right-4 sm:bottom-6 sm:right-6"
      style={{ minWidth: 48, minHeight: 48 }}
      aria-label="Back to top"
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  )
}

const Footer = () => (
  <>
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="w-full bg-white/70 backdrop-blur-md border-t border-primary/20 py-8 px-4 sm:px-8 flex flex-col items-center gap-4 animate-fade-in-up"
  >
    {/* Animated Gradient Circles */}
    <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-primary/30 via-primary/20 to-dark/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-2xl animate-blob2" />
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="font-extrabold text-xl tracking-wide flex items-center gap-2">
          <span className="bg-primary text-white rounded-full px-2 py-1 text-lg">IH</span>
          <span className="hidden sm:inline text-dark">Instant Homes</span>
        </div>
        <div className="text-sm text-primary/80">&copy; {new Date().getFullYear()} Instant Homes. All rights reserved.</div>
      </div>
      <nav className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium">
        <NavLink to="/about" className={({isActive}) => `hover:underline hover:text-primary transition ${isActive ? 'text-primary font-bold underline' : ''}`}>About</NavLink>
        <NavLink to="/portfolio" className={({isActive}) => `hover:underline hover:text-primary transition ${isActive ? 'text-primary font-bold underline' : ''}`}>Portfolio</NavLink>
        <NavLink to="/contact" className={({isActive}) => `hover:underline hover:text-primary transition ${isActive ? 'text-primary font-bold underline' : ''}`}>Contact</NavLink>
      </nav>
      <div className="flex gap-4 justify-center md:justify-end">
        {socials.map(s => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-primary hover:text-dark text-2xl transition-colors duration-200"
            title={s.name}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
    <BackToTopButton />
  </>
)

export default Footer 