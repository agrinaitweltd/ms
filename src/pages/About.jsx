import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  { icon: '◈', title: 'Professional Grade', desc: 'We use only the highest quality detailing products — the same brands trusted by industry professionals.' },
  { icon: '⬡', title: 'Fully Insured', desc: 'Your vehicle is fully protected while in our care. We carry comprehensive public liability insurance.' },
  { icon: '✦', title: 'No Shortcuts', desc: 'Every vehicle receives the same meticulous attention to detail, regardless of age or value.' },
  { icon: '◉', title: 'Flexible Bookings', desc: 'We work around your schedule. Weekday, weekend and early morning slots available.' },
  { icon: '◎', title: 'Transparent Pricing', desc: 'No hidden costs. What we quote is what you pay. Pre-detail consultation always included.' },
  { icon: '◑', title: 'Local Business', desc: 'Based in Wolverhampton, proud to serve the local community with a service you can trust.' },
]

const timeline = [
  { year: '2021', title: 'MS Details Founded', desc: 'Started with a passion for cars and a commitment to quality detailing.' },
  { year: '2022', title: 'First 100 Customers', desc: 'Word spread fast — our reputation for quality grew across Wolverhampton.' },
  { year: '2023', title: 'Ceramic Coating Launch', desc: 'Expanded our services to include professional ceramic coating packages.' },
  { year: '2024', title: 'Google 5.0 Rating', desc: 'Achieved a perfect 5.0 star rating across all Google reviews.' },
  { year: '2025', title: '500+ Cars Detailed', desc: 'A major milestone — over 500 vehicles restored to their best.' },
]

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }} className="grid-overlay">
        <div style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-tag">Our Story</div>
            <h1 className="section-title">About <span>MS Details</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              A Wolverhampton-based premium detailing brand built on passion, precision, and pride.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Split section */}
      <section style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-split-grid">

            <AnimatedSection direction="right">
              <div style={{ position: 'relative' }}>
                <div className="img-placeholder cut-corner" style={{ aspectRatio: '3/4', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ width: '64px', height: '64px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '2rem' }}>◈</span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Team Photo</span>
                  </div>
                </div>
                {/* Floating stat card */}
                <div style={{
                  position: 'absolute', bottom: '2rem', right: '-2rem',
                  background: 'var(--surface-2)', border: '1px solid rgba(0,102,255,0.2)',
                  padding: '1.25rem 1.75rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.03em', lineHeight: 1 }}>5.0</div>
                  <div className="stars" style={{ fontSize: '0.75rem', margin: '0.25rem 0' }}>★★★★★</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Google Rating</div>
                </div>
                <div style={{
                  position: 'absolute', top: '2rem', left: '-1rem',
                  background: 'var(--blue)', padding: '1rem 1.25rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>3+</div>
                  <div style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Years</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Precision. <span>Passion.</span><br />Perfection.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                MS Details was founded with one goal: to provide Wolverhampton with a car detailing service that truly cares about the result. We treat every vehicle as if it were our own, using professional-grade products and proven techniques.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
                Whether it's a daily driver that needs a refresh or a prized possession requiring the full ceramic coating treatment — we bring the same dedication to every single job, every single time.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {['Fully insured', 'Professional-grade products', 'No shortcuts', 'Flexible bookings', 'Transparent pricing', 'Local business'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{ color: 'var(--blue)', fontSize: '0.5rem', flexShrink: 0 }}>▶</span>
                    <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">Book Now</Link>
                <a href="tel:07916266287" className="btn-outline"><span>☎</span> 07916 266287</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-split-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } }`}</style>
      </section>

      {/* Values grid */}
      <section style={{ padding: '7rem 2rem', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2 className="section-title">Why Choose <span>Us</span></h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="values-grid">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem' }}>{v.icon}</div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.625rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 540px) { .values-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Timeline */}
      <section style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Journey</div>
            <h2 className="section-title">Our <span>Timeline</span></h2>
          </AnimatedSection>

          <div style={{ position: 'relative' }}>
            {/* Line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '1px', background: 'linear-gradient(to bottom, var(--blue), transparent)',
              transform: 'translateX(-50%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }} className="timeline-row">
                    {i % 2 === 0 ? (
                      <>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>{item.year}</div>
                          <h3 style={{ fontWeight: 700, marginTop: '0.25rem' }}>{item.title}</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <div style={{ width: '12px', height: '12px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 16px rgba(0,102,255,0.5)', flexShrink: 0 }} />
                          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'flex-end' }}>
                          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                          <div style={{ width: '12px', height: '12px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 16px rgba(0,102,255,0.5)', flexShrink: 0 }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.02em', lineHeight: 1 }}>{item.year}</div>
                          <h3 style={{ fontWeight: 700, marginTop: '0.25rem' }}>{item.title}</h3>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .timeline-row { grid-template-columns: 1fr !important; gap: 1rem !important; } }`}</style>
      </section>
    </div>
  )
}
