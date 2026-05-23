import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pb-14 pt-0 overflow-hidden bg-[#080807]"
    >
      {/* Atmospheric radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 72% 38%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 12% 72%, rgba(201,168,76,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-[1300px] mx-auto w-full px-8 md:px-20 relative min-h-screen flex flex-col justify-between">
        {/* Spacer for navbar */}
        <div className="h-20" />

        {/* Main content */}
        <div className="relative z-10 max-w-[900px]">
          <motion.p
            {...fadeUp(0.1)}
            className="label mb-8"
          >
            Holding Company · Est. 2024
          </motion.p>

          <h1 className="font-display font-light leading-[0.9] mb-10" style={{ fontSize: 'clamp(72px, 11vw, 148px)' }}>
            {['Building', 'empires,', 'quietly.'].map((word, i) => (
              <motion.span
                key={word}
                {...fadeUp(0.15 + i * 0.1)}
                className={`block ${i === 1 ? 'italic text-[#e2c275]' : 'text-[#f0ede6]'}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...fadeUp(0.45)}
            className="font-body font-light text-[15px] text-[rgba(240,237,230,0.55)] max-w-[460px] leading-[1.85] mb-12"
          >
            Nayfar is the parent architecture behind a family of independent ventures —
            each distinct, each exceptional, each enduring.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex items-center gap-10">
            <a
              href="#brands"
              className="px-9 py-3.5 bg-[#c9a84c] text-[#080807] text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#e2c275] transition-colors duration-300"
            >
              Explore Ventures
            </a>
            <a
              href="#about"
              className="text-[12px] font-light tracking-[0.15em] text-[rgba(240,237,230,0.5)] hover:text-[#c9a84c] transition-colors duration-300"
            >
              Our Story →
            </a>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          {...fadeUp(0.7)}
          className="relative z-10 flex items-center gap-10 border-t border-[rgba(240,237,230,0.07)] pt-8"
        >
          {[
            { num: '4', label: 'Active Brands' },
            { num: '∞', label: 'Sector Reach' },
          { num: '1', label: 'Unified Vision' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-10">
            <div className="flex flex-col gap-1">
              <span className="font-display font-light text-[#c9a84c] leading-none" style={{ fontSize: 'clamp(26px,3vw,36px)' }}>
                {s.num}
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[rgba(240,237,230,0.4)]">
                {s.label}
              </span>
            </div>
            {i < 2 && <div className="w-px h-9 bg-[rgba(201,168,76,0.2)]" />}
          </div>
        ))}

        <div className="ml-auto hidden md:flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-[rgba(240,237,230,0.3)]">
          <span>Scroll</span>
          <div
            className="h-px bg-[#c9a84c]"
            style={{ animation: 'pulseline 2.2s ease-in-out infinite', width: '48px' }}
          />
        </div>
      </motion.div>
    </div>
  </section>
  )
}
