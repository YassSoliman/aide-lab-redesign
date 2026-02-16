import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { navigation } from '../data/testimonials'
import Logo from './Logo'

export default function Header({ theme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = theme === 'dark'

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDark
            ? 'bg-ink/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-stone/90 backdrop-blur-xl border-b border-ink/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <Logo inverted={isDark} className="h-10 md:h-12 transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide link-underline
                    ${isDark ? 'text-stone/80 hover:text-stone' : 'text-ink/80 hover:text-ink'}
                    transition-colors duration-200`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 py-3 min-w-[200px] rounded-sm
                        ${isDark ? 'bg-ink-light border border-white/10' : 'bg-white border border-ink/10'}
                        shadow-xl`}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className={`block px-5 py-2.5 text-sm transition-colors
                            ${isDark
                              ? 'text-stone/70 hover:text-stone hover:bg-white/5'
                              : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                            }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side - CTA & Mobile menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:1-888-350-2246"
              className={`hidden md:flex items-center gap-2 text-sm font-mono
                ${isDark ? 'text-coral' : 'text-coral-dark'}`}
            >
              <Phone className="w-4 h-4" />
              1 (888) 350-2246
            </a>

            <a
              href="/fr/contact"
              className="hidden md:inline-flex btn-primary text-sm py-3 px-6"
            >
              Nous joindre
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 ${isDark ? 'text-stone' : 'text-ink'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden ${
              isDark ? 'bg-ink border-t border-white/5' : 'bg-stone border-t border-ink/5'
            }`}
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 text-lg font-medium
                      ${isDark ? 'text-stone' : 'text-ink'}`}
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className={`block py-1 text-sm
                            ${isDark ? 'text-stone/60' : 'text-ink/60'}`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:1-888-350-2246"
                  className="flex items-center gap-2 text-coral font-mono"
                >
                  <Phone className="w-4 h-4" />
                  1 (888) 350-2246
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
