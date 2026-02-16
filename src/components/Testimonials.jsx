import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials({ theme }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isDark = theme === 'dark'

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section
      ref={ref}
      className={`section-padding overflow-hidden ${isDark ? 'bg-ink-light' : 'bg-white'}`}
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className={`inline-block text-sm font-mono tracking-widest uppercase mb-4
            ${isDark ? 'text-coral' : 'text-coral-dark'}`}>
            Témoignages
          </span>
          <h2 className={`font-display text-2xl-fluid ${isDark ? 'text-stone' : 'text-ink'}`}>
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
            {/* Quote icon */}
            <Quote className={`absolute -top-8 -left-4 md:-left-12 w-16 h-16 md:w-24 md:h-24
              ${isDark ? 'text-coral/10' : 'text-coral/10'}`}
            />

            {/* Main quote */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className={`font-display text-xl-fluid md:text-2xl-fluid text-center leading-relaxed mb-10
                  ${isDark ? 'text-stone' : 'text-ink'}`}>
                  "{currentTestimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex flex-col items-center">
                  {/* Avatar placeholder */}
                  <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center
                    text-2xl font-display ${
                      isDark ? 'bg-coral/20 text-coral' : 'bg-coral/10 text-coral-dark'
                    }`}
                  >
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Name & clinic */}
                  <div className="text-center">
                    <div className={`font-medium text-lg mb-1 ${
                      isDark ? 'text-stone' : 'text-ink'
                    }`}>
                      {currentTestimonial.name}
                    </div>
                    <div className={`text-sm font-mono ${
                      isDark ? 'text-stone/50' : 'text-ink/50'
                    }`}>
                      {currentTestimonial.clinic}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-coral text-coral"
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
                className={`p-3 transition-all duration-200 ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-stone'
                    : 'bg-ink/5 hover:bg-ink/10 text-ink'
                }`}
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 bg-coral'
                        : isDark
                          ? 'bg-white/20 hover:bg-white/40'
                          : 'bg-ink/20 hover:bg-ink/40'
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className={`p-3 transition-all duration-200 ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-stone'
                    : 'bg-ink/5 hover:bg-ink/10 text-ink'
                }`}
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-center mt-16 pt-12 border-t ${
            isDark ? 'border-white/5' : 'border-ink/5'
          }`}
        >
          <div className={`inline-flex items-center gap-8 ${
            isDark ? 'text-stone/50' : 'text-ink/50'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-display text-coral">500+</div>
              <div className="text-xs font-mono uppercase tracking-wide">Dentistes partenaires</div>
            </div>
            <div className={`w-px h-12 ${isDark ? 'bg-white/10' : 'bg-ink/10'}`} />
            <div className="text-center">
              <div className="text-3xl font-display text-coral">99.8%</div>
              <div className="text-xs font-mono uppercase tracking-wide">Taux de satisfaction</div>
            </div>
            <div className={`w-px h-12 ${isDark ? 'bg-white/10' : 'bg-ink/10'}`} />
            <div className="text-center">
              <div className="text-3xl font-display text-coral">25+</div>
              <div className="text-xs font-mono uppercase tracking-wide">Années d'expérience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
