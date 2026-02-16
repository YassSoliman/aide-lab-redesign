import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

export default function Hero({ theme }) {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const isDark = theme === 'dark'

  const titleWords = ["L'art", "de", "la", "précision", "dentaire."]

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      isDark ? 'bg-ink' : 'bg-stone'
    }`}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-ink via-ink/95 to-ink/80'
            : 'bg-gradient-to-br from-stone via-stone/95 to-stone/80'
        }`} />
      </div>

      {/* Decorative elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 rounded-full bg-coral/5 blur-3xl" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-sage/10 blur-3xl" />

      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium
                ${isDark ? 'bg-white/5 text-sage' : 'bg-ink/5 text-sage-dark'}`}
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              La référence en implants au Québec
            </motion.div>

            {/* Main headline - word by word animation */}
            <h1 className="mb-8 break-words">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`inline-block mr-2 md:mr-4 font-display text-display leading-none
                    ${isDark ? 'text-stone' : 'text-ink'}
                    ${word === 'précision' ? 'text-coral italic' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`text-lg md:text-xl leading-relaxed mb-10 max-w-lg
                ${isDark ? 'text-stone/70' : 'text-ink/70'}`}
            >
              Votre partenaire en excellence dentaire. Nous combinons expertise artisanale
              et technologies de pointe pour des résultats qui dépassent vos attentes.
            </motion.p>

            {/* Email capture form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onSubmit={(e) => e.preventDefault()}
              className="mb-10"
            >
              <div className={`relative flex items-center w-full max-w-md transition-all duration-300 ${
                isFocused ? 'scale-[1.02]' : ''
              }`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="votre@courriel.com"
                  className={`w-full px-4 md:px-6 py-4 pr-14 text-base rounded-none outline-none transition-all duration-300
                    ${isDark
                      ? 'bg-white/5 border-2 border-white/10 text-stone placeholder:text-stone/40 focus:border-coral/50'
                      : 'bg-ink/5 border-2 border-ink/10 text-ink placeholder:text-ink/40 focus:border-coral/50'
                    }`}
                />
                <button
                  type="submit"
                  className="absolute right-2 p-3 bg-coral text-white hover:bg-coral-dark transition-colors duration-200"
                  aria-label="Soumettre"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className={`mt-3 text-sm ${isDark ? 'text-stone/50' : 'text-ink/50'}`}>
                Recevez une soumission personnalisée en 24h
              </p>
            </motion.form>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className={`flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-sm font-mono
                ${isDark ? 'text-stone/50' : 'text-ink/50'}`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Depuis 1998</span>
              </div>
              <span className="hidden sm:block">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Laval, Québec</span>
              </div>
              <span className="hidden sm:block">·</span>
              <div>
                <span className="text-coral font-bold">500+</span> dentistes partenaires
              </div>
            </motion.div>
          </div>

          {/* Right side - floating image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-coral/20 -z-10" />
              <div className="absolute -inset-8 border border-coral/10 -z-10" />

              {/* Main image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop"
                  alt="Précision dentaire"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-ink/60 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-stone/60 via-transparent to-transparent'
                }`} />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className={`absolute -bottom-6 -left-6 p-6 ${
                  isDark ? 'glass-card' : 'bg-white shadow-2xl'
                }`}
              >
                <div className="text-4xl font-display text-coral mb-1">25+</div>
                <div className={`text-sm ${isDark ? 'text-stone/70' : 'text-ink/70'}`}>
                  Années d'expertise
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2
            ${isDark ? 'border-stone/30' : 'border-ink/30'}`}
        >
          <motion.div
            animate={{ height: [4, 12, 4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-coral rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
