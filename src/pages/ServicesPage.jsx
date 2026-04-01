import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Palette, Box } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { serviceDetails } from '../data/services'

function ServiceBlock({ service, featured = false, reverse = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className={`section-padding ${featured ? 'bg-white' : 'bg-stone'}`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={reverse ? 'lg:order-2' : ''}
          >
            {featured && (
              <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
                {service.subtitle}
              </span>
            )}
            <h2 className="font-display text-xl-fluid text-cacao mb-4">
              {service.title}
            </h2>
            <p className="text-cacao/70 leading-relaxed mb-6">
              {service.description}
            </p>
            {service.benefits && (
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-azure flex-shrink-0 mt-0.5" />
                    <span className="text-cacao/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              to={service.cta.href}
              className="btn-primary inline-flex"
            >
              {service.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={reverse ? 'lg:order-1' : ''}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  useDocumentMeta({
    title: 'Services dentaires | Assistance sur place',
    description: 'Assistance chirurgicale sur place, choix de couleurs en salle dédiée et planification 3D. Des services qui vont au-delà de la fabrication.'
  })

  return (
    <>
      <PageHero
        eyebrow="NOS SERVICES"
        title="Au-delà de la fabrication, nous vous accompagnons"
        subtitle="Des services exclusifs qui font d'AIDE Lab un partenaire de confiance pour votre pratique."
      />

      {serviceDetails.map((service, i) => (
        <ServiceBlock
          key={service.id}
          service={service}
          featured={i === 0}
          reverse={i % 2 === 1}
        />
      ))}

      <CTASection
        headline="Prêt à découvrir la différence AIDE?"
        description="Contactez-nous pour discuter de la façon dont nos services peuvent améliorer votre pratique."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "(450) 937-5191", href: "tel:450-937-5191" }}
      />
    </>
  )
}
