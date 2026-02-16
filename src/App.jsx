import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Services from './components/Services'
import VirtualTour from './components/VirtualTour'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import './index.css'

function App() {
  // Initialize theme from URL query parameter
  const getInitialTheme = () => {
    const params = new URLSearchParams(window.location.search)
    const urlTheme = params.get('theme')
    if (urlTheme && ['dark', 'light'].includes(urlTheme)) {
      return urlTheme
    }
    return 'dark'
  }

  const [theme, setTheme] = useState(getInitialTheme)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Mark as loaded after a brief delay for animations
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  useEffect(() => {
    // Update body class based on theme
    document.body.className = theme

    // Update URL without reload
    const url = new URL(window.location)
    url.searchParams.set('theme', theme)
    window.history.replaceState({}, '', url)
  }, [theme])

  return (
    <div className={`min-h-screen ${theme}`}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header theme={theme} />

            <main>
              <Hero theme={theme} />
              <ValueProps theme={theme} />
              <Services theme={theme} />
              <VirtualTour theme={theme} />
              <Partners theme={theme} />
              <Testimonials theme={theme} />
              <CTABand theme={theme} />
            </main>

            <Footer theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme switcher - dev tool */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
