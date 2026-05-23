import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
})

const brands = [
  {
    index: '01',
    name: 'Skillwave',
    sector: 'Online Education',
    desc: 'A modern learning platform built to make world-class education accessible. Skillwave delivers skills-based courses, mentorship, and career pathways to learners worldwide.',
    tags: ['EdTech', 'E-Learning', 'Skills'],
    accent: 'from-[rgba(201,168,76,0.05)]',
  },
  {
    index: '02',
    name: 'Recova',
    sector: 'Data Recovery Services',
    desc: 'When data is lost, Recova steps in. A professional data recovery service built on precision, speed, and trust — recovering what matters most for individuals and enterprises.',
    tags: ['Tech', 'Data', 'Recovery'],
    accent: 'from-[rgba(201,168,76,0.05)]',
  },
  {
    index: '03',
    name: 'Lumauras',
    sector: 'Clothing & Fashion',
    desc: 'A fashion label defined by refined aesthetics and intentional design. Lumauras creates clothing that feels as considered as it looks — for those who dress with purpose.',
    tags: ['Fashion', 'Apparel', 'Lifestyle'],
    accent: 'from-[rgba(201,168,76,0.05)]',
  },
  {
    index: '04',
    name: 'Femaura',
    sector: 'Cosmetics & Beauty',
    desc: 'Beauty elevated to art. Femaura is a cosmetics brand that blends science and self-expression — offering premium beauty products for the modern, confident individual.',
    tags: ['Beauty', 'Cosmetics', 'Wellness'],
    accent: 'from-[rgba(201,168,76,0.05)]',
  },
]

function BrandCard({ brand, delay }) {
  return (
    <motion.div
      {...reveal(delay)}
      className="relative bg-[#0f0f0d] p-12 md:p-14 overflow-hidden group cursor-default border border-[rgba(240,237,230,0.04)] hover:border-[rgba(201,168,76,0.15)] transition-all duration-500"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(201,168,76,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Ghost index */}
      <span
        className="absolute top-5 right-8 font-display font-light text-[rgba(240,237,230,0.04)] leading-none select-none pointer-events-none"
        style={{ fontSize: '90px' }}
        aria-hidden
      >
        {brand.index}
      </span>

      <div className="relative z-10">
        {/* Icon dot */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] mb-8 group-hover:shadow-[0_0_16px_rgba(201,168,76,0.6)] transition-shadow duration-500" />

        <h3
          className="font-display font-light text-[#f0ede6] leading-none mb-2 group-hover:text-[#e2c275] transition-colors duration-400"
          style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}
        >
          {brand.name}
        </h3>

        <p className="text-[10px] tracking-[0.28em] uppercase text-[#c9a84c] mb-7">
          {brand.sector}
        </p>

        <p className="text-[13px] text-[rgba(240,237,230,0.5)] leading-[1.85] mb-9">
          {brand.desc}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {brand.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.2em] uppercase text-[rgba(240,237,230,0.4)] border border-[rgba(240,237,230,0.08)] px-3 py-1.5 group-hover:border-[rgba(201,168,76,0.35)] group-hover:text-[#c9a84c] transition-all duration-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Brands() {
  return (
    <section id="brands" className="bg-[#080807] py-28 md:py-36">
      <div className="max-w-[1300px] mx-auto px-8 md:px-20">
        {/* Header */}
        <motion.div {...reveal(0)} className="max-w-2xl mb-20">
          <p className="label mb-8">Our Ventures</p>
          <h2
            className="font-display font-light text-[#f0ede6] leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(38px, 4.5vw, 62px)' }}
          >
            Four brands.
            <br />
            <em className="italic text-[#c9a84c]">Infinite potential.</em>
          </h2>
          <p className="text-[14px] text-[rgba(240,237,230,0.5)] leading-[1.85] max-w-[500px]">
            Each venture operates independently — with its own identity, audience, and ambition —
            united by the Nayfar philosophy of excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(240,237,230,0.04)]">
          {brands.map((b, i) => (
            <BrandCard key={b.name} brand={b} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
