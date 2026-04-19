import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      paddingTop: '4rem',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'var(--blue)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 900, color: '#fff',
              }}>MS</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.08em', color: '#fff', textTransform: 'uppercase' }}>
                MS <span style={{ color: 'var(--blue)' }}>Details</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Professional car detailing in Wolverhampton. Restoring every vehicle to its very best.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['f', 'in', '𝕏'].map(s => (
                <div key={s} style={{
                  width: '36px', height: '36px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >{s}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services & Pricing' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/contact', label: 'Book Now' },
              ].map(l => (
                <Link key={l.to} to={l.to} style={{
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.875rem', transition: 'color 0.3s',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Mini Detail', 'Full Detail', 'Interior Deep Clean', 'Exterior Wash & Wax', 'Paint Enhancement', 'Ceramic Coating'].map(s => (
                <span key={s} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Phone</div>
                <a href="tel:07916266287" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>07916 266287</a>
              </div>
              <div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Location</div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>93 Old Fallings Cres,<br />Wolverhampton WV10 9PS</span>
              </div>
              <div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Booking Policy</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', lineHeight: 1.6 }}>
                  A 20% non-refundable deposit is required to secure your booking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.5rem 0',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            © {year} MS Details. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            Premium Car Detailing · Wolverhampton, UK
          </p>
        </div>
      </div>
    </footer>
  )
}
