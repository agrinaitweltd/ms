import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  { name: 'Mini Detail', price: '£50–£65', icon: '✦', desc: 'Quick refresh — exterior wash, interior vacuum, window clean.' },
  { name: 'Full Detail', price: '£100–£160', icon: '◈', desc: 'Complete inside-out detail. Our most popular package.', popular: true },
  { name: 'Interior Deep Clean', price: '£60–£90', icon: '⬡', desc: 'Steam clean, shampoo, leather condition, full interior restore.' },
  { name: 'Ceramic Coating', price: '£250–£400', icon: '◉', desc: 'Long-lasting nano ceramic protection — up to 3 years.' },
]

const stats = [
  { value: 500, suffix: '+', label: 'Cars Detailed' },
  { value: 5, suffix: '.0', label: 'Google Rating' },
  { value: 15, suffix: '+', label: 'Reviews' },
  { value: 3, suffix: ' Yrs', label: 'Experience' },
]

const reviews = [
  { name: 'James T.', rating: 5, text: 'Absolutely incredible results. My car looks better than when I bought it. Highly recommend MS Details!', time: '2 weeks ago' },
  { name: 'Sarah M.', rating: 5, text: 'Professional, on time and the attention to detail is second to none. Will definitely be booking again.', time: '1 month ago' },
  { name: 'Ryan K.', rating: 5, text: 'Got the ceramic coating done — completely transformed my car. Worth every penny.', time: '3 months ago' },
]

function StatItem({ value, suffix, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ textAlign: 'center' }}
    >
      <div style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--blue)', lineHeight: 1 }}>
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
        {label}
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        /* overflow: clip does NOT create a scroll container — safe to use here */
        overflow: 'clip',
        backgroundImage: 'url(/herobg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }} className="grid-overlay">

        {/* Dark overlay so text stays readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.65) 50%, rgba(8,8,8,0.80) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '50%', right: '-10%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Blueprint corner accents */}
        {['top-left','top-right','bottom-left','bottom-right'].map(pos => (
          <div key={pos} style={{
            position: 'absolute',
            ...(pos.includes('top') ? { top: '2rem' } : { bottom: '2rem' }),
            ...(pos.includes('left') ? { left: '2rem' } : { right: '2rem' }),
            width: '40px', height: '40px',
            borderTop: pos.includes('top') ? '1px solid rgba(0,102,255,0.4)' : 'none',
            borderBottom: pos.includes('bottom') ? '1px solid rgba(0,102,255,0.4)' : 'none',
            borderLeft: pos.includes('left') ? '1px solid rgba(0,102,255,0.4)' : 'none',
            borderRight: pos.includes('right') ? '1px solid rgba(0,102,255,0.4)' : 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
        ))}

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', paddingTop: '6rem', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.2)',
                padding: '0.5rem 1rem', marginBottom: '2rem',
              }}
            >
              <span style={{ color: '#f5c518', fontSize: '0.75rem' }}>★★★★★</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                5.0 · 15 Reviews on Google
              </span>
              <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ fontSize: '0.6875rem', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Wolverhampton
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Premium<br />
              <span style={{ color: 'var(--blue)' }}>Car</span> Detailing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2.5rem' }}
            >
              Professional car detailing in Wolverhampton. From a Mini Detail to a Full Deep Clean with Ceramic Coating — we restore every vehicle to its very best.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}
            >
              <a href="tel:07916266287" className="btn-primary" style={{ fontSize: '0.8125rem' }}>
                <span>☎</span> Book Now — 07916 266287
              </a>
              <Link to="/services" className="btn-outline">
                View Services
                <span style={{ fontSize: '0.75rem' }}>→</span>
              </Link>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8125rem' }}
            >
              <span style={{ color: 'var(--blue)', fontSize: '0.875rem' }}>⊙</span>
              93 Old Fallings Cres, Wolverhampton WV10 9PS
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          zIndex: 1,
        }} className="animate-bounce-scroll">
          <span style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--blue), transparent)' }} />
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: '7rem 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <div>
                <div className="section-tag">Our Services</div>
                <h2 className="section-title">What We <span>Offer</span></h2>
              </div>
              <Link to="/services" className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.625rem 1.5rem' }}>
                View All Services →
              </Link>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1}>
                <div className="card" style={{ padding: '2rem', position: 'relative' }}>
                  {s.popular && (
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: 'var(--blue)', fontSize: '0.5625rem',
                      fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
                      padding: '0.25rem 0.625rem', color: '#fff',
                    }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--blue)' }}>{s.price}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #080808 50%, #0a1020 100%)',
        borderTop: '1px solid rgba(0,102,255,0.1)',
        borderBottom: '1px solid rgba(0,102,255,0.1)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-grid">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} delay={i * 0.15} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ padding: '7rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="section-tag">Our Work</div>
              <h2 className="section-title">Recent <span>Gallery</span></h2>
            </div>
            <Link to="/gallery" className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.625rem 1.5rem' }}>
              View Full Gallery →
            </Link>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 220px)', gap: '1rem' }} className="gallery-preview-grid">
            {[...Array(5)].map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.08} style={{ gridColumn: i === 0 ? 'span 2' : 'auto', gridRow: i === 0 ? 'span 2' : 'auto' }}>
                <div className="img-placeholder" style={{ width: '100%', height: '100%', minHeight: '220px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.querySelector('.overlay').style.opacity = '1' }}
                  onMouseLeave={e => { e.currentTarget.querySelector('.overlay').style.opacity = '0' }}
                >
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.25rem' }}>◈</span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Photo</span>
                  </div>
                  <div className="overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,102,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0, transition: 'opacity 0.3s',
                  }}>
                    <div style={{ fontSize: '1.5rem', color: '#fff' }}>+</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .gallery-preview-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 480px) { .gallery-preview-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: '7rem 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            {/* Image */}
            <AnimatedSection direction="right">
              <div className="img-placeholder cut-corner" style={{ aspectRatio: '4/3', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ width: '60px', height: '60px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem' }}>◈</span>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>About Image</span>
                </div>
                {/* Accent border */}
                <div style={{
                  position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                  width: '120px', height: '120px',
                  border: '2px solid rgba(0,102,255,0.3)',
                  zIndex: -1,
                }} />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="left">
              <div className="section-tag">About MS Details</div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Precision. <span>Passion.</span><br />Perfection.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9375rem' }}>
                Based in Wolverhampton, MS Details is a premium car detailing service dedicated to restoring and protecting every vehicle to its very best. We use professional-grade products with no shortcuts.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {['Fully insured', 'Professional-grade products', 'No shortcuts', 'Flexible bookings', 'Transparent pricing'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--blue)', fontSize: '0.75rem' }}>▶</span>
                    <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline" style={{ fontSize: '0.75rem' }}>Learn More →</Link>
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* ── REVIEWS PREVIEW ── */}
      <section style={{ padding: '7rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="reviews-grid">
            {reviews.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{r.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.time}</div>
                    </div>
                    <div className="stars" style={{ fontSize: '0.875rem' }}>{'★'.repeat(r.rating)}</div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                    "{r.text}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/reviews" className="btn-outline">Read All Reviews →</Link>
          </AnimatedSection>
        </div>
        <style>{`
          @media (max-width: 900px) { .reviews-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 600px) and (max-width: 900px) { .reviews-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #001133 0%, #003399 50%, #001133 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <AnimatedSection>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Ready?</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Book Your Detail<br />Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Transform your car. Contact us today and we'll get you booked in at a time that suits you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:07916266287" className="btn-primary">
                <span>☎</span> Call 07916 266287
              </a>
              <Link to="/contact" className="btn-outline">
                Online Booking →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
