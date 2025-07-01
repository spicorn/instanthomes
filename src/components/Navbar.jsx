import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Special handler for Home button
  const handleHomeClick = (e) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setOpen(false)
    } else {
      setOpen(false)
      navigate('/')
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg animate-fade-in-up transition-all duration-300 border-b border-primary/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-extrabold text-xl text-primary drop-shadow-sm" onClick={handleHomeClick} end>
          <span className="bg-primary text-white rounded-full px-2 py-1 text-lg">IH</span>
          <span className="hidden sm:inline text-dark">Instant Homes</span>
        </NavLink>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => link.label === 'Home' ? (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-dark font-medium hover:text-primary transition-colors duration-200 px-2 py-1 rounded hover:bg-primary/10 ${isActive && isHome ? 'bg-primary/10 text-primary font-bold' : ''}`
              }
              onClick={handleHomeClick}
              end
            >
              {link.label}
            </NavLink>
          ) : (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-dark font-medium hover:text-primary transition-colors duration-200 px-2 py-1 rounded hover:bg-primary/10 ${isActive && location.pathname === link.to ? 'bg-primary/10 text-primary font-bold' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <svg className={`w-7 h-7 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 z-40 bg-dark/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)} />
      <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 p-8 pt-20">
          {navLinks.map(link => link.label === 'Home' ? (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-dark font-semibold text-lg hover:text-primary transition-colors duration-200 ${isActive && isHome ? 'text-primary font-bold' : ''}`
              }
              onClick={handleHomeClick}
              end
            >
              {link.label}
            </NavLink>
          ) : (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-dark font-semibold text-lg hover:text-primary transition-colors duration-200 ${isActive && location.pathname === link.to ? 'text-primary font-bold' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 