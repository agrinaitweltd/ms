import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  'Mini Detail (£50–£65)',
  'Full Detail (£100–£160)',
  'Interior Deep Clean (£60–£90)',
  'Exterior Wash & Wax (£50–£80)',
  'Paint Enhancement (£150–£250)',
  'Ceramic Coating (£250–£400)',
  'Not sure — advise me',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', notes: '', deposit: false })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.deposit) e.deposit = 'You must agree to the deposit policy'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative', overflow: 'hidden',
      }} className="grid-overlay">
        <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-tag">Get In Touch</div>
            <h1 className="section-title">Contact & <span>Booking</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Ready to transform your car? Fill in the form below and we'll get back to you to confirm your booking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">

            {/* Left info */}
            <AnimatedSection direction="right">
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                  Get In <span style={{ color: 'var(--blue)' }}>Touch</span>
                </h2>

                {/* Contact items */}
                {[
                  { label: 'Phone', value: '07916 266287', link: 'tel:07916266287' },
                  { label: 'Location', value: '93 Old Fallings Cres, Wolverhampton WV10 9PS' },
                  { label: 'Hours', value: 'Mon–Sat: 8am–6pm\nSunday: By appointment' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{
                      width: '44px', height: '44px', flexShrink: 0,
                      background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6875rem', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.05em',
                    }}>{item.label.charAt(0)}</div>
                    <div>
                      <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>{item.label}</div>
                      {item.link ? (
                        <a href={item.link} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.0625rem' }}>{item.value}</a>
                      ) : (
                        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Deposit policy box */}
                <div style={{
                  background: 'rgba(0,102,255,0.06)',
                  border: '1px solid rgba(0,102,255,0.15)',
                  padding: '1.25rem',
                  marginBottom: '2rem',
                }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.625rem' }}>
                    Booking Policy
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    A 20% non-refundable deposit is required to secure your booking. This confirms your slot and covers initial preparation costs.
                  </p>
                </div>

                <a href="tel:07916266287" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Call Now: 07916 266287
                </a>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid rgba(0,102,255,0.25)',
                    padding: '4rem 3rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: '64px', height: '64px', margin: '0 auto 1.5rem',
                    background: 'rgba(0,102,255,0.1)', border: '2px solid var(--blue)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', color: 'var(--blue)',
                  }}>Done</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Booking Request Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Thanks {form.name}! We'll be in touch shortly to confirm your appointment and arrange the deposit.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', notes: '', deposit: false }) }}
                    className="btn-outline"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    padding: '3rem',
                  }}
                  noValidate
                  >
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                      Booking Request
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                      {/* Name */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          style={{ borderColor: errors.name ? '#ff4444' : undefined }}
                        />
                        {errors.name && <div style={{ fontSize: '0.75rem', color: '#ff4444', marginTop: '0.375rem' }}>{errors.name}</div>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="07700 000000"
                          value={form.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          style={{ borderColor: errors.phone ? '#ff4444' : undefined }}
                        />
                        {errors.phone && <div style={{ fontSize: '0.75rem', color: '#ff4444', marginTop: '0.375rem' }}>{errors.phone}</div>}
                      </div>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        style={{ borderColor: errors.email ? '#ff4444' : undefined }}
                      />
                      {errors.email && <div style={{ fontSize: '0.75rem', color: '#ff4444', marginTop: '0.375rem' }}>{errors.email}</div>}
                    </div>

                    {/* Service */}
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Service Required *
                      </label>
                      <select
                        className="form-input"
                        value={form.service}
                        onChange={e => handleChange('service', e.target.value)}
                        style={{
                          appearance: 'none',
                          cursor: 'pointer',
                          borderColor: errors.service ? '#ff4444' : undefined,
                          color: form.service ? '#fff' : 'var(--text-muted)',
                        }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map(s => <option key={s} value={s} style={{ background: '#161616', color: '#fff' }}>{s}</option>)}
                      </select>
                      {errors.service && <div style={{ fontSize: '0.75rem', color: '#ff4444', marginTop: '0.375rem' }}>{errors.service}</div>}
                    </div>

                    {/* Notes */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Additional Notes
                      </label>
                      <textarea
                        className="form-input"
                        placeholder="Vehicle make/model, preferred date, any specific requirements..."
                        rows={4}
                        value={form.notes}
                        onChange={e => handleChange('notes', e.target.value)}
                        style={{ resize: 'vertical', fontFamily: 'inherit' }}
                      />
                    </div>

                    {/* Deposit checkbox */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                        cursor: 'pointer',
                      }}>
                        <div
                          onClick={() => handleChange('deposit', !form.deposit)}
                          style={{
                            width: '20px', height: '20px', flexShrink: 0, marginTop: '1px',
                            border: `2px solid ${errors.deposit ? '#ff4444' : form.deposit ? 'var(--blue)' : 'rgba(255,255,255,0.2)'}`,
                            background: form.deposit ? 'var(--blue)' : 'transparent',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', transition: 'all 0.2s',
                          }}
                        >
                          {form.deposit && <span style={{ fontSize: '0.75rem', color: '#fff', lineHeight: 1 }}>Done</span>}
                        </div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          I understand that a <strong style={{ color: '#fff' }}>20% non-refundable deposit</strong> is required to secure my booking. This deposit will be requested after confirmation.
                        </span>
                      </label>
                      {errors.deposit && <div style={{ fontSize: '0.75rem', color: '#ff4444', marginTop: '0.375rem', paddingLeft: '2.125rem' }}>{errors.deposit}</div>}
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '1rem' }}>
                      Send Booking Request
                    </button>
                </motion.form>
              )}
            </AnimatedSection>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          @media (max-width: 540px) { .form-row { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}
