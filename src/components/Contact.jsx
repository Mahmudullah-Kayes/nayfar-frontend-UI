import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const contactInfo = [
  { label: 'Email Address', val: 'info.nayfar@gmail.com', href: 'mailto:info.nayfar@gmail.com' },
  { label: 'WhatsApp', val: '01621223112', href: 'https://wa.me/01621223112' },
]

const inputClass =
  'w-full bg-[#0f0f0d] border border-[rgba(240,237,230,0.07)] focus:border-[rgba(201,168,76,0.4)] outline-none text-[#f0ede6] font-light text-[14px] px-5 py-3.5 transition-colors duration-300 placeholder:text-[rgba(240,237,230,0.2)]'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', captcha: '' })
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, result: 0 })

  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    setCaptcha({ a, b, result: a + b })
    setFormData(prev => ({ ...prev, captcha: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (parseInt(formData.captcha) !== captcha.result) {
      alert('Incorrect captcha answer. Please try again.')
      generateCaptcha()
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_API_KEY_HERE',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Nayfar Contact Form'
        })
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '', captcha: '' })
        generateCaptcha()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const set = (k) => (e) => setFormData((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="bg-[#080807] py-28 md:py-36">
      <div className="max-w-[1300px] mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
        <motion.div {...reveal(0)}>
          <p className="label mb-8">Get In Touch</p>
          <h2 className="font-display font-light text-[#f0ede6] leading-[1.08] mb-6" style={{ fontSize: 'clamp(38px, 4vw, 58px)' }}>
            Let's build<br /><em className="italic text-[#e2c275]">something lasting.</em>
          </h2>
          <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.85] max-w-[360px] mb-14">
            Whether you're a potential partner, investor, collaborator, or someone who simply shares
            our ambition — we'd love to hear from you.
          </p>
          <div className="flex flex-col gap-7">
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel={c.href.startsWith('http') ? 'noopener noreferrer' : ''} className="flex flex-col gap-1.5 pb-7 border-b border-[rgba(240,237,230,0.06)] last:border-0 group">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">{c.label}</span>
                <span className="text-[14px] text-[rgba(240,237,230,0.55)] group-hover:text-[#f0ede6] transition-colors duration-300">
                  {c.val}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal(0.15)}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Full Name</label>
              <input className={inputClass} name="name" type="text" placeholder="Your name" value={formData.name} onChange={set('name')} required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Email Address</label>
              <input className={inputClass} name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={set('email')} required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Subject</label>
              <select className={inputClass + ' cursor-pointer'} name="subject" value={formData.subject} onChange={set('subject')} style={{ appearance: 'none', WebkitAppearance: 'none' }} required>
                <option value="">Select a topic</option>
                <option>Partnership Inquiry</option>
                <option>Investment</option>
                <option>Brand Collaboration</option>
                <option>Press & Media</option>
                <option>General</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Message</label>
              <textarea className={inputClass + ' resize-none'} name="message" rows={5} placeholder="Tell us about your idea..." value={formData.message} onChange={set('message')} required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">Verification: {captcha.a} + {captcha.b} = ?</label>
              <input className={inputClass} type="number" placeholder="Enter result" value={formData.captcha} onChange={set('captcha')} required />
            </div>
            <button type="submit" disabled={status === 'loading'} className="flex items-center justify-between px-7 py-4 border border-[rgba(201,168,76,0.4)] text-[#c9a84c] text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#080807] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed">
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            {status === 'success' && <p className="text-[12px] tracking-[0.1em] text-[#c9a84c]">✓ Thank you. We'll be in touch soon.</p>}
            {status === 'error' && <p className="text-[12px] tracking-[0.1em] text-red-400">✕ Something went wrong. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}