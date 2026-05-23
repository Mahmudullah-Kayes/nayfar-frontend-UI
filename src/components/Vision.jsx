import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const phases = [
  {
    phase: 'Phase I — Now',
    title: 'Foundation',
    desc: 'Establishing four core brands across education, technology, fashion, and beauty. Building internal systems, brand identity, and market presence.',
    active: true,
  },
  {
    phase: 'Phase II — Near Future',
    title: 'Scale & Synergy',
    desc: 'Scaling all four brands to regional and global reach. Creating cross-brand collaborations and exploring adjacencies within the group.',
  },
  {
    phase: 'Phase III — Horizon',
    title: 'New Ventures',
    desc: 'Acquiring or incubating new brands in untapped industries. Nayfar becomes a recognized multi-sector holding group known for purposeful companies.',
  },
  {
    phase: 'Long Term',
    title: 'Legacy',
    desc: 'A permanent, self-sustaining enterprise ecosystem — creating jobs, shaping culture, and leaving a lasting mark across every sector it touches.',
    final: true,
  },
]

export default function Vision() {
  return (
    <section
      id="vision"
      className="bg-[#0f0f0d] py-28 md:py-36"
    >
      <div className="max-w-[1300px] mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
        {/* Left */}
        <motion.div {...reveal(0)}>
          <p className="label mb-8">Future Vision</p>
          <h2
            className="font-display font-light text-[#f0ede6] leading-[1.08] mb-14"
            style={{ fontSize: 'clamp(38px, 4vw, 62px)' }}
          >
            We are only
            <br />
            <em className="italic text-[#e2c275]">beginning.</em>
          </h2>

          {/* Quote */}
          <div className="border-l-2 border-[#c9a84c] pl-8 bg-[rgba(240,237,230,0.03)] py-8 pr-8">
            <div
              className="font-display text-[70px] text-[#c9a84c] leading-[0.55] mb-4 opacity-35 select-none"
              aria-hidden
            >
              "
            </div>
            <p className="font-display italic text-[18px] text-[#f0ede6] leading-[1.7] mb-5">
              The Nayfar of tomorrow will not be defined by what it built — but by the scale at which
              those buildings changed lives.
            </p>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">
              — Nayfar Group
            </span>
          </div>
        </motion.div>

        {/* Right: Timeline */}
        <div className="flex flex-col">
          {phases.map((p, i) => (
            <motion.div
              key={p.title}
              {...reveal(0.1 + i * 0.08)}
              className="flex gap-7 relative"
            >
              {/* Dot + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 z-10 ${
                    p.final
                      ? 'bg-[#c9a84c] shadow-[0_0_14px_rgba(201,168,76,0.6)]'
                      : 'border border-[#c9a84c] bg-[#0f0f0d]'
                  }`}
                />
                {!p.final && (
                  <div className="w-px flex-1 bg-[rgba(240,237,230,0.08)] mt-2 mb-0" style={{ minHeight: '72px' }} />
                )}
              </div>

              <div className={`pb-14 ${p.final ? 'pb-0' : ''}`}>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] block mb-2">
                  {p.phase}
                </span>
                <h4 className="font-display font-light text-[26px] text-[#f0ede6] mb-2.5">
                  {p.title}
                </h4>
                <p className="text-[13px] text-[rgba(240,237,230,0.5)] leading-[1.8]">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
