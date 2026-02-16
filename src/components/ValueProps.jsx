import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Microscope } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: "Qualité",
    subtitle: "Sans compromis",
    description: "Chaque pièce est inspectée avec une précision microscopique. Nous n'acceptons que l'excellence.",
    stat: "99.8%",
    statLabel: "satisfaction"
  },
  {
    icon: Microscope,
    title: "Expertise",
    subtitle: "Depuis 1998",
    description: "Plus de 25 ans d'expérience en laboratoire dentaire. Nos techniciens sont des artisans certifiés.",
    stat: "25+",
    statLabel: "années"
  },
  {
    icon: Users,
    title: "Service",
    subtitle: "Sur mesure",
    description: "Assistance sur place, livraison rapide, support technique. Votre réussite est notre priorité.",
    stat: "24h",
    statLabel: "réponse"
  }
]

export default function ValueProps({ theme }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isDark = theme === 'dark'

  return (
    <section
      ref={ref}
      className={`section-padding ${isDark ? 'bg-ink-light' : 'bg-white'}`}
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className={`inline-block text-sm font-mono tracking-widest uppercase mb-4
            ${isDark ? 'text-coral' : 'text-coral-dark'}`}>
            Pourquoi nous choisir
          </span>
          <h2 className={`font-display text-2xl-fluid max-w-3xl mx-auto
            ${isDark ? 'text-stone' : 'text-ink'}`}>
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
                style={{
                  marginTop: index === 1 ? '40px' : index === 2 ? '80px' : '0'
                }}
                className={`group relative p-8 md:p-10 transition-all duration-500
                  ${isDark
                    ? 'bg-ink border border-white/5 hover:border-coral/20'
                    : 'bg-stone border border-ink/5 hover:border-coral/20'
                  }
                  hover:shadow-2xl hover:shadow-coral/5`}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-full h-full origin-top-right
                    transition-transform duration-500 group-hover:scale-100 scale-0
                    ${isDark ? 'bg-coral/10' : 'bg-coral/5'}`}
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                  />
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6
                  transition-colors duration-300
                  ${isDark
                    ? 'bg-white/5 text-coral group-hover:bg-coral group-hover:text-white'
                    : 'bg-ink/5 text-coral-dark group-hover:bg-coral group-hover:text-white'
                  }`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className={`font-display text-xl-fluid mb-1
                    ${isDark ? 'text-stone' : 'text-ink'}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm font-mono tracking-wide mb-4
                    ${isDark ? 'text-sage' : 'text-sage-dark'}`}>
                    {value.subtitle}
                  </p>
                  <p className={`leading-relaxed
                    ${isDark ? 'text-stone/60' : 'text-ink/60'}`}>
                    {value.description}
                  </p>
                </div>

                {/* Stat */}
                <div className={`pt-6 border-t ${isDark ? 'border-white/5' : 'border-ink/5'}`}>
                  <span className="text-3xl font-display text-coral">{value.stat}</span>
                  <span className={`ml-2 text-sm ${isDark ? 'text-stone/50' : 'text-ink/50'}`}>
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
