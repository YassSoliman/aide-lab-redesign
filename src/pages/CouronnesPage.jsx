import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import ProductSection from '../components/ProductSection'
import CTASection from '../components/CTASection'
import { couronnesProducts } from '../data/products'

export default function CouronnesPage() {
  useDocumentMeta({
    title: 'Couronnes et ponts',
    description: 'Couronnes en céramique, ponts fixes et service de choix de couleurs avec éclairage calibré. Zircone, e.max et tout-céramique.'
  })

  const highlightRef = useRef(null)
  const highlightInView = useInView(highlightRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHero
        eyebrow="COURONNES ET PONTS"
        title="Redonnez le sourire à vos patients"
        subtitle="Des couronnes et ponts fabriqués avec les meilleurs matériaux et une attention méticuleuse aux détails."
      />

      {/* Product sections */}
      {couronnesProducts.map((product, i) => (
        <ProductSection
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          images={product.images}
          reverse={i % 2 === 1}
        />
      ))}

      {/* Choix de couleurs highlight */}
      <section ref={highlightRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={highlightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
                SERVICE EXCLUSIF
              </span>
              <h2 className="font-display text-xl-fluid text-cacao mb-6">
                Notre salle de choix de couleurs
              </h2>
              <p className="text-cacao/70 leading-relaxed mb-4">
                Nous avons aménagé un espace dédié équipé d'un éclairage calibré reproduisant les conditions de
                lumière naturelle. Ce soin apporté à l'environnement permet une correspondance
                parfaite des teintes avec les dents naturelles de vos patients.
              </p>
              <p className="text-cacao/70 leading-relaxed mb-6">
                Nos techniciens utilisent les guides de teintes Vita et vous accompagnent dans le processus
                pour garantir un résultat esthétique optimal. Ce service est offert sur rendez-vous.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={highlightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* TODO: Replace with real photo of the shade-matching room */}
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop"
                alt="Salle de choix de couleurs avec éclairage calibré chez AIDE Lab"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Un cas de couronnes à discuter?"
        description="Contactez-nous pour planifier votre prochain cas ou réserver un rendez-vous pour le choix de couleurs."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "(450) 937-5191", href: "tel:450-937-5191" }}
      />
    </>
  )
}
