import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHero from '../components/PageHero'
import ProductSection from '../components/ProductSection'
import CTASection from '../components/CTASection'
import { autresProducts } from '../data/products'

export default function AutresProduitsPage() {
  useDocumentMeta({
    title: 'Autres produits dentaires',
    description: 'Cirage diagnostique, couronnes temporaires et protecteurs buccaux sur mesure. Compl\u00e9tez votre offre avec nos produits.'
  })

  return (
    <>
      <PageHero
        eyebrow="AUTRES PRODUITS"
        title="Compl\u00e9tez votre offre avec nos produits compl\u00e9mentaires"
        subtitle="Des solutions additionnelles pour r\u00e9pondre \u00e0 tous les besoins de votre pratique."
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
        headline="Besoin d'informations suppl\u00e9mentaires?"
        description="Notre \u00e9quipe se fera un plaisir de r\u00e9pondre \u00e0 vos questions."
        primaryAction={{ label: "Nous joindre", href: "/fr/contact" }}
        secondaryAction={{ label: "1 (888) 350-2246", href: "tel:1-888-350-2246" }}
      />
    </>
  )
}
