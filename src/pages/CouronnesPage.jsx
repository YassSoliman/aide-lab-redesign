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
    description: 'Couronnes en c\u00e9ramique, ponts fixes et service de choix de couleurs avec \u00e9clairage calibr\u00e9. Zircone, e.max et tout-c\u00e9ramique.'
  })

  const highlightRef = useRef(null)
  const highlightInView = useInView(highlightRef, { once: true, margin: "-100px" })

  return (
    <>
      <PageHero
        eyebrow="COURONNES ET PONTS"
        title="Redonnez le sourire \u00e0 vos patients"
        subtitle="Des couronnes et ponts fabriqu\u00e9s avec les meilleurs mat\u00e9riaux et une attention m\u00e9ticuleuse aux d\u00e9tails."
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
              <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-coral-dark">
                SERVICE EXCLUSIF
              </span>
              <h2 className="font-display text-xl-fluid text-ink mb-6">
                Notre salle de choix de couleurs
              </h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Nous avons am\u00e9nag\u00e9 un espace d\u00e9di\u00e9 \u00e9quip\u00e9 d'un \u00e9clairage calibr\u00e9 reproduisant les conditions de
                lumi\u00e8re naturelle. Ce soin apport\u00e9 \u00e0 l'environnement permet une correspondance
                parfaite des teintes avec les dents naturelles de vos patients.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                Nos techniciens utilisent les guides de teintes Vita et vous accompagnent dans le processus
                pour garantir un r\u00e9sultat esth\u00e9tique optimal. Ce service est offert sur rendez-vous.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={highlightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* TODO: Replace with real photo of the shade-matching room */}
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop"
                alt="Salle de choix de couleurs avec \u00e9clairage calibr\u00e9 chez AIDE Lab"
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
        headline="Un cas de couronnes \u00e0 discuter?"
        description="Contactez-nous pour planifier votre prochain cas ou r\u00e9server un rendez-vous pour le choix de couleurs."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "1 (888) 350-2246", href: "tel:1-888-350-2246" }}
      />
    </>
  )
}
