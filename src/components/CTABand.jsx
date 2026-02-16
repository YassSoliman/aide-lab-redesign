import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight, Mail } from 'lucide-react'

export default function CTABand({ theme }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isDark = theme === 'dark'

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-coral"
    >
      {/* Decorative elements */}
      <div className="hidden md:block absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-ink blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="hidden md:block absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                            linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl-fluid text-white mb-4">
              Prêt à collaborer?
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins
              et découvrir comment nous pouvons vous aider.
            </p>
          </motion.div>

          {/* Right - Contact options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Phone */}
            <a
              href="tel:1-888-350-2246"
              className="group flex items-center gap-4 px-6 py-4 bg-white text-ink
                hover:bg-ink hover:text-white transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <div className="p-2 bg-coral/10 group-hover:bg-coral/20 transition-colors">
                <Phone className="w-5 h-5 text-coral" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wide opacity-60 mb-1">
                  Sans frais
                </div>
                <div className="font-medium">1 (888) 350-2246</div>
              </div>
            </a>

            {/* Contact form */}
            <a
              href="/fr/contact"
              className="group flex items-center justify-between gap-4 px-6 py-4
                bg-ink text-white hover:bg-white hover:text-ink
                transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/10 group-hover:bg-coral/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wide opacity-60 mb-1">
                    Formulaire
                  </div>
                  <div className="font-medium">Nous joindre</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
