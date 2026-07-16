'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Terminal } from 'lucide-react'
import { portfolioData } from '../data/data'

const TGAPI = 'https://api.telegram.org/bot8434917178:AAE576rtrH5_SejDSaZYZWXIpnwhz8cT0cc/sendMessage'
const CHAT_ID = 6974520564

const Field = ({ label, name, value, onChange, type = 'text', required = true, as = 'input', rows }) => {
  const Tag = as
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
        {label}{required && <span style={{ color: 'var(--rose)' }}> *</span>}
      </label>
      <Tag
        id={name} name={name} type={type} value={value}
        onChange={onChange} required={required} rows={rows}
        className="input"
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{ resize: as === 'textarea' ? 'none' : undefined }}
      />
    </div>
  )
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState(null) // 'ok' | 'err'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setBusy(true); setStatus(null)
    const { name, email, subject, message } = form
    if (name.length < 2 || message.length < 10 || !email.includes('@')) {
      setStatus('err'); setBusy(false); return
    }
    const text = `📬 Portfolio Contact\n👤 ${name}\n📧 ${email}\n📝 ${subject || 'N/A'}\n💬 ${message}`
    try {
      const res = await fetch(TGAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('err')
    } finally {
      setBusy(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const socials = [
    { href: portfolioData.personal.github,    Icon: Github,    label: 'GitHub' },
    { href: portfolioData.personal.linkedin,  Icon: Linkedin,  label: 'LinkedIn' },
    { href: portfolioData.personal.instagram, Icon: Instagram, label: 'Instagram' },
  ]

  const details = [
    { Icon: Mail,   val: portfolioData.personal.email,    href: `mailto:${portfolioData.personal.email}` },
    { Icon: Phone,  val: portfolioData.personal.phone,    href: `tel:${portfolioData.personal.phone}` },
    { Icon: MapPin, val: portfolioData.personal.location, href: null },
  ]

  return (
    <section id="contact" className="section relative" style={{ background: 'var(--bg-1)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--rose), var(--amber), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// 05. contact</p>
          <h2 className="syne text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--text-1)' }}>
            Let's<br />
            <span className="text-gradient-warm">Connect.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* INFO */}
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="bento p-7" style={{ borderLeft: '3px solid var(--rose)' }}>
              <h3 className="syne font-bold text-xl mb-3" style={{ color: 'var(--text-1)' }}>Get in Touch</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>
                Open to new roles, freelance projects, and cool collaborations. Let's build something great together.
              </p>
              <div className="space-y-4">
                {details.map(({ Icon, val, href }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center border"
                      style={{ background: 'rgba(251,113,133,0.1)', borderColor: 'rgba(251,113,133,0.25)', color: 'var(--rose)' }}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm transition-colors hover:text-rose-400" style={{ color: 'var(--text-2)' }}>{val}</a>
                    ) : (
                      <span className="text-sm" style={{ color: 'var(--text-2)' }}>{val}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bento p-5">
              <p className="mono text-xs mb-4" style={{ color: 'var(--text-3)' }}>// social_links</p>
              <div className="flex gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all"
                    style={{ background: 'var(--bg-3)', borderColor: 'var(--border-2)', color: 'var(--text-2)' }}
                    whileHover={{ scale: 1.12, borderColor: 'var(--indigo)', color: 'var(--indigo-bright)' }}
                    whileTap={{ scale: 0.93 }}>
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Terminal-style availability */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bento p-5 font-mono text-xs space-y-1.5"
              style={{ background: 'var(--bg-0)', borderColor: 'var(--indigo)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4" style={{ color: 'var(--indigo)' }} />
                <span style={{ color: 'var(--text-3)' }}>status.sh</span>
              </div>
              <p style={{ color: 'var(--text-3)' }}>$ check availability</p>
              <p><span style={{ color: 'var(--emerald)' }}>✓</span> <span style={{ color: 'var(--text-2)' }}>Actively looking for roles</span></p>
              <p><span style={{ color: 'var(--emerald)' }}>✓</span> <span style={{ color: 'var(--text-2)' }}>Open to freelance projects</span></p>
              <p><span style={{ color: 'var(--emerald)' }}>✓</span> <span style={{ color: 'var(--text-2)' }}>Response time: &lt; 24 hrs</span></p>
              <p className="pt-1" style={{ color: 'var(--indigo-bright)' }}>$ <span className="animate-blink">|</span></p>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bento p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--rose)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--amber)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--emerald)' }} />
              <span className="mono text-xs ml-2" style={{ color: 'var(--text-3)' }}>send_message.js</span>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name"  name="name"  value={form.name}  onChange={onChange} />
                <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={onChange} required={false} />
              <Field label="Message" name="message" value={form.message} onChange={onChange} as="textarea" rows={5} />

              <motion.button type="submit" disabled={busy}
                className="btn btn-indigo w-full justify-center py-3"
                whileHover={{ scale: busy ? 1 : 1.02 }} whileTap={{ scale: busy ? 1 : 0.98 }}>
                {busy ? (
                  <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                ) : (
                  <><Send className="w-4 h-4" />Send Message</>
                )}
              </motion.button>

              {status === 'ok' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl text-sm font-mono"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: 'var(--emerald)' }}>
                  ✓ Message sent! I'll respond within 24 hours.
                </motion.div>
              )}
              {status === 'err' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl text-sm font-mono"
                  style={{ background: 'rgba(251,113,133,0.1)', border: '1px solid rgba(251,113,133,0.25)', color: 'var(--rose)' }}>
                  ✗ Failed. Email me directly: {portfolioData.personal.email}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact