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
    description: "Proth\u00e8ses fixes, piliers personnalis\u00e9s, barres et guides chirurgicaux. Compatibles avec tous les syst\u00e8mes majeurs.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    imageAlt: "Solutions d'implants dentaires AIDE Lab",
    link: "/fr/produits/implants"
  },
  {
    title: "Couronnes et ponts",
    description: "C\u00e9ramique, zircone et e.max. Choix de couleurs sur place dans notre salle d\u00e9di\u00e9e.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop",
    imageAlt: "Couronnes et ponts dentaires de pr\u00e9cision",
    link: "/fr/produits/couronnes-et-ponts"
  },
  {
    title: "Autres produits",
    description: "Cirage diagnostique, couronnes temporaires et protecteurs buccaux sur mesure.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop",
    imageAlt: "Produits dentaires compl\u00e9mentaires",
    link: "/fr/produits/autres-produits"
  }
]

const trustPillars = [
  { icon: Shield, title: "Compatibilit\u00e9 universelle", description: "Compatible avec Nobel Biocare, Straumann, Dental Wings et plus." },
  { icon: MapPin, title: "Fabriqu\u00e9 au Qu\u00e9bec", description: "Toute la production dans notre laboratoire \u00e0 Laval." },
  { icon: Search, title: "Contr\u00f4le qualit\u00e9", description: "Chaque pi\u00e8ce inspect\u00e9e avant livraison." },
  { icon: Clock, title: "D\u00e9lais rapides", description: "Respect des \u00e9ch\u00e9anciers pour chaque commande." }
]

export default function ProduitsLanding() {
  useDocumentMeta({
    title: 'Produits',
    description: 'D\u00e9couvrez nos implants, couronnes, ponts et produits dentaires fabriqu\u00e9s avec pr\u00e9cision \u00e0 Laval, QC.'
  })

  const trustRef = useRef(null)
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHero
        eyebrow="NOS PRODUITS"
        title="Des solutions dentaires de pr\u00e9cision"
        subtitle="D\u00e9couvrez notre gamme compl\u00e8te de produits fabriqu\u00e9s avec soin dans notre laboratoire \u00e0 Laval."
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
            eyebrow="Qualit\u00e9 certifi\u00e9e"
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
                    bg-ink/5 text-coral-dark">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg text-ink mb-2">{pillar.title}</h3>
                  <p className="text-ink/60 text-sm">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Besoin d'un produit sp\u00e9cifique?"
        description="Contactez-nous pour discuter de vos besoins et obtenir une soumission personnalis\u00e9e."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "1 (888) 350-2246", href: "tel:1-888-350-2246" }}
      />
    </>
  )
}
