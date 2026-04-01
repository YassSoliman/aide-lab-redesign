import useDocumentMeta from '../hooks/useDocumentMeta'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import Services from '../components/Services'
import VirtualTour from '../components/VirtualTour'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import CTABand from '../components/CTABand'

export default function HomePage() {
  useDocumentMeta({
    title: 'Accueil',
    description: 'Laboratoire dentaire AIDE à Laval, QC. Spécialistes en implants, couronnes et ponts. Assistance chirurgicale sur place. Depuis 2007.'
  })

  return (
    <>
      <Hero />
      <ValueProps />
      <Services />
      <VirtualTour />
      <Partners />
      <Testimonials />
      <CTABand />
    </>
  )
}
