import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Sun, Moon, X } from 'lucide-react'

export default function ThemeSwitcher({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    {
      id: 'dark',
      name: 'Sombre',
      description: 'Premium & sophistiqué',
      icon: Moon,
      preview: 'bg-ink'
    },
    {
      id: 'light',
      name: 'Clair',
      description: 'Propre & médical',
      icon: Sun,
      preview: 'bg-stone'
    }
  ]

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-coral text-white rounded-full
          shadow-lg shadow-coral/30 hover:scale-110 transition-transform duration-200"
        aria-label="Changer le thème"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
            />

            {/* Panel content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm
                bg-ink border-l border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="text-stone font-display text-xl">Sélecteur de thème</h3>
                  <p className="text-stone/50 text-sm">Outil de développement</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-stone/60 hover:text-stone transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme options */}
              <div className="p-6 space-y-4">
                {themes.map((t) => {
                  const Icon = t.icon
                  const isActive = theme === t.id

                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id)
                        setIsOpen(false)
                      }}
                      className={`w-full p-4 text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-coral/10 border-2 border-coral'
                          : 'bg-white/5 border-2 border-transparent hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Preview swatch */}
                        <div className={`w-12 h-12 rounded ${t.preview} border border-white/20
                          flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${t.id === 'dark' ? 'text-stone' : 'text-ink'}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`font-medium ${isActive ? 'text-coral' : 'text-stone'}`}>
                              {t.name}
                            </span>
                            {isActive && (
                              <span className="text-xs font-mono px-2 py-0.5 bg-coral/20 text-coral rounded-full">
                                Actif
                              </span>
                            )}
                          </div>
                          <p className="text-stone/50 text-sm mt-1">{t.description}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <p className="text-stone/40 text-xs font-mono leading-relaxed">
                  Utilisez ?theme=dark ou ?theme=light dans l'URL pour définir le thème par défaut.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
