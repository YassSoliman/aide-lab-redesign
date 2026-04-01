import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/contact'

export default function ContactPage() {
  useDocumentMeta({
    title: 'Nous joindre',
    description: 'Contactez le Laboratoire Dentaire AIDE à Laval. Téléphone: (450) 937-5191. Lun-Ven 8h-16h30.'
  })

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-50px" })
  const phoneRef = useRef(null)
  const phoneInView = useInView(phoneRef, { once: true, margin: "-50px" })

  return (
    <>
      <PageHero
        eyebrow="NOUS JOINDRE"
        title="Parlons de votre prochain projet"
        subtitle="Notre équipe vous répondra dans les 24 heures."
      />

      {/* Form + Info */}
      <section ref={formRef} className="section-padding bg-stone">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-xl-fluid text-cacao mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </motion.div>

            {/* Right: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-cacao/5 p-8">
                <h3 className="font-display text-lg text-cacao mb-6">Coordonnées</h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={contactInfo.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-cacao/70 hover:text-azure-dark transition-colors group"
                    >
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>
                        {contactInfo.address.street}<br />
                        {contactInfo.address.city}, {contactInfo.address.province}
                        <ExternalLink className="w-3 h-3 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={contactInfo.phones.local.href} className="flex items-center gap-3 text-cacao/70 hover:text-azure-dark transition-colors">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>
                        <span className="text-xs font-mono text-cacao/40 block">{contactInfo.phones.local.label}</span>
                        {contactInfo.phones.local.number}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-cacao/70">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{contactInfo.hours}</span>
                  </li>
                </ul>
              </div>

              {/* Small map */}
              <div className="mt-6 overflow-hidden border border-cacao/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.5!2d-73.745!3d45.589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM1JzIwLjQiTiA3M8KwNDQnNDIuMCJX!5e0!3m2!1sfr!2sca!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Emplacement du Laboratoire Dentaire AIDE à Laval"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section ref={phoneRef} className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phoneInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl-fluid text-cacao mb-4">
              Vous préférez appeler?
            </h2>
            <p className="text-cacao/70 mb-8 max-w-md mx-auto">
              Notre équipe est disponible du lundi au vendredi, de 8h à 16h30.
            </p>
            <div className="flex items-center justify-center">
              <a href="tel:450-937-5191" className="btn-primary">
                <Phone className="w-5 h-5" />
                (450) 937-5191
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
