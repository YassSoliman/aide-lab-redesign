import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section
      ref={ref}
      className="section-padding overflow-hidden bg-white"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
            Témoignages
          </span>
          <h2 className="font-display text-2xl-fluid text-cacao">
            Les dentistes nous font confiance
          </h2>
        </motion.div>

        {/* Testimonial showcase */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Quote className="absolute -top-8 -left-4 md:-left-12 w-16 h-16 md:w-24 md:h-24 text-azure/10" />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="font-display text-xl-fluid md:text-2xl-fluid text-center leading-relaxed mb-10 text-cacao">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center
                    text-2xl font-display bg-azure/10 text-azure-dark">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="text-center">
                    <div className="font-medium text-lg mb-1 text-cacao">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm font-mono text-cacao/50">
                      {currentTestimonial.clinic}
                    </div>
                  </div>

                  <div className="flex gap-1 mt-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="p-3 transition-all duration-200 bg-cacao/5 hover:bg-cacao/10 text-cacao"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 bg-azure'
                        : 'bg-cacao/20 hover:bg-cacao/40'
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 transition-all duration-200 bg-cacao/5 hover:bg-cacao/10 text-cacao"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-cacao/5"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 text-cacao/50">
            <div className="text-center">
              <div className="text-3xl font-display text-azure">Laval, QC</div>
              <div className="text-xs font-mono uppercase tracking-wide">Fabriqué au Québec</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-cacao/10" />
            <div className="text-center">
              <div className="text-3xl font-display text-azure">Sur place</div>
              <div className="text-xs font-mono uppercase tracking-wide">Assistance en clinique</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-cacao/10" />
            <div className="text-center">
              <div className="text-3xl font-display text-azure">2007</div>
              <div className="text-xs font-mono uppercase tracking-wide">Année de fondation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
