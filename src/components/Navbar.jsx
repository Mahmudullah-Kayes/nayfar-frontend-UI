import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#brands' },
  { label: 'Role', href: '#role' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080807]/90 backdrop-blur-md border-b border-[rgba(201,168,76,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-8 md:px-20 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="font-body text-[13px] font-medium tracking-[0.45em] text-[#c9a84c] flex-shrink-0"
          >
            NAYFAR
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-[11px] font-light tracking-[0.2em] uppercase text-[rgba(240,237,230,0.55)] hover:text-[#c9a84c] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border border-[rgba(201,168,76,0.35)] text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#c9a84c] hover:text-[#080807] transition-all duration-300"
          >
            Get In Touch
          </a>

          {/* Mobile menu btn */}
          <button
            className="md:hidden text-[rgba(240,237,230,0.7)] hover:text-[#c9a84c] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080807] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-light text-[rgba(240,237,230,0.8)] hover:text-[#c9a84c] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-12 left-10 text-[10px] tracking-[0.3em] text-[rgba(240,237,230,0.3)] uppercase">
              Nayfar Group © 2024
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
