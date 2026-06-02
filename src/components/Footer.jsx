import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
]

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'About Nayfar', href: '#about' },
      { label: 'Our Role', href: '#role' },
      { label: 'Ecosystem', href: '#ecosystem' },
      { label: 'Vision', href: '#vision' },
    ],
  },
  {
    title: 'Ventures',
    links: [
      { label: 'Skillwave', href: '#brands' },
      { label: 'Recova', href: '#brands' },
      { label: 'Lumauras', href: '#brands' },
      { label: 'Femaura', href: '#brands' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'General Enquiries', href: '#contact' },
      { label: 'Partnerships', href: '#contact' },
      { label: 'Press & Media', href: '#contact' },
      { label: 'Investment', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0d] border-t border-[rgba(240,237,230,0.06)] py-20 pb-10">
      <div className="max-w-[1300px] mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="font-body font-medium text-[13px] tracking-[0.45em] text-[#c9a84c] mb-3">
              NAYFAR
            </div>
            <p className="font-display italic text-[18px] text-[rgba(240,237,230,0.4)] mb-8">
              Building empires, quietly.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 border border-[rgba(240,237,230,0.1)] flex items-center justify-center text-[rgba(240,237,230,0.45)] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
                    aria-label={s.label}
                  >
                    <Icon size={14} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13px] text-[rgba(240,237,230,0.45)] hover:text-[rgba(240,237,230,0.85)] transition-colors duration-300"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(240,237,230,0.06)] pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[11px] text-[rgba(240,237,230,0.3)] tracking-[0.05em]">
            © 2024 Nayfar Group. All rights reserved.
          </span>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[rgba(240,237,230,0.45)]">
            <span>Developed by</span>
            <img
              src="/atolyn.svg"
              alt="Atolyn"
              className="h-6 w-auto brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
