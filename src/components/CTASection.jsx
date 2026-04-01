import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection({ headline, description, primaryAction, secondaryAction }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-cacao">
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-azure-light blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl-fluid text-stone mb-4">
              {headline}
            </h2>
            {description && (
              <p className="text-stone/70 text-lg max-w-md">
                {description}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="group flex items-center gap-4 px-6 py-4 bg-white text-cacao
                  hover:bg-cacao hover:text-white transition-all duration-300 w-full sm:w-auto active:scale-95"
              >
                <div className="p-2 bg-azure-light/20 group-hover:bg-azure-light/30 transition-colors">
                  <Phone className="w-5 h-5 text-azure" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wide text-cacao/50 mb-1">
                    Sans frais
                  </div>
                  <div className="font-medium">{secondaryAction.label}</div>
                </div>
              </a>
            )}

            {primaryAction && (
              <Link
                to={primaryAction.href}
                className="group flex items-center justify-between gap-4 px-6 py-4
                  bg-azure text-white hover:bg-azure-dark
                  transition-all duration-300 w-full sm:w-auto active:scale-95"
              >
                <div className="font-medium">{primaryAction.label}</div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
