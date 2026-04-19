import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
        className="nav-blur"
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'var(--blue)',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 900, color: '#fff', letterSpacing: '0.05em',
            }}>MS</div>
            <div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 800, letterSpacing: '0.08em', color: '#fff', lineHeight: 1, textTransform: 'uppercase' }}>
                MS <span style={{ color: 'var(--blue)' }}>Details</span>
              </div>
              <div style={{ fontSize: '0.5625rem', letterSpacing: '0.25em', color: 'var(--text-secondary)', textTransform: 'uppercase', lineHeight: 1, marginTop: 2 }}>
                Premium Detailing
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {links.map(l => {
              const active = location.pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--blue)' : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.3s',
                    position: 'relative',
                    padding: '4px 0',
                  }}
                  className="nav-link"
                  onMouseEnter={e => { if (!active) e.target.style.color = '#fff' }}
                  onMouseLeave={e => { if (!active) e.target.style.color = 'rgba(255,255,255,0.7)' }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: '2px', background: 'var(--blue)',
                        borderRadius: 1,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="tel:07916266287"
              style={{
                fontSize: '0.8125rem',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s',
              }}
              className="phone-link"
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              <span style={{ color: 'var(--blue)', marginRight: '0.25rem' }}>☎</span> 07916 266287
            </a>

            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.625rem 1.5rem' }}>
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '4px', display: 'none', flexDirection: 'column', gap: '5px',
              }}
              className="hamburger"
              aria-label="Menu"
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '2px',
                  background: '#fff', transition: 'all 0.3s',
                  transformOrigin: 'center',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                    : i === 1 ? 'opacity: 0; scaleX(0)'
                    : 'rotate(-45deg) translate(5px,-5px)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '80px', left: 0, right: 0,
              background: 'rgba(8,8,8,0.98)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              zIndex: 999,
              padding: '1.5rem 2rem 2rem',
            }}
            className="nav-blur"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: location.pathname === l.to ? 'var(--blue)' : '#fff',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .phone-link { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
