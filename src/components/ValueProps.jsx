import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Microscope, MapPin } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: "Assistance sur place",
    subtitle: "Service exclusif",
    description: "Nos techniciens se d\u00e9placent \u00e0 votre clinique pour vos cas complexes. Un service unique dans l'industrie.",
    stat: "Sur place",
    statLabel: "\u00e0 votre clinique"
  },
  {
    icon: Microscope,
    title: "Technologies de pointe",
    subtitle: "Pr\u00e9cision num\u00e9rique",
    description: "Scanners Nobel Biocare, Straumann CARES et Dental Wings pour des r\u00e9sultats d'une pr\u00e9cision exceptionnelle.",
    stat: "CAD/CAM",
    statLabel: "technologie"
  },
  {
    icon: MapPin,
    title: "Fabriqu\u00e9 au Qu\u00e9bec",
    subtitle: "Depuis 2007",
    description: "Pr\u00e8s de 20 ans d'expertise en laboratoire dentaire \u00e0 Laval. Qualit\u00e9 et fiert\u00e9 locale.",
    stat: "2007",
    statLabel: "fond\u00e9"
  }
]

export default function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-coral-dark">
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-2xl-fluid max-w-3xl mx-auto text-ink">
            L'excellence \u00e0 chaque \u00e9tape
          </h2>
        </motion.div>

        {/* Value cards - staggered layout */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`group relative p-8 md:p-10 transition-all duration-500
                  ${index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''}
                  bg-stone border border-ink/5 hover:border-coral/20
                  hover:shadow-2xl hover:shadow-coral/5`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full origin-top-right
                    transition-transform duration-500 group-hover:scale-100 scale-0
                    bg-coral/5"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                  />
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6
                  transition-colors duration-300
                  bg-ink/5 text-coral-dark group-hover:bg-coral group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="font-display text-xl-fluid mb-1 text-ink">
                    {value.title}
                  </h3>
                  <p className="text-sm font-mono tracking-wide mb-4 text-sage-dark">
                    {value.subtitle}
                  </p>
                  <p className="leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="pt-6 border-t border-ink/5">
                  <span className="text-3xl font-display text-coral">{value.stat}</span>
                  <span className="ml-2 text-sm text-ink/50">
                    {value.statLabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
