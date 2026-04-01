import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, User, Heart, Lightbulb, Award } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import VirtualTour from '../components/VirtualTour'
import CTASection from '../components/CTASection'
import SocialIcons from '../components/SocialIcons'
import { founders, scanners, timeline, values } from '../data/about'

function HistorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-stone">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-mono tracking-widest uppercase mb-4 text-azure-dark">
              NOTRE HISTOIRE
            </span>
            <h2 className="font-display text-xl-fluid text-cacao mb-6">
              AIDE: Accompagner, Innover, Développer, Exceller
            </h2>
            <p className="text-cacao/70 leading-relaxed mb-4">
              Fondé en 2007 à Laval par Michel Arab T.D. et Maher Karo T.D., le Laboratoire Dentaire AIDE
              est né d'une vision commune: créer un laboratoire où l'expertise artisanale rencontre les technologies
              de pointe.
            </p>
            <p className="text-cacao/70 leading-relaxed mb-4">
              Dès le départ, les fondateurs ont mis l'accent sur un service que peu de laboratoires offrent:
              l'assistance sur place. Nos techniciens se déplacent directement dans les cliniques pour accompagner
              les dentistes lors de cas complexes.
            </p>
            <p className="text-cacao/70 leading-relaxed">
              Près de 20 ans plus tard, cette philosophie reste au coeur de tout ce que nous faisons.
              Chaque pièce fabriquée porte la marque de notre engagement envers l'excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* TODO: Replace with real lab photo */}
            <img
              src="https://images.unsplash.com/photo-1633197551882-b5e2416c9310?w=800&h=600&fit=crop"
              alt="Technicien au microscope au laboratoire dentaire AIDE"
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

function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Jalons"
          title="Notre parcours"
          inView={isInView}
        />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cacao/10 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8
                  ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="pl-12 md:pl-0">
                    <span className="text-2xl font-display text-azure">{item.year}</span>
                    <p className="text-cacao/70 mt-1">{item.event}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-azure -translate-x-1/2 ring-4 ring-white" />
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FoundersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-stone">
      <div className="container-custom">
        <SectionHeader
          eyebrow="L'équipe fondatrice"
          title="Les visages derrière AIDE Lab"
          inView={isInView}
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white border border-cacao/5 p-8"
            >
              <div className="w-20 h-20 rounded-full bg-azure/10 flex items-center justify-center mb-6 mx-auto">
                <User className="w-10 h-10 text-azure" />
              </div>
              <div className="text-center mb-4">
                <h3 className="font-display text-xl text-cacao">{founder.name}</h3>
                <p className="text-sm font-mono text-sage-dark">{founder.title}</p>
              </div>
              <p className="text-cacao/70 text-sm leading-relaxed text-center">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EquipmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Nos équipements"
          title="Technologies de pointe au service de la précision"
          inView={isInView}
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {scanners.map((scanner, i) => (
            <motion.div
              key={scanner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-stone border border-cacao/5 p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-cacao/5 text-azure-dark">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-cacao mb-2">{scanner.name}</h3>
              <p className="text-xs font-mono text-azure-dark mb-3">{scanner.brand}</p>
              <p className="text-cacao/60 text-sm leading-relaxed">{scanner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const icons = [Award, Heart, Lightbulb]

  return (
    <section ref={ref} className="section-padding bg-stone">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Nos valeurs"
          title="Ce qui nous guide au quotidien"
          inView={isInView}
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-azure/10 text-azure">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg text-cacao mb-2">{value.title}</h3>
                <p className="text-cacao/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function AProposPage() {
  useDocumentMeta({
    title: 'À propos',
    description: 'Fondé en 2007 à Laval par Michel Arab T.D. et Maher Karo T.D. Près de 20 ans d\'expertise en laboratoire dentaire.'
  })

  return (
    <>
      <PageHero
        eyebrow="À PROPOS"
        title="Près de 20 ans d'expertise dentaire à Laval"
        subtitle="Un laboratoire fondé sur l'excellence, l'innovation et le service personnalisé."
      />
      <HistorySection />
      <TimelineSection />
      <FoundersSection />
      <EquipmentSection />
      <ValuesSection />

      {/* Social media */}
      <section className="py-12 bg-stone">
        <div className="container-custom text-center">
          <h3 className="font-display text-lg text-cacao mb-4">Suivez-nous sur les réseaux</h3>
          <SocialIcons variant="dark" className="justify-center" />
        </div>
      </section>

      <VirtualTour />
      <CTASection
        headline="Envie de travailler avec nous?"
        description="Découvrez comment AIDE Lab peut devenir votre partenaire de confiance."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "(450) 937-5191", href: "tel:450-937-5191" }}
      />
    </>
  )
}
