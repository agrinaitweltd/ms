import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    name: 'Mini Detail',
    price: '£50',
    priceTo: '£65',
    icon: '///',
    color: '#0066ff',
    duration: '2–3 hrs',
    desc: 'The perfect refresh for a busy schedule. A thorough exterior hand wash, interior vacuum, dashboard wipe-down, and window clean inside and out.',
    includes: ['Hand wash & dry', 'Wheel & tyre clean', 'Interior vacuum', 'Dashboard & trim wipe', 'Window clean (in & out)', 'Air freshener'],
  },
  {
    name: 'Full Detail',
    price: '£100',
    priceTo: '£160',
    icon: '///',
    color: '#0055ee',
    duration: '5–8 hrs',
    popular: true,
    desc: 'Our most popular service. A complete inside-out detail bringing your car back to showroom condition.',
    includes: ['Everything in Mini Detail', 'Clay bar decontamination', 'Machine polish (light)', 'Interior deep vacuum', 'Leather clean & condition', 'Carpet shampoo', 'Engine bay clean', 'Tyre dressing', 'Sealant/wax protection'],
  },
  {
    name: 'Interior Deep Clean',
    price: '£60',
    priceTo: '£90',
    icon: '///',
    color: '#0077cc',
    duration: '3–5 hrs',
    desc: 'A full interior restoration using steam cleaning and hot water extraction. Perfect for vehicles with heavy soiling.',
    includes: ['Steam clean throughout', 'Carpet & mat shampoo', 'Seat shampoo / leather clean', 'Headliner clean', 'Air vent clean', 'Boot clean', 'Odour treatment'],
  },
  {
    name: 'Exterior Wash & Wax',
    price: '£50',
    priceTo: '£80',
    icon: '///',
    color: '#0088ff',
    duration: '2–4 hrs',
    desc: 'A premium exterior detail focused on paint protection and that deep showroom shine.',
    includes: ['Pre-rinse & snow foam', 'Hand wash & dry', 'Wheel detail', 'Clay bar treatment', 'Hand wax application', 'Window polish', 'Tyre & trim dressing'],
  },
  {
    name: 'Paint Enhancement',
    price: '£150',
    priceTo: '£250',
    icon: '///',
    color: '#0044cc',
    duration: '1–2 days',
    desc: 'Single-stage machine polish to remove light scratches, swirl marks, and oxidation — transforming your paint finish.',
    includes: ['Full decontamination wash', 'Clay bar', 'Paint depth reading', 'Single-stage machine polish', 'Panel wipe', 'Sealant protection', 'Dressing all trim'],
  },
  {
    name: 'Ceramic Coating',
    price: '£250',
    priceTo: '£400',
    icon: '///',
    color: '#003399',
    duration: '2–3 days',
    desc: 'The ultimate in paint protection. Nano ceramic coating provides up to 3 years of hydrophobic protection and unrivalled gloss.',
    includes: ['Paint enhancement polish', 'IPA panel wipe', 'Professional ceramic coating', 'Ceramic wheel coating', 'Glass coating', '1–3 year protection', 'Aftercare kit included'],
    premium: true,
  },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 4rem',
        background: 'linear-gradient(180deg, rgba(0,40,120,0.08) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }} className="grid-overlay">
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-tag">Pricing</div>
            <h1 className="section-title">Services & <span>Pricing</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Transparent pricing with no hidden fees. All packages include a pre-detail consultation and aftercare advice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.08}>
                <motion.div
                  className="card"
                  style={{ padding: '2.5rem', cursor: 'pointer', position: 'relative' }}
                  onClick={() => setActive(active === i ? null : i)}
                  whileHover={{ scale: 1.01 }}
                >
                  {s.popular && (
                    <div style={{
                      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) translateY(-50%)',
                      background: 'var(--blue)', padding: '0.25rem 1.25rem',
                      fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff',
                      whiteSpace: 'nowrap',
                    }}>// Most Popular</div>
                  )}
                  {s.premium && (
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: 'linear-gradient(135deg, #002266, #0044cc)',
                      border: '1px solid rgba(0,102,255,0.4)',
                      padding: '0.2rem 0.75rem',
                      fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)',
                    }}>Premium</div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <div style={{ width: '32px', height: '3px', background: s.color, marginBottom: '0.75rem' }} />
                      <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, marginBottom: '0.25rem' }}>{s.name}</h3>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{s.duration}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--blue)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                        {s.price}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>— {s.priceTo}</div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>

                  {/* Includes */}
                  <motion.div
                    initial={false}
                    animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                    style={{ overflow: 'hidden' }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                        What's included
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {s.includes.map(item => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
                            <span style={{ color: 'var(--blue)', fontSize: '0.625rem', flexShrink: 0 }}>&mdash;</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      style={{
                        background: 'none', border: 'none', color: 'var(--blue)',
                        fontSize: '0.8125rem', cursor: 'pointer', fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                      onClick={(e) => { e.stopPropagation(); setActive(active === i ? null : i) }}
                    >
                      {active === i ? 'Less' : 'See what\'s included'}
                    </button>
                    <Link
                      to="/contact"
                      className="btn-primary"
                      style={{ fontSize: '0.75rem', padding: '0.5rem 1.25rem' }}
                      onClick={e => e.stopPropagation()}
                    >
                      Book
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem',
        background: 'var(--surface)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <AnimatedSection>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Not Sure Which <span>Package?</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
            Give us a call and we'll recommend the best service for your vehicle and budget.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:07916266287" className="btn-primary">07916 266287</a>
            <Link to="/contact" className="btn-outline">Book Online</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
