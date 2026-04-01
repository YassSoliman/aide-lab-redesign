import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Microscope, MapPin } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: "Assistance sur place",
    subtitle: "Service exclusif",
    description: "Nos techniciens se déplacent à votre clinique pour vos cas complexes. Un service unique dans l'industrie.",
    stat: "Sur place",
    statLabel: "à votre clinique"
  },
  {
    icon: Microscope,
    title: "Technologies de pointe",
    subtitle: "Précision numérique",
    description: "Scanners Nobel Biocare, Straumann CARES et Dental Wings pour des résultats d'une précision exceptionnelle.",
    stat: "CAD/CAM",
    statLabel: "technologie"
  },
  {
    icon: MapPin,
    title: "Fabriqué au Québec",
    subtitle: "Depuis 2007",
    description: "Près de 20 ans d'expertise en laboratoire dentaire à Laval. Qualité et fierté locale.",
    stat: "2007",
    statLabel: "fondé"
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
          <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
            Pourquoi nous choisir
          </span>
          <h2 className="font-display text-2xl-fluid max-w-3xl mx-auto text-cacao">
            L'excellence à chaque étape
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
                  bg-stone border border-cacao/5 hover:border-azure/20
                  hover:shadow-2xl hover:shadow-coral/5`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full origin-top-right
                    transition-transform duration-500 group-hover:scale-100 scale-0
                    bg-azure/5"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                  />
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6
                  transition-colors duration-300
                  bg-cacao/5 text-azure-dark group-hover:bg-azure group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="font-display text-xl-fluid mb-1 text-cacao">
                    {value.title}
                  </h3>
                  <p className="text-sm font-mono tracking-wide mb-4 text-sage-dark">
                    {value.subtitle}
                  </p>
                  <p className="leading-relaxed text-cacao/60">
                    {value.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="pt-6 border-t border-cacao/5">
                  <span className="text-3xl font-display text-azure">{value.stat}</span>
                  <span className="ml-2 text-sm text-cacao/50">
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
