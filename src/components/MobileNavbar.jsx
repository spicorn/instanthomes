import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/about#mission-vision', label: 'Mission & Vision' },
  { to: '/about#company-story', label: 'Company Story' },
  { to: '/about#core-values', label: 'Core Values' },
  { to: '/about#team', label: 'Team' },
  { to: '/about#partners', label: 'Partners' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/portfolio#portfolio-intro', label: 'Portfolio Intro' },
  { to: '/portfolio#portfolio-testimonials', label: 'Portfolio Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleHomeClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOpen(false);
    } else {
      setOpen(false);
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-xl bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl flex items-center justify-between px-4 py-2 md:hidden">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="font-extrabold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
      >
        InstaHomes
      </motion.div>
      {/* Hamburger */}
      <button
        className="relative z-50 p-2 rounded-full bg-white/80 border-2 border-blue-300 shadow-lg hover:bg-blue-100 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ minWidth: 44, minHeight: 44 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
      >
        <motion.div
          initial={false}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {open ? <FaTimes size={28} color="#2563eb" /> : <FaBars size={28} color="#2563eb" />}
        </motion.div>
      </button>
      {/* Animated Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700/80 via-blue-300/60 to-blue-100/80 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
          >
            {/* Floating Close Button */}
            <button
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/80 border border-blue-200 shadow-xl hover:bg-blue-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ minWidth: 44, minHeight: 44 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={28} color="#2563eb" />
            </button>
            {/* Glassmorphic Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.08, duration: 0.5, type: 'spring', stiffness: 180 }}
              className="relative bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-200/40 px-8 py-12 flex flex-col items-center gap-2 max-w-xs w-[90vw]"
              style={{ boxShadow: '0 8px 40px 0 rgba(104,170,255,0.18), 0 1.5px 8px 0 rgba(80,120,200,0.10)' }}
            >
              {/* Animated Glowing Border */}
              <div className="absolute -inset-1 rounded-3xl pointer-events-none bg-gradient-to-br from-blue-400/30 via-blue-200/10 to-blue-100/0 blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 z-0 animate-pulse-slow" />
              <nav className="flex flex-col items-center w-full gap-2 font-sans">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="w-full"
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block text-center w-full text-xl font-semibold tracking-wide px-6 py-3 rounded-2xl transition relative
                        bg-gradient-to-r from-white/60 via-blue-50/80 to-blue-100/60
                        text-blue-800 border border-blue-100 shadow-sm
                        hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-blue-900
                        focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${isActive ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg border-blue-300' : ''}`
                      }
                      style={{ fontFamily: 'Sora, ui-sans-serif, system-ui' }}
                      onClick={() => setOpen(false)}
                      end={link.to === '/'}
                    >
                      <span className="inline-block align-middle transition-transform duration-200 group-hover:scale-105">
                        {link.label}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 