import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFoundPage() {
  useDocumentMeta({
    title: '404 - Page introuvable',
    description: 'La page que vous recherchez n\'existe pas.'
  })

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <div className="text-8xl font-display text-azure mb-4">404</div>
        <h1 className="font-display text-xl-fluid text-cacao mb-4">Page introuvable</h1>
        <p className="text-cacao/60 mb-10 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link
            to="/fr/contact"
            className="inline-flex items-center gap-2 px-6 py-4 border border-cacao/20 text-cacao
              hover:bg-cacao hover:text-stone transition-all duration-300"
          >
            Nous joindre
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
