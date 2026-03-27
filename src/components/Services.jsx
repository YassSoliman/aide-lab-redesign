import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentService = services[activeService]

  return (
    <section
      ref={ref}
      className="section-padding overflow-hidden bg-stone"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-coral-dark">
            Nos services
          </span>
          <h2 className="font-display text-2xl-fluid max-w-2xl text-ink">
            Solutions compl\u00e8tes pour votre pratique
          </h2>
        </motion.div>

        {/* Main showcase grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Image showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentService.id}
                  src={currentService.image}
                  alt={currentService.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/20 to-transparent" />

              {/* Service title overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
                >
                  <span className="text-sm font-mono mb-2 block text-coral">
                    0{activeService + 1} / 0{services.length}
                  </span>
                  <h3 className="font-display text-xl-fluid mb-3 text-ink">
                    {currentService.title}
                  </h3>
                  <p className="max-w-md mb-6 text-ink/70">
                    {currentService.description}
                  </p>
                  <Link
                    to={currentService.link}
                    className="inline-flex items-center gap-2 text-coral hover:gap-3 transition-all duration-300 font-medium"
                  >
                    D\u00e9couvrir
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`h-1 transition-all duration-500 ${
                    index === activeService
                      ? 'w-12 bg-coral'
                      : 'w-6 bg-ink/20 hover:bg-ink/30'
                  }`}
                  aria-label={`Service ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Service list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 transition-all duration-300 group
                    ${index === activeService
                      ? 'bg-ink/5 border-l-2 border-coral'
                      : 'hover:bg-ink/5 border-l-2 border-transparent'
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm font-mono block mb-1 text-ink/40">
                        0{index + 1}
                      </span>
                      <h4 className={`font-display text-lg transition-colors duration-200 ${
                        index === activeService
                          ? 'text-coral'
                          : 'text-ink group-hover:text-coral'
                      }`}>
                        {service.title}
                      </h4>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300
                      ${index === activeService
                        ? 'opacity-100 text-coral'
                        : 'opacity-0 group-hover:opacity-100'
                      } text-ink`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* View all services link */}
            <div className="mt-8 pt-8 border-t border-ink/5">
              <Link
                to="/fr/services"
                className="inline-flex items-center gap-2 px-6 py-4 w-full justify-center
                  border border-ink/20 text-ink hover:bg-ink hover:text-stone
                  transition-all duration-300 font-medium active:scale-95"
              >
                Voir tous nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
