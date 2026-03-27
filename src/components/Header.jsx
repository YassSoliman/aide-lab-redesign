import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/navigation'

export default function Header() {
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 text-sm font-medium tracking-wide link-underline transition-colors duration-200
    ${isActive ? 'text-coral-dark' : 'text-ink/80 hover:text-ink'}`

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone/90 backdrop-blur-xl border-b border-ink/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo + Depuis 2007 */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="AIDE Lab"
              className="h-10 md:h-12 transition-all duration-300"
            />
            <span className="hidden sm:inline text-xs font-mono text-sage">Depuis 2007</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.href}
                  className={navLinkClass}
                  end={item.href === '/'}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </NavLink>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 py-3 min-w-[200px] rounded-sm
                        bg-white border border-ink/10 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.href}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-sm transition-colors
                            ${isActive
                              ? 'text-coral-dark bg-ink/5'
                              : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
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
              className="flex items-center gap-2 text-sm font-mono text-coral-dark"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">1 (888) 350-2246</span>
            </a>

            <Link
              to="/fr/contact"
              className="hidden md:inline-flex btn-primary text-sm py-3 px-6"
            >
              Nous joindre
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ink"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
            className="lg:hidden overflow-hidden bg-stone border-t border-ink/5"
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium ${isActive ? 'text-coral-dark' : 'text-ink'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block py-1.5 text-sm ${isActive ? 'text-coral-dark' : 'text-ink/60'}`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-ink/10">
                <a
                  href="tel:1-888-350-2246"
                  className="flex items-center gap-2 font-mono text-coral-dark"
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
