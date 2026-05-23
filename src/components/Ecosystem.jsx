import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const nodes = [
  { name: 'Skillwave', sector: 'Education', cx: 150, cy: 110 },
  { name: 'Recova', sector: 'Data Recovery', cx: 650, cy: 110 },
  { name: 'Lumauras', sector: 'Fashion', cx: 150, cy: 310 },
  { name: 'Femaura', sector: 'Cosmetics', cx: 650, cy: 310 },
]

const tags = [
  { key: 'Sectors Covered', val: 'Education · Tech · Fashion · Beauty' },
  { key: 'Structure', val: 'Holding Company → Independent Brands' },
  { key: 'Operating Model', val: 'Decentralised Autonomy, Centralised Vision' },
]

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="bg-[#080807] border-t border-b border-[rgba(240,237,230,0.06)] py-28 md:py-36"
    >
      <div className="max-w-[1300px] mx-auto px-8 md:px-20">
        {/* Header */}
        <motion.div {...reveal(0)} className="text-center max-w-xl mx-auto mb-24">
          <p className="label justify-center mb-8" style={{ justifyContent: 'center' }}>
            Ecosystem
          </p>
          <h2
            className="font-display font-light text-[#f0ede6] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(38px, 4vw, 60px)' }}
          >
            One group.
            <br />
            <em className="italic text-[#c9a84c]">Many worlds.</em>
          </h2>
          <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.85]">
            How Nayfar's ventures interconnect — each independent, all unified by a shared commitment to excellence.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div {...reveal(0.15)} className="relative max-w-3xl mx-auto mb-20 h-[420px]">
          {/* SVG connectors */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 420"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <style>{`
                .eco-dash {
                  stroke-dasharray: 5 5;
                  animation: eco-anim 3s linear infinite;
                }
                @keyframes eco-anim { to { stroke-dashoffset: -30; } }
              `}</style>
            </defs>
            {nodes.map((n) => (
              <line
                key={n.name}
                className="eco-dash"
                x1={400}
                y1={210}
                x2={n.cx}
                y2={n.cy}
                stroke="rgba(201,168,76,0.22)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Center node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] flex items-center justify-center">
            {/* Rings */}
            <div className="absolute w-[130px] h-[130px] rounded-full border border-[rgba(201,168,76,0.2)] animate-spin-slow" />
            <div className="absolute w-[94px] h-[94px] rounded-full border border-[rgba(201,168,76,0.35)] animate-spin-rev" />
            {/* Core */}
            <div className="relative z-10 w-[68px] h-[68px] rounded-full bg-[#0f0f0d] border border-[#c9a84c] flex flex-col items-center justify-center gap-0.5">
              <span className="text-[8px] font-medium tracking-[0.25em] text-[#c9a84c]">NAYFAR</span>
              <span className="text-[7px] tracking-[0.15em] text-[rgba(240,237,230,0.4)]">Holding</span>
            </div>
          </div>

          {/* Satellite nodes */}
          {nodes.map((n) => {
            const isRight = n.cx > 400
            const isBottom = n.cy > 200
            return (
              <div
                key={n.name}
                className="absolute text-center"
                style={{
                  left: `${(n.cx / 800) * 100}%`,
                  top: `${(n.cy / 420) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] mx-auto mb-2 shadow-[0_0_14px_rgba(201,168,76,0.55)]" />
              <div className="font-display font-light text-[#f0ede6] text-xl leading-tight">{n.name}</div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-[#c9a84c] mt-0.5">{n.sector}</div>
            </div>
          )
        })}
      </motion.div>

      {/* Info tags */}
      <motion.div
        {...reveal(0.25)}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-[rgba(240,237,230,0.07)]"
      >
        {tags.map((t, i) => (
          <div
            key={t.key}
            className={`px-8 py-6 flex flex-col gap-2 ${i < 2 ? 'md:border-r border-[rgba(240,237,230,0.07)]' : ''} ${i > 0 ? 'border-t md:border-t-0 border-[rgba(240,237,230,0.07)]' : ''}`}
          >
            <span className="text-[9px] tracking-[0.28em] uppercase text-[#c9a84c]">{t.key}</span>
            <span className="text-[12px] text-[rgba(240,237,230,0.5)] leading-[1.65]">{t.val}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
  )
}
