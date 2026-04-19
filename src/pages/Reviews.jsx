import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const reviews = [
  { name: 'James T.', rating: 5, time: '2 weeks ago', service: 'Full Detail', text: 'Absolutely incredible results. My car looks better than when I bought it. The attention to detail is unmatched — every inch of the car was spotless. Highly recommend MS Details to anyone!' },
  { name: 'Sarah M.', rating: 5, time: '1 month ago', service: 'Interior Deep Clean', text: 'Professional, on time and the attention to detail is second to none. The interior looks brand new — stains I thought were permanent are completely gone. Will definitely be booking again.' },
  { name: 'Ryan K.', rating: 5, time: '3 months ago', service: 'Ceramic Coating', text: 'Got the ceramic coating done — completely transformed my car. The paint looks incredible and the water just beads right off. Worth every penny. Absolutely outstanding service.' },
  { name: 'Mohammed A.', rating: 5, time: '3 months ago', service: 'Mini Detail', text: 'Quick, professional and amazing results for the price. Booked the mini detail and was blown away. Car was gleaming. Will definitely go for the full detail next time.' },
  { name: 'Lisa P.', rating: 5, time: '4 months ago', service: 'Paint Enhancement', text: 'The paint enhancement removed all the swirls I thought were there forever. My car looks like it just came out of the showroom. Brilliant work, highly professional.' },
  { name: 'Tom H.', rating: 5, time: '5 months ago', service: 'Full Detail', text: 'Used MS Details for the first time and will not be going anywhere else. Incredible standard of work. The guy clearly loves what he does and it shows in the results. Highly recommend.' },
  { name: 'David W.', rating: 5, time: '6 months ago', service: 'Exterior Wash & Wax', text: 'Brilliant service, very professional and communication was great throughout. The car looks absolutely stunning. Very fair pricing for the quality of work provided.' },
  { name: 'Emma R.', rating: 5, time: '7 months ago', service: 'Full Detail', text: 'I was absolutely amazed at the transformation. My 5-year-old car looks brand new again. The service was professional from start to finish. Couldn\'t recommend more.' },
  { name: 'Chris B.', rating: 5, time: '8 months ago', service: 'Ceramic Coating', text: 'Exceptional work on the ceramic coating. The finish is flawless and the protection is noticeable every time it rains. Great communication and very knowledgeable.' },
]

export default function Reviews() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }} className="grid-overlay">
        <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translateY(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-tag">Testimonials</div>
            <h1 className="section-title">Client <span>Reviews</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Don't just take our word for it. Here's what our customers say about MS Details.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rating summary */}
      <section style={{ padding: '3rem 2rem', background: 'var(--surface)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.03em', lineHeight: 1 }}>5.0</div>
                <div className="stars" style={{ fontSize: '1.125rem', margin: '0.5rem 0' }}>★★★★★</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Overall Rating</div>
              </div>
              <div style={{ height: '80px', width: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>15 Google Reviews</div>
                {[5,4,3,2,1].map(stars => (
                  <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', width: '12px', textAlign: 'right' }}>{stars}</span>
                    <span className="stars" style={{ fontSize: '0.625rem' }}>★</span>
                    <div style={{
                      flex: 1, maxWidth: '180px', height: '6px',
                      background: 'var(--surface-3)', borderRadius: 3, overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: stars === 5 ? '100%' : '0%',
                        background: stars === 5 ? 'var(--blue)' : 'var(--surface-3)',
                        borderRadius: 3,
                      }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {stars === 5 ? '15' : '0'}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.75rem' }}
                >
                  View on Google ↗
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="reviews-full-grid">
            {reviews.map((r, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 0.1}>
                <div className="card" style={{ padding: '2rem', height: '100%' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <div style={{
                        width: '44px', height: '44px',
                        background: 'linear-gradient(135deg, var(--blue-dark), var(--blue))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, fontSize: '1.0625rem', color: '#fff',
                        flexShrink: 0,
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      }}>
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{r.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.time}</div>
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(0,102,255,0.08)',
                      border: '1px solid rgba(0,102,255,0.15)',
                      padding: '0.2rem 0.625rem',
                      fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)',
                      flexShrink: 0,
                    }}>
                      {r.service}
                    </div>
                  </div>

                  <div className="stars" style={{ fontSize: '0.875rem', marginBottom: '0.875rem' }}>
                    {'★'.repeat(r.rating)}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                    "{r.text}"
                  </p>

                  {/* Google badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 900, color: '#4285F4' }}>G</div>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Posted on Google</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .reviews-full-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 540px) { .reviews-full-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem',
        background: 'var(--surface)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <AnimatedSection>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Join Our Happy <span>Customers</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.9375rem' }}>
            Experience the MS Details difference for yourself. Book your detail today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Book Now →</Link>
            <a href="tel:07916266287" className="btn-outline"><span>☎</span> 07916 266287</a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
