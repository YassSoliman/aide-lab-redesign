import { useRef } from 'react'
import { useInView } from 'framer-motion'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'
import { Shield, MapPin, Search, Clock } from 'lucide-react'

const productCards = [
  {
    title: "Implants",
    description: "Prothèses fixes, piliers personnalisés, barres et guides chirurgicaux. Compatibles avec tous les systèmes majeurs.",
    image: "https://images.unsplash.com/photo-1771442873035-474765b40ac6?w=800&h=600&fit=crop",
    imageAlt: "Solutions d'implants dentaires AIDE Lab",
    link: "/fr/produits/implants"
  },
  {
    title: "Couronnes et ponts",
    description: "Céramique, zircone et e.max. Choix de couleurs sur place dans notre salle dédiée.",
    image: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?w=800&h=600&fit=crop",
    imageAlt: "Couronnes et ponts dentaires de précision",
    link: "/fr/produits/couronnes-et-ponts"
  },
  {
    title: "Autres produits",
    description: "Cirage diagnostique, couronnes temporaires et protecteurs buccaux sur mesure.",
    image: "https://images.unsplash.com/photo-1653667767792-9b057ef090fc?w=800&h=600&fit=crop",
    imageAlt: "Produits dentaires complémentaires",
    link: "/fr/produits/autres-produits"
  }
]

const trustPillars = [
  { icon: Shield, title: "Compatibilité universelle", description: "Compatible avec Nobel Biocare, Straumann, Dental Wings et plus." },
  { icon: MapPin, title: "Fabriqué au Québec", description: "Toute la production dans notre laboratoire à Laval." },
  { icon: Search, title: "Contrôle qualité", description: "Chaque pièce inspectée avant livraison." },
  { icon: Clock, title: "Délais rapides", description: "Respect des échéanciers pour chaque commande." }
]

export default function ProduitsLanding() {
  useDocumentMeta({
    title: 'Produits',
    description: 'Découvrez nos implants, couronnes, ponts et produits dentaires fabriqués avec précision à Laval, QC.'
  })

  const trustRef = useRef(null)
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHero
        eyebrow="NOS PRODUITS"
        title="Des solutions dentaires de précision"
        subtitle="Découvrez notre gamme complète de produits fabriqués avec soin dans notre laboratoire à Laval."
      />

      {/* Product cards grid */}
      <section ref={cardsRef} className="section-padding bg-stone">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {productCards.map((card, i) => (
              <ProductCard key={card.title} {...card} index={i} inView={cardsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section ref={trustRef} className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Qualité certifiée"
            title="Pourquoi choisir nos produits?"
            inView={trustInView}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={trustInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4
                    bg-cacao/5 text-azure-dark">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg text-cacao mb-2">{pillar.title}</h3>
                  <p className="text-cacao/60 text-sm">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Besoin d'un produit spécifique?"
        description="Contactez-nous pour discuter de vos besoins et obtenir une soumission personnalisée."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "(450) 937-5191", href: "tel:450-937-5191" }}
      />
    </>
  )
}
