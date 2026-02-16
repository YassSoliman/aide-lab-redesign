import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2 } from 'lucide-react'

export default function VirtualTour({ theme }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isDark = theme === 'dark'

  const tourUrl = "https://walkinto.in/tour/WkNqe7jvueZJeEqgmiwOx"

  return (
    <>
      {/* Main section */}
      <section
        ref={ref}
        className={`relative min-h-screen flex items-center overflow-hidden ${
          isDark ? 'bg-ink-lighter' : 'bg-stone-dark'
        }`}
      >
        {/* Background image with parallax effect */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-ink via-ink/80 to-ink/60'
              : 'bg-gradient-to-r from-stone via-stone/80 to-stone/60'
          }`} />
        </div>

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px),
                              linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
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
              <span className={`inline-block text-sm font-mono tracking-widest uppercase mb-6
                ${isDark ? 'text-coral' : 'text-coral-dark'}`}>
                Visite immersive 360°
              </span>

              <h2 className={`font-display text-2xl-fluid mb-6 ${
                isDark ? 'text-stone' : 'text-ink'
              }`}>
                Visitez notre
                <span className="block text-coral italic">atelier</span>
              </h2>

              <p className={`text-lg leading-relaxed mb-8 max-w-lg ${
                isDark ? 'text-stone/70' : 'text-ink/70'
              }`}>
                Découvrez nos installations de pointe et voyez où la magie opère.
                Notre laboratoire à la fine pointe de la technologie est équipé
                des meilleurs outils pour garantir des résultats exceptionnels.
              </p>

              {/* Stats row */}
              <div className={`flex gap-12 mb-10 ${
                isDark ? 'text-stone/60' : 'text-ink/60'
              }`}>
                <div>
                  <div className="text-3xl font-display text-coral">5,000</div>
                  <div className="text-sm font-mono">pi² d'espace</div>
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

              {/* CTA Button */}
              <button
                onClick={() => setIsExpanded(true)}
                className="btn-primary group"
              >
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                Démarrer la visite immersive
              </button>
            </motion.div>

            {/* Right - Preview window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Preview frame */}
              <div className={`relative aspect-video overflow-hidden cursor-pointer group ${
                isDark ? 'bg-ink' : 'bg-white'
              }`}
                onClick={() => setIsExpanded(true)}
              >
                {/* Embedded preview (smaller) */}
                <iframe
                  src={tourUrl}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title="Visite virtuelle AIDE Lab - Aperçu"
                  loading="lazy"
                />

                {/* Overlay for click capture */}
                <div className={`absolute inset-0 transition-opacity duration-300
                  ${isDark ? 'bg-ink/40' : 'bg-stone/40'}
                  group-hover:bg-transparent pointer-events-none`}
                />

                {/* Play overlay - clickable button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(true)
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Ouvrir la visite en plein écran"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-300 bg-coral text-white hover:bg-coral-dark"
                  >
                    <Maximize2 className="w-8 h-8" />
                  </motion.div>
                </button>

                {/* Corner label */}
                <div className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-mono tracking-wide
                  ${isDark ? 'bg-ink/80 text-stone' : 'bg-white/80 text-ink'}`}>
                  360° INTERACTIF
                </div>
              </div>

              {/* Frame decorations */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-coral" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-coral" />

              {/* Hint text */}
              <p className={`mt-6 text-center text-sm font-mono ${
                isDark ? 'text-stone/50' : 'text-ink/50'
              }`}>
                Cliquez pour une expérience plein écran
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
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20
                text-white transition-colors duration-200 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Loading indicator */}
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

            {/* Full iframe */}
            <iframe
              src={tourUrl}
              className="w-full h-full"
              style={{ border: 'none' }}
              title="Visite virtuelle AIDE Lab"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen; accelerometer; gyroscope"
            />

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink to-transparent">
              <div className="container-custom flex items-center justify-between">
                <div className="text-stone/60 text-sm font-mono">
                  Laboratoire AIDE · Laval, Québec
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
