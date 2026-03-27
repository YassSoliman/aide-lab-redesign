import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2 } from 'lucide-react'

const VIRTUAL_TOUR_ENABLED = true

export default function VirtualTour() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (!VIRTUAL_TOUR_ENABLED) return null

  const tourUrl = "https://walkinto.in/tour/WkNqe7jvueZJeEqgmiwOx"

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-screen flex items-center overflow-hidden bg-stone-dark"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/80 to-stone/60" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                              linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-mono tracking-widest uppercase mb-6 text-coral-dark">
                Visite immersive 360\u00b0
              </span>

              <h2 className="font-display text-2xl-fluid mb-6 text-ink">
                Visitez notre
                <span className="block text-coral italic">atelier</span>
              </h2>

              <p className="text-lg leading-relaxed mb-8 max-w-lg text-ink/70">
                D\u00e9couvrez nos installations de pointe et voyez o\u00f9 la magie op\u00e8re.
                Notre laboratoire \u00e0 la fine pointe de la technologie est \u00e9quip\u00e9
                des meilleurs outils pour garantir des r\u00e9sultats exceptionnels.
              </p>

              {/* Stats row */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 mb-10 text-ink/60">
                <div>
                  <div className="text-3xl font-display text-coral">5,000</div>
                  <div className="text-sm font-mono">pi\u00b2 d'espace</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-coral">12</div>
                  <div className="text-sm font-mono">postes de travail</div>
                </div>
                <div>
                  <div className="text-3xl font-display text-coral">CAD/CAM</div>
                  <div className="text-sm font-mono">technologie</div>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(true)}
                className="btn-primary group"
              >
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                D\u00e9marrer la visite immersive
              </button>
            </motion.div>

            {/* Right - Preview window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="relative aspect-video overflow-hidden cursor-pointer group bg-white"
                onClick={() => setIsExpanded(true)}
              >
                <iframe
                  src={tourUrl}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title="Visite virtuelle AIDE Lab - Aper\u00e7u"
                  loading="lazy"
                />

                <div className="absolute inset-0 transition-opacity duration-300
                  bg-stone/40 group-hover:bg-transparent pointer-events-none" />

                <button
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(true) }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Ouvrir la visite en plein \u00e9cran"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-300 bg-coral text-white hover:bg-coral-dark"
                  >
                    <Maximize2 className="w-8 h-8" />
                  </motion.div>
                </button>

                <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-mono tracking-wide
                  bg-white/80 text-ink">
                  360\u00b0 INTERACTIF
                </div>
              </div>

              <div className="hidden md:block absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-coral" />
              <div className="hidden md:block absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-coral" />

              <p className="mt-6 text-center text-sm font-mono text-ink/50">
                Cliquez pour une exp\u00e9rience plein \u00e9cran
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-ink"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20
                text-white transition-colors duration-200 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-2 border-coral border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-stone/60 font-mono text-sm">Chargement de la visite...</p>
                </div>
              </div>
            )}

            <iframe
              src={tourUrl}
              className="w-full h-full"
              style={{ border: 'none' }}
              title="Visite virtuelle AIDE Lab"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen; accelerometer; gyroscope"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink to-transparent">
              <div className="container-custom flex items-center justify-between">
                <div className="text-stone/60 text-sm font-mono">
                  Laboratoire AIDE \u00b7 Laval, Qu\u00e9bec
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-stone/60 hover:text-stone text-sm transition-colors"
                >
                  Appuyez ESC pour fermer
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
