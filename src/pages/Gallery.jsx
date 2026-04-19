import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const categories = ['All', 'Full Detail', 'Ceramic', 'Interior', 'Exterior']

// Generate 18 placeholder items
const items = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % 4)],
  aspect: i % 5 === 0 ? 'wide' : 'normal',
}))

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(9)

  const filtered = filter === 'All' ? items : items.filter(item => item.category === filter)
  const shown = filtered.slice(0, visible)

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }} className="grid-overlay">
        <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translateY(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-tag">Portfolio</div>
            <h1 className="section-title">Our <span>Gallery</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Real results from real vehicles. Every photo is from a car we've personally detailed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '2.5rem 2rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setVisible(9) }}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: filter === cat ? 'var(--blue)' : 'transparent',
                  border: `1px solid ${filter === cat ? 'var(--blue)' : 'rgba(255,255,255,0.12)'}`,
                  color: filter === cat ? '#fff' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '2.5rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
            className="gallery-grid"
          >
            <AnimatePresence>
              {shown.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                  style={{ gridColumn: item.aspect === 'wide' ? 'span 2' : 'auto' }}
                  className="gallery-item-col"
                >
                  <div
                    className="img-placeholder"
                    style={{
                      aspectRatio: item.aspect === 'wide' ? '2/1' : '4/3',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onClick={() => setLightbox(item)}
                  >
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ width: '44px', height: '44px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.25rem' }}>◈</span>
                      </div>
                      <span style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{item.category}</span>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,30,80,0.6)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'column', gap: '0.5rem',
                      }}
                    >
                      <div style={{
                        width: '48px', height: '48px',
                        border: '2px solid rgba(255,255,255,0.8)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.25rem', color: '#fff',
                      }}>+</div>
                      <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>View</span>
                    </motion.div>

                    {/* Category tag */}
                    <div style={{
                      position: 'absolute', bottom: '0.75rem', left: '0.75rem',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '0.2rem 0.625rem',
                      fontSize: '0.5625rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                    }}>
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load more */}
          {visible < filtered.length && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button
                className="btn-outline"
                onClick={() => setVisible(v => v + 9)}
              >
                Load More ↓
              </button>
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
            .gallery-item-col { grid-column: auto !important; }
          }
          @media (max-width: 480px) {
            .gallery-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
              zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: '-3rem', right: 0,
                  background: 'none', border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff', width: '36px', height: '36px',
                  cursor: 'pointer', fontSize: '1rem',
                }}
              >×</button>
              <div className="img-placeholder" style={{ aspectRatio: '16/9', width: '100%', borderRadius: 0 }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.1)' }}>◈</div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{lightbox.category} — Photo #{lightbox.id}</span>
                </div>
              </div>
              <div style={{ padding: '1.25rem', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>MS Details — {lightbox.category}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Photo #{lightbox.id}</div>
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Wolverhampton</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
