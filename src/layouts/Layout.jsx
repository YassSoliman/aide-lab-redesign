import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCTABar from '../components/MobileCTABar'
import ScrollToTop from '../components/ScrollToTop'
import StructuredData from '../components/StructuredData'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen light">
      <div className="grain-overlay" />

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:px-4 focus:py-2 focus:bg-azure focus:text-white focus:outline-none"
      >
        Aller au contenu principal
      </a>

      <ScrollToTop />
      <StructuredData />
      <Header />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <MobileCTABar />
    </div>
  )
}
