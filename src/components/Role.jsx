import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const functions_ = [
  {
    num: 'I',
    title: 'Strategic Direction',
    desc: 'Nayfar defines the long-term vision for all ventures — setting goals, allocating focus, and ensuring every brand moves with intention and alignment.',
  },
  {
    num: 'II',
    title: 'Capital & Resources',
    desc: 'From funding to infrastructure, Nayfar ensures each brand has what it needs to launch, scale, and sustain — without bureaucratic friction.',
  },
  {
    num: 'III',
    title: 'Brand Architecture',
    desc: 'Each venture is given its own identity, but that identity is built on Nayfar\'s standards — quality, clarity, and purpose in everything.',
  },
  {
    num: 'IV',
    title: 'Governance & Accountability',
    desc: 'Nayfar maintains oversight across all brands — setting the bar, tracking performance, and ensuring every venture upholds the group\'s values.',
  },
  {
    num: 'V',
    title: 'Cross-Brand Synergies',
    desc: 'Being part of the Nayfar family is an advantage. Shared learnings, shared network, and shared momentum accelerate every brand within the group.',
  },
]

export default function Role() {
  return (
    <section
      id="role"
      className="relative bg-[#0f0f0d] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-8 md:px-20 relative z-10">
        {/* Ghost wordmark */}
        <div
          className="pointer-events-none select-none absolute bottom-[-40px] left-[-20px] font-display font-light text-[rgba(240,237,230,0.02)] leading-none"
          style={{ fontSize: 'clamp(100px, 18vw, 260px)', letterSpacing: '-0.04em' }}
          aria-hidden
        >
          NAYFAR
        </div>

        {/* Header */}
        <motion.div {...reveal(0)} className="mb-16">
          <p className="label mb-8">Our Role</p>
          <h2
            className="font-display font-light text-[#f0ede6] leading-[1.08]"
            style={{ fontSize: 'clamp(38px, 4vw, 60px)' }}
          >
            The parent company.
            <br />
            <em className="italic text-[#e2c275]">The invisible engine.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24 items-start">
          {/* Intro blurb */}
          <motion.p {...reveal(0.1)} className="text-[15px] text-[rgba(240,237,230,0.55)] leading-[1.9]">
            Nayfar sits at the center of everything — seen by few, felt by all. As the central holding
            entity, it doesn't compete in markets. It{' '}
            <span className="text-[#c9a84c]">architects them</span>, building the structural,
            strategic, and financial foundation that each brand stands on.
          </motion.p>

          {/* Functions list */}
          <div className="flex flex-col">
            {functions_.map((fn, i) => (
              <motion.div
                key={fn.num}
                {...reveal(0.12 + i * 0.07)}
                className="flex gap-8 py-8 border-b border-[rgba(240,237,230,0.06)] first:border-t group hover:pl-3 transition-all duration-400"
              >
                <span className="font-display font-light text-[22px] text-[#c9a84c] flex-shrink-0 w-8 mt-0.5">
                  {fn.num}
                </span>
                <div>
                  <h3 className="font-body font-medium text-[12px] tracking-[0.18em] uppercase text-[#f0ede6] mb-2.5">
                    {fn.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(240,237,230,0.5)] leading-[1.8]">{fn.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
