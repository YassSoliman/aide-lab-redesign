import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { partners } from '../data/partners'

function LogoSet() {
  return (
    <>
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex-none w-[200px] h-[80px] mx-6 flex items-center justify-center
            opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            className={`object-contain ${
              partner.size === 'lg' ? 'max-w-[180px] max-h-[80px] scale-150' :
              partner.size === 'md' ? 'max-w-[180px] max-h-[80px] scale-125' :
              partner.size === 'sm' ? 'max-w-[180px] max-h-[70px] scale-110' :
              'max-w-[180px] max-h-[70px]'
            }`}
          />
        </div>
      ))}
    </>
  )
}

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden bg-stone"
    >
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-cacao/50">
            Nos technologies
          </span>
          <h2 className="font-display text-xl-fluid text-cacao">
            Compatible avec les leaders de l'industrie
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none
          bg-gradient-to-r from-stone to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none
          bg-gradient-to-l from-stone to-transparent" />

        {/* Track: each logo slot is exactly 200px + 48px margin = 248px.
             10 logos = 2480px per set. translateX(-50%) = one full set. */}
        <div className="flex animate-marquee" style={{ width: `${partners.length * 248 * 2}px` }}>
          <LogoSet />
          <LogoSet />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container-custom mt-12 text-center"
      >
        <p className="text-sm font-mono text-cacao/40">
          Nous maîtrisons les systèmes que vous utilisez
        </p>
      </motion.div>
    </section>
  )
}
