import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import ProductSection from '../components/ProductSection'
import CTASection from '../components/CTASection'
import { autresProducts } from '../data/products'

export default function AutresProduitsPage() {
  useDocumentMeta({
    title: 'Autres produits dentaires',
    description: 'Cirage diagnostique, couronnes temporaires et protecteurs buccaux sur mesure. Complétez votre offre avec nos produits.'
  })

  return (
    <>
      <PageHero
        eyebrow="AUTRES PRODUITS"
        title="Complétez votre offre avec nos produits complémentaires"
        subtitle="Des solutions additionnelles pour répondre à tous les besoins de votre pratique."
      />

      {autresProducts.map((product, i) => (
        <ProductSection
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          images={product.images}
          reverse={i % 2 === 1}
        />
      ))}

      <CTASection
        headline="Besoin d'informations supplémentaires?"
        description="Notre équipe se fera un plaisir de répondre à vos questions."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "1 (888) 350-2246", href: "tel:1-888-350-2246" }}
      />
    </>
  )
}
