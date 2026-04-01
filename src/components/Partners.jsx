import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { partners } from '../data/partners'

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const doubledPartners = [...partners, ...partners]

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
            Partenaires de confiance
          </span>
          <h2 className="font-display text-xl-fluid text-cacao">
            Nous travaillons avec les meilleurs
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
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

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <div className="group relative h-16 w-32 md:w-48 flex items-center justify-center gap-2 md:gap-3
                transition-all duration-300 opacity-60 hover:opacity-100">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded text-white font-bold text-sm"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.initials}
                </div>
                <span className="text-sm font-medium whitespace-nowrap text-cacao">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container-custom mt-12 text-center"
      >
        <p className="text-sm font-mono text-cacao/40">
          {partners.length}+ fabricants de premier plan
        </p>
      </motion.div>
    </section>
  )
}
