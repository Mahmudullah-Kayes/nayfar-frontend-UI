import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const pillars = [
  { icon: '◈', title: 'Create', desc: 'Conceiving and launching new business ventures from the ground up.' },
  { icon: '◈', title: 'Own', desc: 'Holding equity and intellectual property across all brands.' },
  { icon: '◈', title: 'Oversee', desc: 'Providing strategic governance and long-term direction at group level.' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0f0f0d] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-8 md:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Ghost letterform */}
        <div
          className="pointer-events-none select-none absolute right-[-40px] top-1/2 -translate-y-1/2 font-display font-light leading-none text-[rgba(240,237,230,0.025)]"
          style={{ fontSize: 'clamp(200px, 35vw, 500px)' }}
          aria-hidden
        >
          Nayfar
        </div>

        {/* Left */}
        <motion.div {...reveal(0)}>
          <p className="label mb-8">About Nayfar</p>
          <h2
            className="font-display font-light text-[#f0ede6] leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(38px, 4vw, 62px)' }}
          >
            Not a company.
            <br />
            <em className="italic text-[#e2c275]">A constellation.</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </motion.div>

        {/* Right */}
        <motion.div {...reveal(0.15)}>
          <p className="font-light text-[15px] text-[rgba(240,237,230,0.55)] leading-[1.9] mb-5">
            Nayfar is not defined by a single product, market, or customer. It is the{' '}
            <span className="text-[#c9a84c]">strategic mind</span> behind a growing family of
            independent businesses — each built to lead in its own domain.
          </p>
          <p className="font-light text-[15px] text-[rgba(240,237,230,0.55)] leading-[1.9] mb-5">
            As a holding company, Nayfar creates the conditions for each venture to thrive: providing
            capital architecture, brand philosophy, and operational clarity — while giving each brand
            its own identity and freedom.
          </p>
          <p className="font-light text-[15px] text-[rgba(240,237,230,0.55)] leading-[1.9] mb-12">
            Where others build one thing, Nayfar builds <em className="text-[#f0ede6] italic">worlds</em>.
          </p>

          {/* Pillars */}
          <div className="border-t border-[rgba(240,237,230,0.07)] pt-10 flex flex-col gap-7">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...reveal(0.2 + i * 0.08)}
                className="flex gap-5 items-start group"
              >
                <span className="text-[#c9a84c] text-base flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <div>
                  <h4 className="font-body font-medium text-[11px] tracking-[0.2em] uppercase text-[#f0ede6] mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-[rgba(240,237,230,0.5)] leading-[1.75]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
